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

const req = https.request({
  hostname: "generativelanguage.googleapis.com",
  path: "/v1beta/models/gemini-3.8-flash:generateContent?key=" + apiKey,
  method: "POST",
  headers: { "Content-Type": "application/json" }
}, (res) => {
  let body = "";
  res.on("data", (chunk) => body += chunk);
  res.on("end", () => {
    try {
      const response = JSON.parse(body);
      
      if (response.error) {
        console.error("\n[Gemini API 에러 발생]:", response.error.message);
        process.exit(1);
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
  console.error("API 요청 중 에러 발생:", e);
  process.exit(1);
});

req.write(data);
req.end();
