import React from 'react';

export default function Page() {
  return (
    <div className="min-h-screen bg-slate-100 flex justify-center">
      <div className="w-full md:max-w-4xl bg-white min-h-screen md:min-h-[90vh] md:my-6 md:rounded-3xl md:shadow-2xl flex flex-col overflow-hidden border-x md:border border-slate-200">
        
        {/* 상단 헤더 */}
        <header className="px-6 py-4 border-b border-slate-100 flex items-center justify-between bg-white sticky top-0 z-10">
          <div className="flex items-center gap-2.5">
            <span className="text-2xl">👷</span>
            <h1 className="font-extrabold text-xl md:text-2xl text-slate-900 tracking-tight">현장노트</h1>
          </div>
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1.5 bg-emerald-50 text-emerald-700 text-xs md:text-sm font-semibold px-3 py-1 rounded-full border border-emerald-200">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              익명 보장
            </span>
          </div>
        </header>

        {/* 서브 타이틀 & 업종 탭 */}
        <div className="px-6 pt-4 pb-3 bg-white border-b border-slate-100">
          <p className="text-xs md:text-sm text-slate-500 mb-3.5">눈치 보지 않는 100% 익명 현장 커뮤니티</p>
          
          <div className="flex gap-2 overflow-x-auto no-scrollbar pb-1">
            <button className="bg-blue-600 text-white text-xs md:text-sm font-semibold px-4 py-2 rounded-full shadow-sm whitespace-nowrap">쿠팡물류</button>
            <button className="bg-slate-100 text-slate-600 hover:bg-slate-200 text-xs md:text-sm font-medium px-4 py-2 rounded-full whitespace-nowrap transition-colors">마켓컬리</button>
            <button className="bg-slate-100 text-slate-600 hover:bg-slate-200 text-xs md:text-sm font-medium px-4 py-2 rounded-full whitespace-nowrap transition-colors">조선소</button>
            <button className="bg-slate-100 text-slate-600 hover:bg-slate-200 text-xs md:text-sm font-medium px-4 py-2 rounded-full whitespace-nowrap transition-colors">반도체/건설</button>
            <button className="bg-slate-100 text-slate-600 hover:bg-slate-200 text-xs md:text-sm font-medium px-4 py-2 rounded-full whitespace-nowrap transition-colors">기타현장</button>
          </div>
        </div>

        {/* 메인 콘텐츠 스크롤 영역 */}
        <main className="flex-1 p-4 md:p-6 space-y-5 bg-slate-50/60">
          
          {/* 출석 체크 배너 */}
          <section className="bg-gradient-to-br from-blue-700 to-indigo-800 rounded-2xl p-5 md:p-7 text-white shadow-md relative overflow-hidden">
            <div className="absolute -right-6 -bottom-6 w-32 h-32 bg-white/10 rounded-full blur-xl pointer-events-none"></div>
            <div className="flex justify-between items-start mb-3">
              <span className="bg-white/20 text-blue-100 text-xs font-medium px-2.5 py-1 rounded-md backdrop-blur-xs">
                오늘의 현장 출근
              </span>
              <span className="text-xs md:text-sm text-blue-200 font-medium">🔥 동료 142명 출근함</span>
            </div>
            <h2 className="text-lg md:text-xl font-bold mb-1.5">오늘 어느 현장/센터로 가셨나요?</h2>
            <p className="text-xs md:text-sm text-blue-100/90 mb-5">가벼운 출석으로 오늘 현장 분위기와 단가를 동료들과 나눠보세요.</p>
            
            <button className="w-full bg-white text-blue-900 hover:bg-blue-50 text-xs md:text-sm font-bold py-3 px-4 rounded-xl shadow-sm transition-all flex items-center justify-center gap-1.5">
              오늘 현장 출석체크하기 👈
            </button>
          </section>

          {/* PC 웹 대응 그리드 영역 (실시간 속보 + 라운지) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            
            {/* 실시간 단가 & 인센티브 속보 */}
            <section className="bg-white rounded-2xl p-5 border border-slate-200/80 shadow-xs flex flex-col justify-between">
              <div>
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-sm md:text-base font-bold text-slate-900 flex items-center gap-1.5">
                    <span>🔥</span> [쿠팡물류] 실시간 단가 속보
                  </h3>
                  <span className="text-xs text-blue-600 font-medium cursor-pointer hover:underline">센터 필터</span>
                </div>

                <div className="space-y-3">
                  <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-100">
                    <div className="flex justify-between items-center mb-1.5">
                      <span className="text-xs font-semibold text-amber-700 bg-amber-50 px-2 py-0.5 rounded border border-amber-200/60">인천 4센터 (허브)</span>
                      <span className="text-xs text-slate-400">10분 전</span>
                    </div>
                    <p className="text-xs md:text-sm text-slate-700 leading-relaxed">오늘 허브 공정 긴급 인센티브 +1.5만 원 확정 문자 왔습니다! 지원하시는 분들 참고하세요.</p>
                  </div>

                  <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-100">
                    <div className="flex justify-between items-center mb-1.5">
                      <span className="text-xs font-semibold text-indigo-700 bg-indigo-50 px-2 py-0.5 rounded border border-indigo-200/60">동탄 1센터 (출고)</span>
                      <span className="text-xs text-slate-400">25분 전</span>
                    </div>
                    <p className="text-xs md:text-sm text-slate-700 leading-relaxed">오늘 출고 공정 확정 잘 뜨네요. 일당 13만 원 고정이고 식사 품질 괜찮습니다.</p>
                  </div>
                </div>
              </div>
            </section>

            {/* 익명 현장 라운지 */}
            <section className="bg-white rounded-2xl p-5 border border-slate-200/80 shadow-xs flex flex-col justify-between">
              <div>
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-sm md:text-base font-bold text-slate-900 flex items-center gap-1.5">
                    <span>💬</span> 익명 현장 라운지
                  </h3>
                  <span className="text-xs text-blue-600 font-medium cursor-pointer hover:underline">전체보기</span>
                </div>

                <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-100">
                  <div className="flex justify-between items-center mb-1.5">
                    <span className="text-xs md:text-sm font-bold text-slate-800">안전화 쿠션 좀 부탁드려요</span>
                    <span className="text-xs text-slate-400">1시간 전</span>
                  </div>
                  <p className="text-xs md:text-sm text-slate-700 leading-relaxed mb-3">매일 1만 보 이상 걸으니까 발바닥이 너무 아파요. 발 편한 안전화나 인솔 쓰시는 거 추천 부탁드립니다!</p>
                  <div className="flex items-center gap-4 text-xs text-slate-500 font-medium">
                    <span>💬 댓글 8</span>
                    <span>🔥 추천 5</span>
                  </div>
                </div>
              </div>
            </section>

          </div>

          {/* 파트너스 추천 장비 */}
          <section className="bg-white rounded-2xl p-5 border border-slate-200/80 shadow-xs">
            <div className="flex justify-between items-center mb-3">
              <h3 className="text-xs font-bold text-slate-500 flex items-center gap-1.5 uppercase tracking-wider">
                <span>🛠️</span> 현장 동료 강력 추천 장비
              </h3>
              <span className="text-xs text-slate-400">쿠팡 파트너스</span>
            </div>

            <div className="bg-gradient-to-r from-slate-50 to-blue-50/50 p-4 rounded-xl border border-slate-200/60 flex items-center justify-between gap-4">
              <div>
                <h4 className="text-xs md:text-sm font-bold text-slate-900 mb-1">현장 필수 방수 안전장화 (KC인증 / 폭신한 인솔)</h4>
                <p className="text-base md:text-lg font-extrabold text-blue-600">35,000원</p>
              </div>
              <button className="bg-blue-600 hover:bg-blue-700 text-white text-xs md:text-sm font-semibold px-4 py-2.5 rounded-xl shadow-sm whitespace-nowrap transition-colors">
                최저가 보기
              </button>
            </div>
          </section>

        </main>

      </div>
    </div>
  );
}
