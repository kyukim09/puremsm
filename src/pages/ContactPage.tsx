import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Phone, MessageCircle, ChevronDown, ChevronUp, Send } from 'lucide-react';

import { db } from '../firebase';
import { collection, addDoc } from 'firebase/firestore';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    address: '',
    agreed: false
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.agreed) {
      alert('개인정보 수집 및 이용에 동의해주세요.');
      return;
    }
    
    try {
      // Firestore에 데이터 저장
      await addDoc(collection(db, 'applicants'), {
        name: formData.name,
        phone: formData.phone,
        address: formData.address,
        createdAt: new Date().toISOString()
      });
      
      setSubmitted(true);
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('신청 중 오류가 발생했습니다. 잠시 후 다시 시도해주세요.');
    }
  };

  const faqs = [
    { q: "무료체험은 정말 무료인가요?", a: "네, 본품 1개월분을 배송비만 부담하시면 무료로 보내드립니다. 체험 후 만족하지 못하실 경우 추가 구매 의무는 전혀 없습니다." },
    { q: "배송은 얼마나 걸리나요?", a: "신청 완료 후 영업일 기준 2~3일 이내에 발송되며, 지역에 따라 1~2일 더 소요될 수 있습니다." },
    { q: "다른 약과 함께 먹어도 되나요?", a: "MSM은 안전한 기능성 원료이나, 질병 치료 중이거나 특정 약물을 복용 중이신 경우 반드시 전문의와 상담 후 섭취하시기 바랍니다." },
    { q: "부작용은 없나요?", a: "식물성 MSM은 화학 합성 제품보다 소화 부담이 적습니다. 다만, 체질에 따라 일시적인 명현 현상이 있을 수 있으니 소량부터 시작해 보시는 것을 추천합니다." }
  ];

  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <div className="pt-10 pb-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-6xl font-black text-slate-900 mb-6">무료체험 신청</h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            백문이 불여일견! 직접 드셔보시고 판단하세요.<br />
            선착순 100명에게만 드리는 특별한 기회입니다.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Application Form */}
          <section>
            <div className="bg-white p-10 md:p-12 rounded-[3rem] shadow-xl border border-primary/10">
              {!submitted ? (
                <form onSubmit={handleSubmit} className="space-y-8">
                  <h2 className="text-3xl font-bold mb-8 text-primary">배송지 정보 입력</h2>
                  
                  <div className="space-y-2">
                    <label className="block font-bold text-lg">성함</label>
                    <input 
                      type="text" 
                      required
                      placeholder="성함을 입력해주세요"
                      className="w-full p-5 bg-slate-50 rounded-2xl border border-slate-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-lg"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="block font-bold text-lg">연락처</label>
                    <input 
                      type="tel" 
                      required
                      placeholder="010-0000-0000"
                      className="w-full p-5 bg-slate-50 rounded-2xl border border-slate-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-lg"
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="block font-bold text-lg">배송 주소</label>
                    <textarea 
                      required
                      placeholder="제품을 받으실 상세 주소를 입력해주세요"
                      rows={3}
                      className="w-full p-5 bg-slate-50 rounded-2xl border border-slate-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-lg"
                      value={formData.address}
                      onChange={(e) => setFormData({...formData, address: e.target.value})}
                    />
                  </div>

                  <div className="flex items-start gap-3">
                    <input 
                      type="checkbox" 
                      id="agreed"
                      className="mt-1.5 w-6 h-6 rounded border-slate-300 text-primary focus:ring-primary"
                      checked={formData.agreed}
                      onChange={(e) => setFormData({...formData, agreed: e.target.checked})}
                    />
                    <label htmlFor="agreed" className="text-slate-600">
                      (필수) 개인정보 수집 및 이용, 배송을 위한 제3자 제공에 동의합니다.
                    </label>
                  </div>

                  <button 
                    type="submit"
                    className="w-full bg-secondary text-white py-6 rounded-2xl text-2xl font-black cta-shadow flex items-center justify-center gap-3 hover:scale-[1.02] transition-transform active:scale-95"
                  >
                    <Send size={28} />
                    무료체험 신청 완료하기
                  </button>
                </form>
              ) : (
                <div className="text-center py-20">
                  <div className="w-24 h-24 bg-primary/10 text-primary rounded-full flex items-center justify-center mx-auto mb-8">
                    <Send size={48} />
                  </div>
                  <h2 className="text-4xl font-black mb-4 text-slate-900">신청이 완료되었습니다!</h2>
                  <p className="text-xl text-slate-600 mb-10">
                    담당자가 확인 후 순차적으로 안내 전화를 드립니다.<br />
                    잠시만 기다려주세요.
                  </p>
                  <button 
                    onClick={() => setSubmitted(false)}
                    className="text-primary font-bold text-lg hover:underline"
                  >
                    다시 신청하기
                  </button>
                </div>
              )}
            </div>
          </section>

          {/* Support & FAQ */}
          <section className="space-y-12">
            <div>
              <h2 className="text-3xl font-bold mb-8">빠른 상담 지원</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <a href="tel:010-5272-2311" className="flex items-center gap-4 p-8 bg-white rounded-3xl shadow-sm border border-slate-100 hover:border-primary transition-colors">
                  <div className="w-14 h-14 bg-primary/10 text-primary rounded-2xl flex items-center justify-center shrink-0">
                    <Phone size={32} />
                  </div>
                  <div>
                    <p className="text-sm text-slate-500">전화 상담</p>
                    <p className="text-2xl font-black text-slate-900">010-5272-2311</p>
                  </div>
                </a>
                <button className="flex items-center gap-4 p-8 bg-[#FEE500] rounded-3xl shadow-sm hover:opacity-90 transition-opacity">
                  <div className="w-14 h-14 bg-black/5 text-slate-900 rounded-2xl flex items-center justify-center shrink-0">
                    <MessageCircle size={32} />
                  </div>
                  <div className="text-left">
                    <p className="text-sm text-slate-700">카카오톡 상담</p>
                    <p className="text-2xl font-black text-slate-900">채널 추가</p>
                  </div>
                </button>
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-8">자주 묻는 질문 (FAQ)</h2>
              <div className="space-y-4">
                {faqs.map((faq, idx) => (
                  <div key={idx} className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
                    <button 
                      onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                      className="w-full p-6 flex justify-between items-center text-left font-bold text-lg"
                    >
                      <span>{faq.q}</span>
                      {openFaq === idx ? <ChevronUp /> : <ChevronDown />}
                    </button>
                    {openFaq === idx && (
                      <div className="px-6 pb-6 text-slate-600 leading-relaxed border-t border-slate-50 pt-4">
                        {faq.a}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
