import React from 'react';
import { BrowserRouter, Routes, Route, Link, NavLink, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import Works from './pages/Works';
import Commitment from './pages/Commitment';
import Company from './pages/Company';
import Contact from './pages/Contact';
import { Phone, MessageCircle, Menu, X, Mail } from 'lucide-react';
import { useState, useEffect } from 'react';

// ===== 共有ナビゲーション =====
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const links = [
    { to: '/', label: 'ホーム' },
    { to: '/works', label: '施工事例' },
    { to: '/commitment', label: 'こだわり' },
    { to: '/company', label: '会社案内' },
    { to: '/contact', label: 'お問い合わせ' },
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-slate-950/95 shadow-xl backdrop-blur-xl' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex justify-between items-center h-16 md:h-20">
        {/* ロゴ */}
        <Link to="/" className="flex flex-col leading-none">
          <span className="text-xl md:text-2xl font-serif font-bold text-white tracking-wide">匠の彩</span>
          <span className="text-[10px] text-slate-400 leading-none mt-0.5">TAKUMI NO IRODORI</span>
        </Link>

        {/* デスクトップメニュー */}
        <div className="hidden lg:flex items-center gap-6">
          {links.map(l => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.to === '/'}
              className={({ isActive }) =>
                `text-sm font-semibold transition-colors hover:text-amber-400 ${isActive ? 'text-amber-400 border-b-2 border-amber-400 pb-0.5' : 'text-slate-300'}`
              }
            >
              {l.label}
            </NavLink>
          ))}
          <a href="tel:0120-XXX-XXX" className="flex items-center gap-2 text-white hover:text-amber-400 transition-colors ml-2 text-sm font-bold">
            <Phone className="w-4 h-4" />0120-XXX-XXX
          </a>
          <Link to="/contact" className="bg-amber-500 hover:bg-amber-600 text-slate-950 px-5 py-2.5 rounded-xl text-sm font-bold transition-all shadow-md hover:shadow-lg">
            無料お見積り
          </Link>
        </div>

        {/* モバイルハンバーガー */}
        <button className="lg:hidden text-white p-2" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* モバイルメニュー */}
      {isOpen && (
        <div className="lg:hidden bg-slate-900/98 backdrop-blur-xl border-t border-white/10 p-6 flex flex-col gap-4">
          {links.map(l => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.to === '/'}
              className={({ isActive }) =>
                `text-base font-bold py-2 border-b border-white/5 ${isActive ? 'text-amber-400' : 'text-slate-200'}`
              }
            >
              {l.label}
            </NavLink>
          ))}
          <Link to="/contact" className="bg-amber-500 text-slate-950 py-4 rounded-xl text-center font-bold mt-2 text-base">
            無料お見積り・ご相談
          </Link>
        </div>
      )}
    </nav>
  );
};

// ===== フッター =====
const Footer = () => (
  <footer className="bg-slate-950 border-t-4 border-amber-500 pt-16 pb-28 lg:pb-12">
    <div className="max-w-7xl mx-auto px-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">
        <div>
          <p className="text-2xl font-serif font-bold text-white mb-2">匠の彩</p>
          <p className="text-xs text-slate-500 mb-6 tracking-widest">TAKUMI NO IRODORI</p>
          <p className="text-slate-400 text-sm leading-relaxed">地域密着で〇〇年の実績。外壁塗装・屋根工事・リフォームまで、住まいのことなら何でもご相談ください。</p>
        </div>
        <div>
          <p className="text-white font-bold mb-5 text-sm tracking-widest uppercase">サイトメニュー</p>
          <ul className="space-y-3 text-sm">
            {[
              ['/', 'ホーム'],
              ['/works', '施工事例'],
              ['/commitment', '私たちのこだわり'],
              ['/company', '会社案内'],
              ['/contact', 'お問い合わせ・無料見積り'],
            ].map(([to, label]) => (
              <li key={to}><Link to={to} className="text-slate-400 hover:text-amber-400 transition-colors">{label}</Link></li>
            ))}
          </ul>
        </div>
        <div>
          <p className="text-white font-bold mb-5 text-sm tracking-widest uppercase">お問い合わせ</p>
          <ul className="space-y-4 text-sm text-slate-400">
            <li className="flex items-center gap-3"><Phone className="w-4 h-4 text-amber-400 shrink-0" />0120-XXX-XXX（8:00〜19:00）</li>
            <li className="flex items-center gap-3"><Mail className="w-4 h-4 text-amber-400 shrink-0" />info@takumi-irodori.jp</li>
            <li className="flex items-start gap-3">
              <span className="text-amber-400 font-bold shrink-0 text-xs mt-0.5">📍</span>
              <span>〒000-0000<br />〇〇県〇〇市〇〇町1-2-3<br /><span className="text-slate-500">施工エリア：〇〇市・〇〇市・〇〇町とその周辺</span></span>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-600">
        <p>© 2026 匠の彩 All Rights Reserved.</p>
        <div className="flex gap-6">
          <a href="#" className="hover:text-slate-400 transition-colors">プライバシーポリシー</a>
          <a href="#" className="hover:text-slate-400 transition-colors">サイトマップ</a>
        </div>
      </div>
    </div>
  </footer>
);

// ===== スマホ固定CTA =====
const MobileStickyCTA = () => (
  <div className="fixed bottom-0 left-0 right-0 z-50 lg:hidden flex bg-slate-900 border-t border-white/10 shadow-2xl">
    <a href="tel:0120-XXX-XXX" className="flex-1 flex flex-col items-center justify-center py-3 border-r border-white/10 active:bg-slate-800 transition-colors">
      <Phone className="w-5 h-5 text-white mb-0.5" />
      <span className="text-[10px] font-bold text-white">お電話</span>
    </a>
    <a href="https://line.me" className="flex-1 flex flex-col items-center justify-center py-3 border-r border-white/10 active:bg-green-900/20 transition-colors">
      <MessageCircle className="w-5 h-5 text-[#06C755] mb-0.5" />
      <span className="text-[10px] font-bold text-[#06C755]">LINE相談</span>
    </a>
    <Link to="/contact" className="flex-1 flex flex-col items-center justify-center py-3 bg-amber-500 active:bg-amber-600 transition-colors">
      <Mail className="w-5 h-5 text-slate-950 mb-0.5" />
      <span className="text-[10px] font-bold text-slate-950">無料見積り</span>
    </Link>
  </div>
);

// ===== メインアプリ =====
export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-amber-500/30">
        <Navbar />
        <main className="pt-16 md:pt-20 pb-20 lg:pb-0">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/works" element={<Works />} />
            <Route path="/commitment" element={<Commitment />} />
            <Route path="/company" element={<Company />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
        <MobileStickyCTA />
      </div>
    </BrowserRouter>
  );
}
