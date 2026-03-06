import React from 'react';
import { motion } from 'motion/react';
import { Activity, Clock, Heart, ThumbsUp } from 'lucide-react';

export default function FunctionsPage() {
  return (
    <div className="pt-10 pb-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-20"
        >
          <h1 className="text-4xl md:text-6xl font-black text-slate-900 mb-6">기능 및 효과</h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            관절 통증 완화부터 연골 건강 유지까지, 식물성 MSM이 선사하는 놀라운 변화를 확인하세요.
          </p>
        </motion.div>

        {/* Mechanism Visualization */}
        <section className="mb-24">
          <div className="bg-white rounded-[3rem] p-12 shadow-sm border border-slate-100">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="relative">
                <img 
                  src="https://loremflickr.com/800/600/joint,anatomy" 
                  alt="Joint Anatomy" 
                  className="rounded-3xl"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-primary/10 rounded-3xl flex items-center justify-center">
                  <Activity className="text-primary animate-pulse" size={100} />
                </div>
              </div>
              <div>
                <h2 className="text-3xl font-bold mb-8">관절 건강 개선 메커니즘</h2>
                <div className="space-y-8">
                  {[
                    { title: "염증 유발 물질 억제", desc: "관절 내 염증을 유발하는 사이토카인 생성을 억제하여 통증을 완화합니다." },
                    { title: "연골 기질 합성 촉진", desc: "연골의 주요 구성 성분인 콜라겐과 프로테오글리칸 합성을 도와 연골을 튼튼하게 합니다." },
                    { title: "항산화 작용", desc: "관절 조직의 산화적 스트레스를 줄여 노화로 인한 관절 손상을 방지합니다." }
                  ].map((item, idx) => (
                    <div key={idx} className="flex gap-6">
                      <div className="w-12 h-12 bg-secondary/10 text-secondary rounded-2xl flex items-center justify-center shrink-0">
                        <ThumbsUp size={24} />
                      </div>
                      <div>
                        <h4 className="text-xl font-bold mb-2">{item.title}</h4>
                        <p className="text-slate-600 leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Clinical Test Result */}
        <section className="mb-24 text-center">
          <h2 className="text-3xl font-bold mb-12">인체 적용 시험 결과</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-10 rounded-3xl shadow-sm border border-slate-100">
              <h3 className="text-xl font-bold mb-6">관절 통증 지수(WOMAC) 변화</h3>
              <div className="h-64 bg-slate-50 rounded-2xl flex items-end justify-around p-6 mb-6">
                <div className="w-16 bg-slate-300 rounded-t-lg h-[90%] relative">
                  <span className="absolute -top-8 left-0 right-0 text-sm font-bold">섭취 전</span>
                </div>
                <div className="w-16 bg-primary rounded-t-lg h-[40%] relative">
                  <span className="absolute -top-8 left-0 right-0 text-sm font-bold text-primary">12주 후</span>
                </div>
              </div>
              <p className="text-slate-500 text-sm">* 45~90세 남녀 50명 대상, 12주간 섭취 결과 (개인차 있음)</p>
            </div>
            <div className="bg-white p-10 rounded-3xl shadow-sm border border-slate-100">
              <h3 className="text-xl font-bold mb-6">관절 뻣뻣함 개선 만족도</h3>
              <div className="h-64 flex items-center justify-center mb-6">
                <div className="relative w-48 h-48 rounded-full border-[16px] border-slate-100 flex items-center justify-center">
                  <div className="absolute inset-0 rounded-full border-[16px] border-primary border-t-transparent border-l-transparent rotate-45"></div>
                  <span className="text-4xl font-black text-primary">88%</span>
                </div>
              </div>
              <p className="text-slate-500 text-sm">* 섭취 후 일상생활 편의성 개선 응답 비율</p>
            </div>
          </div>
        </section>

        {/* Intake Guide */}
        <section className="bg-slate-900 rounded-[3rem] p-12 md:p-20 text-white">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-black mb-8">어떻게 섭취해야 할까요?</h2>
              <div className="space-y-6">
                <div className="flex gap-6 items-center p-6 bg-white/5 rounded-2xl">
                  <Clock className="text-secondary" size={40} />
                  <div>
                    <h4 className="text-xl font-bold">하루 2번, 1회 1정</h4>
                    <p className="opacity-70">아침, 저녁 식사 직후 충분한 물과 함께 섭취하세요.</p>
                  </div>
                </div>
                <div className="flex gap-6 items-center p-6 bg-white/5 rounded-2xl">
                  <Heart className="text-secondary" size={40} />
                  <div>
                    <h4 className="text-xl font-bold">꾸준한 섭취가 핵심</h4>
                    <p className="opacity-70">최소 3개월 이상 꾸준히 섭취하는 것을 권장합니다.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white text-slate-900 p-10 rounded-3xl">
              <h3 className="text-2xl font-bold mb-6">섭취 시 주의사항</h3>
              <ul className="space-y-4 list-disc pl-6 text-slate-600">
                <li>특이체질, 알레르기 체질의 경우 성분을 확인 후 섭취하십시오.</li>
                <li>임산부, 수유부 및 질병 치료 중인 분은 전문가와 상담하십시오.</li>
                <li>유통기한을 확인하시고 섭취량 및 섭취방법을 준수하십시오.</li>
                <li>고온다습한 곳이나 직사광선을 피해 서늘한 곳에 보관하십시오.</li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
