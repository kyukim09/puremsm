import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-400 py-16 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
        <div>
          <h2 className="text-white text-2xl font-bold mb-6">식물성 MSM 고객센터</h2>
          <p className="text-4xl font-black text-white mb-4">010-5272-2311</p>
          <p className="mb-2">상담시간: 평일 09:00 ~ 18:00 (주말/공휴일 휴무)</p>
          <p>점심시간: 12:00 ~ 13:00</p>
        </div>
        <div className="space-y-4 text-sm">
          <p>(주)태비파트너스 | 대표이사: 김영이</p>
          <p>사업자등록번호: 214-88-77765 | 통신판매업신고: 제2017-서울서초-1176호</p>
          <p>주소: 서울특별시 서초구 효령로53길50 </p>
          <p>이메일: ko22021@naver.com</p>
          <div className="pt-6 border-t border-slate-800 flex flex-wrap gap-6">
            <Link to="/intro" className="hover:text-white">회사소개</Link>
            <button className="hover:text-white">이용약관</button>
            <button className="hover:text-white font-bold text-slate-200">개인정보처리방침</button>
          </div>
          <p className="pt-4 opacity-50">© 2024 Plant-based MSM. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
