import React, { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { Users, Calendar, MapPin, Phone, Download, Lock, LogIn } from 'lucide-react';
import { db, auth, googleProvider } from '../firebase';
import { collection, query, orderBy, onSnapshot } from 'firebase/firestore';
import { signInWithPopup, onAuthStateChanged, User } from 'firebase/auth';

interface Applicant {
  id: string;
  name: string;
  phone: string;
  address: string;
  createdAt: string;
}

export default function AdminPage() {
  const [applicants, setApplicants] = useState<Applicant[]>([]);
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState<User | null>(null);
  const [authChecking, setAuthChecking] = useState(true);

  useEffect(() => {
    const unsubscribeAuth = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setAuthChecking(false);
    });
    return () => unsubscribeAuth();
  }, []);

  useEffect(() => {
    if (!user || user.email !== 'dwceo09@gmail.com') return;

    const q = query(collection(db, 'applicants'), orderBy('createdAt', 'desc'));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const data = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      })) as Applicant[];
      setApplicants(data);
      setLoading(false);
    }, (error) => {
      console.error('Firestore error:', error);
      setLoading(false);
    });

    return () => unsubscribe();
  }, [user]);

  const handleLogin = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
    } catch (error) {
      console.error('Login error:', error);
    }
  };

  const downloadCSV = () => {
    const headers = ['ID', '이름', '연락처', '주소', '신청일시'];
    const rows = applicants.map(a => [a.id, a.name, a.phone, a.address, a.createdAt]);
    const csvContent = [headers, ...rows].map(e => e.join(",")).join("\n");
    const blob = new Blob(["\ufeff" + csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.setAttribute("href", url);
    link.setAttribute("download", `신청자명단_${new Date().toLocaleDateString()}.csv`);
    link.click();
  };

  if (authChecking) return <div className="p-20 text-center">인증 확인 중...</div>;

  if (!user || user.email !== 'dwceo09@gmail.com') {
    return (
      <div className="min-h-[70vh] flex flex-col items-center justify-center p-4">
        <div className="bg-white p-12 rounded-[3rem] shadow-2xl text-center max-w-md w-full border border-slate-100">
          <div className="w-20 h-20 bg-primary/10 text-primary rounded-full flex items-center justify-center mx-auto mb-8">
            <Lock size={40} />
          </div>
          <h1 className="text-3xl font-black mb-4">관리자 전용</h1>
          <p className="text-slate-600 mb-10">
            신청자 명단을 확인하시려면<br />
            <strong>dwceo09@gmail.com</strong> 계정으로 로그인하세요.
          </p>
          <button 
            onClick={handleLogin}
            className="w-full flex items-center justify-center gap-3 bg-slate-900 text-white py-5 rounded-2xl font-bold hover:bg-slate-800 transition-colors"
          >
            <LogIn size={24} />
            구글로 로그인하기
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-10 pb-32 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-6">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <span className="bg-primary text-white text-xs font-bold px-2 py-1 rounded">ADMIN</span>
              <span className="text-slate-500 text-sm">{user.email}</span>
            </div>
            <h1 className="text-4xl font-black text-slate-900 mb-2">신청자 관리 시스템</h1>
            <p className="text-slate-600">무료체험 신청 현황을 실시간으로 확인하고 관리하세요.</p>
          </div>
          <div className="flex gap-3">
            <button 
              onClick={() => auth.signOut()}
              className="px-6 py-3 rounded-xl font-bold text-slate-500 hover:bg-slate-200 transition-colors"
            >
              로그아웃
            </button>
            <button 
              onClick={downloadCSV}
              className="flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-xl font-bold hover:opacity-90 transition-opacity shadow-lg"
            >
              <Download size={20} />
              엑셀 다운로드
            </button>
          </div>
        </div>

        {loading ? (
          <div className="text-center py-20">
            <div className="animate-spin w-12 h-12 border-4 border-primary border-t-transparent rounded-full mx-auto mb-4"></div>
            <p className="text-slate-500">데이터를 불러오는 중입니다...</p>
          </div>
        ) : (
          <div className="bg-white rounded-[2rem] shadow-xl overflow-hidden border border-slate-100">
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="bg-slate-900 text-white">
                    <th className="p-6 font-bold">신청일시</th>
                    <th className="p-6 font-bold">이름</th>
                    <th className="p-6 font-bold">연락처</th>
                    <th className="p-6 font-bold">주소</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {applicants.length > 0 ? applicants.map((applicant) => (
                    <motion.tr 
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      key={applicant.id} 
                      className="hover:bg-slate-50 transition-colors"
                    >
                      <td className="p-6 text-slate-500 text-sm">
                        <div className="flex items-center gap-2">
                          <Calendar size={16} />
                          {new Date(applicant.createdAt).toLocaleString()}
                        </div>
                      </td>
                      <td className="p-6 font-bold text-slate-900">
                        <div className="flex items-center gap-2">
                          <Users size={18} className="text-primary" />
                          {applicant.name}
                        </div>
                      </td>
                      <td className="p-6 text-slate-700">
                        <div className="flex items-center gap-2">
                          <Phone size={16} className="text-slate-400" />
                          {applicant.phone}
                        </div>
                      </td>
                      <td className="p-6 text-slate-600 max-w-xs truncate">
                        <div className="flex items-center gap-2">
                          <MapPin size={16} className="text-slate-400" />
                          {applicant.address}
                        </div>
                      </td>
                    </motion.tr>
                  )) : (
                    <tr>
                      <td colSpan={4} className="p-20 text-center text-slate-400">
                        아직 신청자가 없습니다.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

