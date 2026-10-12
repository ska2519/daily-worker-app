'use client';

import React, { useState } from 'react';
import { SafetyProductSchema } from '@app/api-client';

export default function HomePage() {
  const [selectedCategory, setSelectedCategory] = useState('쿠팡물류');

  // API Client 스키마 모의 검증 (안전용품 쿠팡 파트너스 연동)
  const sampleProduct = SafetyProductSchema.safeParse({
    productId: 'Coupang-001',
    title: '현장 필수 방수 안전장화 (KC인증 / 폭신한 인솔)',
    price: 35000,
    affiliateUrl: 'https://link.coupang.com/sample',
    category: 'safety_shoes'
  });

  return (
    <div className="flex flex-col flex-1 pb-10 bg-white">
      {/* 1. 상단 앱 헤더 (100% 익명성 강조) */}
      <header className="p-4 border-b border-gray-100 bg-white sticky top-0 z-20 flex justify-between items-center shadow-xs">
        <div>
          <h1 className="text-lg font-black text-blue-600 tracking-tight">👷‍♂️ 현장노트</h1>
          <p className="text-[10px] text-gray-400 font-medium">눈치 보지 않는 100% 익명 현장 커뮤니티</p>
        </div>
        <div className="flex items-center gap-1.5 bg-emerald-50 text-emerald-700 px-2.5 py-1 rounded-full text-xs font-semibold">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
          익명 보장 🔒
        </div>
      </header>

      {/* 2. 현장 카테고리 필터 (쿠팡, 컬리, 조선소, 반도체 등) */}
      <div className="flex gap-2 px-4 py-3 bg-gray-50 border-b border-gray-100 overflow-x-auto no-scrollbar">
        {['쿠팡물류', '마켓컬리', '조선소', '반도체/건설', '기타현장'].map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`text-xs px-3.5 py-2 rounded-xl font-bold whitespace-nowrap transition-all ${
              selectedCategory === category
                ? 'bg-blue-600 text-white shadow-xs'
                : 'bg-white text-gray-600 border border-gray-200 hover:bg-gray-100'
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* 스크롤 본문 영역 */}
      <div className="flex-1 space-y-5 p-4">
        
        {/* 3. [핵심 킥 1] 현장 출석체크 인증 카드 */}
        <section className="p-4 bg-gradient-to-br from-blue-600 to-indigo-700 text-white rounded-2xl shadow-md">
          <div className="flex justify-between items-center mb-1.5">
            <span className="text-xs bg-white/20 font-medium px-2 py-0.5 rounded-md">오늘의 현장 출근</span>
            <span className="text-xs text-blue-100">🔥 동료 142명 출근함</span>
          </div>
          <h2 className="text-base font-bold mb-1">오늘 어느 현장/센터로 가하셨나요?</h2>
          <p className="text-xs text-blue-100 mb-3.5">가벼운 출석으로 오늘 현장 분위기와 단가를 동료들과 나눠보세요.</p>
          <button className="w-full bg-white text-blue-700 active:bg-blue-50 font-bold text-xs py-3 rounded-xl shadow-xs transition flex items-center justify-center gap-1">
            <span>오늘 현장 출석체크하기</span>
            <span className="text-sm">👉</span>
          </button>
        </section>

        {/* 4. [핵심 킥 2] 실시간 센터/현장 단가 & 인센티브 찌라시 */}
        <section className="space-y-2.5">
          <div className="flex justify-between items-center px-1">
            <h2 className="font-bold text-sm text-gray-900 flex items-center gap-1">
              <span>🔥</span> [{selectedCategory}] 실시간 단가 & 인센티브 속보
            </h2>
            <span className="text-[11px] text-blue-600 font-semibold cursor-pointer">센터 필터</span>
          </div>
          
          <div className="space-y-2">
            <div className="border border-gray-100 bg-gray-50/80 p-3.5 rounded-xl shadow-2xs">
              <div className="flex justify-between items-center text-xs mb-1.5">
                <div className="flex items-center gap-1.5">
                  <span className="bg-orange-100 text-orange-800 text-[11px] px-2 py-0.5 rounded font-bold">인천 4센트 (허브)</span>
                  <span className="text-gray-400 text-[11px]">익명 worker</span>
                </div>
                <span className="text-gray-400 text-[11px]">10분 전</span>
              </div>
              <p className="text-xs text-gray-800 leading-relaxed font-medium">
                오늘 허브 공정 긴급 인센티브 +1.5만 원 확정 문자 왔습니다! 지금 지원 가능하신 분들 참고하세요.
              </p>
            </div>

            <div className="border border-gray-100 bg-gray-50/80 p-3.5 rounded-xl shadow-2xs">
              <div className="flex justify-between items-center text-xs mb-1.5">
                <div className="flex items-center gap-1.5">
                  <span className="bg-emerald-100 text-emerald-800 text-[11px] px-2 py-0.5 rounded font-bold">동탄 1센트 (출고)</span>
                  <span className="text-gray-400 text-[11px]">익명 worker</span>
                </div>
                <span className="text-gray-400 text-[11px]">25분 전</span>
              </div>
              <p className="text-xs text-gray-800 leading-relaxed font-medium">
                오늘 출고 공정 확정 잘 뜨네요. 일당 13만 원 고정이고 식사 품질 괜찮습니다.
              </p>
            </div>
          </div>
        </section>

        {/* 5. [익명 라운지] 자유 수다 수다판 */}
        <section className="space-y-2.5">
          <div className="flex justify-between items-center px-1">
            <h2 className="font-bold text-sm text-gray-900 flex items-center gap-1">
              <span>💬</span> 익명 현장 라운지
            </h2>
            <span className="text-[11px] text-gray-400">전체보기</span>
          </div>

          <div className="border border-gray-100 bg-white p-3.5 rounded-xl shadow-2xs space-y-2">
            <div className="flex justify-between items-center text-xs">
              <span className="text-xs font-bold text-gray-700">안전화 쿠션 추천 좀 부탁드려요</span>
              <span className="text-[11px] text-gray-400">1시간 전</span>
            </div>
            <p className="text-xs text-gray-800 font-normal">
              매일 1만 보 이상 걸으니까 발바닥이 너무 아프네요. 발 편한 안전화나 인솔 쓰시는 거 추천 부탁드립니다!
            </p>
            <div className="flex items-center gap-3 text-[11px] text-gray-400 pt-1 border-t border-gray-50">
              <span>💬 댓글 8</span>
              <span>👍 추천 5</span>
            </div>
          </div>
        </section>

        {/* 6. [수익화] 자연스러운 안전용품 큐레이션 (쿠팡 파트너스 연동) */}
        <section className="pt-2">
          <div className="border border-blue-100 bg-blue-50/50 rounded-2xl p-3.5 space-y-2.5">
            <div className="flex justify-between items-center">
              <span className="text-[11px] font-bold text-blue-900 bg-blue-100/80 px-2 py-0.5 rounded">
                🛠️ 현장 동료 강력 추천 장비
              </span>
              <span className="text-[10px] text-gray-400">쿠팡 파트너스</span>
            </div>

            {sampleProduct.success ? (
              <div className="flex items-center justify-between gap-3 bg-white p-3 rounded-xl shadow-2xs">
                <div className="flex-1 min-w-0">
                  <h3 className="text-xs font-bold text-gray-900 truncate mb-1">
                    {sampleProduct.data.title}
                  </h3>
                  <p className="text-sm font-black text-blue-600">
                    {sampleProduct.data.price.toLocaleString()}원
                  </p>
                </div>
                <a 
                  href={sampleProduct.data.affiliateUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-blue-600 active:bg-blue-700 text-white text-xs font-bold px-3.5 py-2 rounded-lg whitespace-nowrap shadow-xs"
                >
                  최저가 보기
                </a>
              </div>
            ) : null}
          </div>
        </section>

      </div>
    </div>
  );
}
