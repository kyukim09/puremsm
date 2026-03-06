import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Phone, Menu, X } from 'lucide-react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: '홈', path: '/' },
    { name: '상세정보', path: '/details' },
    { name: '기능/효과', path: '/functions' },
    { name: '브랜드소개', path: '/intro' },
    { name: '무료체험신청', path: '/contact' },
  ];

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-primary/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">MSM</span>
            </div>
            <span className="text-2xl font-black text-primary hidden sm:block">식물성 MSM</span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`text-lg font-semibold transition-colors hover:text-secondary ${
                  location.pathname === item.path ? 'text-secondary border-b-2 border-secondary' : 'text-slate-600'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Contact & Mobile Menu Toggle */}
          <div className="flex items-center gap-4">
            <a href="tel:010-5272-2311" className="hidden lg:flex items-center gap-2 text-primary font-bold text-xl">
              <Phone size={24} />
              <span>010-5272-2311</span>
            </a>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 text-slate-600"
            >
              {isOpen ? <X size={32} /> : <Menu size={32} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-primary/10 py-4 px-6 space-y-4 shadow-xl">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className="block text-xl font-bold text-slate-800 hover:text-primary"
            >
              {item.name}
            </Link>
          ))}
          <a href="tel:010-5272-2311" className="flex items-center gap-2 text-primary font-bold text-2xl pt-4 border-t border-slate-100">
            <Phone size={28} />
            <span>010-5272-2311</span>
          </a>
        </div>
      )}
    </header>
  );
}
