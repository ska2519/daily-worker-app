const https = require("https");
const fs = require("fs");

const apiKey = process.env.GEMINI_API_KEY;
const prompt = process.env.PROMPT_CONTEXT;

if (!apiKey) {
  console.error("에러: GEMINI_API_KEY가 설정되지 않았습니다.");
  process.exit(1);
}

console.log("=== Gemini AI 자율 에이전트 구동 시작 ===");
console.log("전달받은 요구사항:", prompt);

const data = JSON.stringify({
  contents: [{
    parts: [{
      text: "당신은 전문 소프트웨어 개발 AI 에이전트입니다. 다음 이슈 요구사항을 분석하고, 프로젝트의 README.md 파일에 추가할 적절한 소개 한 줄 문구만 깔끔하게 작성해주세요. 다른 설명 없이 오직 추가할 텍스트만 출력하세요: " + prompt
    }]
  }]
});

// 모델을 순서대로 정의 (1순위: 최신 플래시, 2순위: 안정적인 대체 모델)
const models = ["gemini-3.8-flash", "gemini-3.5-flash"];

function callGemini(modelIndex = 0) {
  const currentModel = models[modelIndex];
  console.log(`\n시도 중인 모델: ${currentModel}`);

  const req = https.request({
    hostname: "generativelanguage.googleapis.com",
    path: `/v1beta/models/${currentModel}:generateContent?key=${apiKey}`,
    method: "POST",
    headers: { "Content-Type": "application/json" }
  }, (res) => {
    let body = "";
    res.on("data", (chunk) => body += chunk);
    res.on("end", () => {
      try {
        const response = JSON.parse(body);
        
        // API 에러 발생 시 (High demand 등)
        if (response.error) {
          console.warn(`[경고] ${currentModel} 모델 에러 발생:`, response.error.message);
          
          // 다음 순서의 대체 모델이 남아있다면 재시도
          if (modelIndex + 1 < models.length) {
            console.log(`-> 대체 모델(${models[modelIndex + 1]})로 자동 전환하여 재시도합니다.`);
            return callGemini(modelIndex + 1);
          } else {
            console.error("[에러] 모든 모델 시도가 실패했습니다.");
            process.exit(1);
          }
        }

        const resultText = response.candidates?.[0]?.content?.parts?.[0]?.text?.trim();
        console.log("\n[Gemini AI 생성 결과]:", resultText);

        if (resultText) {
          const readmePath = "./README.md";
          const addition = "\n\n> " + resultText + "\n";
          fs.appendFileSync(readmePath, addition, "utf8");
          console.log("README.md 파일 수정 완료!");
        } else {
          console.error("생성된 텍스트가 없습니다.");
          process.exit(1);
        }
      } catch (e) {
        console.error("응답 파싱 실패:", body);
        process.exit(1);
      }
    });
  });

  req.on("error", (e) => {
    console.error("API 네트워크 요청 에러:", e);
    if (modelIndex + 1 < models.length) {
      console.log(`-> 네트워크 에러로 인해 대체 모델(${models[modelIndex + 1]})로 재시도합니다.`);
      callGemini(modelIndex + 1);
    } else {
      process.exit(1);
    }
  });

  req.write(data);
  req.end();
}

// 최초 실행 (0번 인덱스 모델부터 시작)
callGemini(0);
