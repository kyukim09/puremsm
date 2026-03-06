import React from 'react';
import { motion } from 'motion/react';
import { Check, ShieldCheck, Zap, Leaf } from 'lucide-react';

export default function DetailsPage() {
  return (
    <div className="pt-10 pb-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-20"
        >
          <h1 className="text-4xl md:text-6xl font-black text-slate-900 mb-6">식물성 MSM 상세 정보</h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            자연에서 찾은 순수한 힘, 100% 식물성 원료로 관절 건강의 근본을 채웁니다.
          </p>
        </motion.div>

        {/* Comparison Table */}
        <section className="mb-24">
          <h2 className="text-3xl font-bold mb-10 text-center">일반 MSM vs 식물성 MSM 비교</h2>
          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-3xl overflow-hidden shadow-lg border-collapse">
              <thead>
                <tr className="bg-slate-100">
                  <th className="p-6 text-left text-xl">구분</th>
                  <th className="p-6 text-center text-xl text-slate-500">일반(화학합성) MSM</th>
                  <th className="p-6 text-center text-xl text-primary font-black">식물성 MSM</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { label: "원료 출처", normal: "석유, 석탄 등 화학 원료", plant: "옥수수, 사탕수수 등 식물 유래" },
                  { label: "추출 방식", normal: "화학적 합성 공정", plant: "4단계 증류 추출 공법" },
                  { label: "순도", normal: "95% ~ 98%", plant: "99.9% 초고순도" },
                  { label: "소화 흡수", normal: "민감한 분들은 속 쓰림 발생", plant: "부드럽고 편안한 소화 흡수" },
                  { label: "안전성", normal: "중금속 잔류 위험 존재", plant: "중금속/불순물 완벽 제거" }
                ].map((row, idx) => (
                  <tr key={idx} className="border-t border-slate-100">
                    <td className="p-6 font-bold text-lg bg-slate-50/50">{row.label}</td>
                    <td className="p-6 text-center text-slate-500">{row.normal}</td>
                    <td className="p-6 text-center text-primary font-bold bg-primary/5">{row.plant}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Manufacturing Process */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-24">
          <div>
            <h2 className="text-3xl font-bold mb-8">독보적인 4단계 증류 추출 공법</h2>
            <p className="text-lg text-slate-600 leading-relaxed mb-8">
              단순한 결정화 방식이 아닙니다. 식물성 MSM은 끓는점 차이를 이용한 4단계 증류 공법을 통해 
              0.1%의 불순물까지 완벽하게 걸러냈습니다. 이것이 바로 우리가 '고순도'를 자신하는 이유입니다.
            </p>
            <div className="space-y-4">
              {[
                { title: "1단계: 원료 정제", desc: "엄선된 식물 원료에서 MSM 성분 추출" },
                { title: "2단계: 고온 증류", desc: "불순물 분리를 위한 정밀 가열" },
                { title: "3단계: 냉각 결정", desc: "순수 MSM 결정체 형성" },
                { title: "4단계: 최종 검수", desc: "99.9% 순도 확인 및 품질 테스트" }
              ].map((step, idx) => (
                <div key={idx} className="flex gap-4 p-4 bg-white rounded-2xl shadow-sm">
                  <div className="w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center font-bold shrink-0">
                    {idx + 1}
                  </div>
                  <div>
                    <h4 className="font-bold">{step.title}</h4>
                    <p className="text-slate-500 text-sm">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <img 
              src="https://loremflickr.com/800/1000/laboratory,science" 
              alt="Lab Process" 
              className="rounded-3xl shadow-2xl"
              referrerPolicy="no-referrer"
            />
            <div className="absolute top-10 left-10 bg-white/90 backdrop-blur p-6 rounded-2xl shadow-lg border border-primary/20">
              <ShieldCheck className="text-primary mb-2" size={40} />
              <p className="font-bold">GMP 인증 시설 제조</p>
            </div>
          </div>
        </section>

        {/* Key Features */}
        <section className="bg-primary rounded-[3rem] p-12 md:p-20 text-white">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-black mb-4">식물성 MSM만의 3대 핵심 가치</h2>
            <p className="text-primary-foreground/80">타협하지 않는 품질로 보답합니다.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { icon: <Leaf size={48} />, title: "100% Vegan", desc: "동물성 원료 및 화학 합성 원료를 일체 사용하지 않은 비건 인증 제품입니다." },
              { icon: <Zap size={48} />, title: "High Absorption", desc: "식물 유래 성분으로 인체 친화력이 높아 체내 흡수가 빠르고 효과적입니다." },
              { icon: <Check size={48} />, title: "Pure Quality", desc: "99.9% 순도로 불필요한 첨가물 없이 핵심 성분만 꽉 채웠습니다." }
            ].map((item, idx) => (
              <div key={idx} className="text-center">
                <div className="inline-block p-6 bg-white/10 rounded-3xl mb-6 text-secondary">
                  {item.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                <p className="text-lg opacity-80 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
