import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, CheckCircle2, Star, Quote } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function MainPage() {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center pt-20 pb-32">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://loremflickr.com/1600/900/elderly,active" 
            alt="Active Seniors" 
            className="w-full h-full object-cover opacity-20"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background via-background/80 to-background"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block bg-primary/10 text-primary px-6 py-2 rounded-full font-bold text-lg mb-6">
              누적 판매 100만 병 돌파!
            </span>
            <h1 className="text-5xl md:text-7xl font-black text-slate-900 leading-tight mb-8">
              지긋지긋한 무릎 통증,<br />
              <span className="text-primary">100% 식물성</span>으로 가볍게!
            </h1>
            <p className="text-xl md:text-2xl text-slate-600 mb-12 max-w-3xl mx-auto leading-relaxed">
              화학 합성 MSM과는 차원이 다른 흡수율.<br />
              5060 부모님들이 먼저 찾는 바로 그 제품, 지금 무료로 체험해보세요.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="bg-secondary text-white px-10 py-6 rounded-2xl text-2xl font-black cta-shadow hover:scale-105 transition-transform">
                무료체험 신청하기
              </Link>
              <Link to="/details" className="bg-white text-primary border-2 border-primary px-10 py-6 rounded-2xl text-2xl font-black hover:bg-primary/5 transition-colors">
                상세정보 보기
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Problem Agitation */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-6">혹시 이런 통증 때문에 힘드신가요?</h2>
            <div className="w-24 h-2 bg-secondary mx-auto rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "계단 오르내릴 때", desc: "무릎이 시큰거리고 힘이 빠져서 난간을 잡아야만 해요.", img: "https://loremflickr.com/600/400/stairs,knee" },
              { title: "비 오기 전날 밤", desc: "뼈마디가 쑤시고 욱신거려서 잠을 설칠 때가 많아요.", img: "https://loremflickr.com/600/400/rain,pain" },
              { title: "앉았다 일어날 때", desc: "아이고 소리가 절로 나고 한참을 서 있어야 걸음이 떼져요.", img: "https://loremflickr.com/600/400/chair,senior" }
            ].map((item, idx) => (
              <motion.div 
                key={idx}
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 30 }}
                viewport={{ once: true }}
                className="bg-background rounded-3xl overflow-hidden shadow-sm"
              >
                <img src={item.img} alt={item.title} className="w-full h-48 object-cover" referrerPolicy="no-referrer" />
                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                  <p className="text-slate-600 text-lg leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Solution Preview */}
      <section className="py-24 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -50 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-black mb-8 leading-tight">
                왜 일반 MSM이 아닌<br />
                <span className="text-secondary">식물성 MSM</span>이어야 할까요?
              </h2>
              <ul className="space-y-6">
                {[
                  "석유/석탄 유래가 아닌 100% 식물성 원료",
                  "증류 추출 공법으로 완성한 99.9% 고순도",
                  "화학 부형제 ZERO, 속 쓰림 없는 편안함",
                  "식약처 인증 관절 및 연골 건강 기능성"
                ].map((text, idx) => (
                  <li key={idx} className="flex items-start gap-4 text-xl">
                    <CheckCircle2 className="text-secondary shrink-0 mt-1" size={28} />
                    <span>{text}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-12">
                <Link to="/functions" className="inline-flex items-center gap-2 text-secondary font-bold text-2xl hover:underline">
                  자세한 효능 알아보기 <ArrowRight />
                </Link>
              </div>
            </motion.div>
            <motion.div
              whileInView={{ opacity: 1, scale: 1 }}
              initial={{ opacity: 0, scale: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <img 
                src="https://loremflickr.com/800/800/corn,organic" 
                alt="Plant Source" 
                className="rounded-full border-8 border-white/20 shadow-2xl"
                referrerPolicy="no-referrer"
              />
              <div className="absolute -bottom-8 -right-8 bg-white text-primary p-8 rounded-3xl shadow-xl">
                <p className="text-4xl font-black">99.9%</p>
                <p className="text-lg font-bold">압도적 순도</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-6">직접 경험하신 분들의 생생한 후기</h2>
            <p className="text-xl text-slate-600">이미 수만 명이 관절의 자유를 되찾았습니다.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { name: "김*순 (62세)", text: "등산이 취미였는데 무릎 때문에 포기했었어요. 식물성 MSM 먹고 나서 다시 산에 갑니다. 속도 편하고 너무 좋아요.", rating: 5 },
              { name: "이*철 (58세)", text: "아침에 일어날 때 손가락 마디마디가 뻣뻣했는데, 보름 정도 꾸준히 먹으니 훨씬 부드러워진 게 느껴집니다.", rating: 5 },
              { name: "박*자 (65세)", text: "무료체험으로 시작했다가 지금은 온 가족이 다 같이 먹고 있어요. 확실히 식물성이라 그런지 소화가 잘 돼요.", rating: 5 },
              { name: "최*호 (71세)", text: "손자 녀석 안아주기도 힘들었는데 이제는 번쩍번쩍 안아줍니다. 관절 건강이 삶의 질을 바꾸네요.", rating: 5 }
            ].map((review, idx) => (
              <motion.div 
                key={idx}
                whileHover={{ y: -10 }}
                className="bg-white p-10 rounded-3xl shadow-sm border border-slate-100 relative"
              >
                <Quote className="absolute top-8 right-8 text-primary/10" size={60} />
                <div className="flex gap-1 mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="text-secondary fill-secondary" size={20} />
                  ))}
                </div>
                <p className="text-xl text-slate-800 leading-relaxed mb-6 italic">"{review.text}"</p>
                <p className="font-bold text-lg text-primary">{review.name}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-white text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-4xl md:text-6xl font-black mb-8 leading-tight">
            지금 바로 <span className="text-secondary">7일간의 기적</span>을<br />
            무료로 체험해보세요!
          </h2>
          <p className="text-2xl text-slate-600 mb-12">
            선착순 100명 한정, 배송비만 내고 본품 체험 기회<br />
            (불만족 시 100% 환불 보장)
          </p>
          <Link to="/contact" className="inline-block bg-secondary text-white px-16 py-8 rounded-full text-3xl font-black cta-shadow hover:scale-105 transition-transform">
            무료체험 지금 신청하기
          </Link>
        </div>
      </section>
    </div>
  );
}
