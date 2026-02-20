/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Menu, 
  X, 
  Star, 
  CheckCircle2, 
  ShieldCheck, 
  Award, 
  Phone, 
  Mail, 
  MapPin, 
  ArrowRight,
  ChevronRight,
  Quote
} from 'lucide-react';

// --- Components ---

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${isScrolled ? 'glass-nav py-3' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 gold-gradient rounded-sm flex items-center justify-center">
            <span className="text-white font-serif text-xl font-bold">匠</span>
          </div>
          <span className={`text-2xl font-serif font-bold tracking-wider ${isScrolled ? 'text-white' : 'text-white'}`}>
            匠の彩 <span className="text-sm font-sans font-light tracking-widest ml-1 opacity-80">TAKUMI NO IRODORI</span>
          </span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {['施工事例', 'こだわり', 'お客様の声', '会社概要'].map((item) => (
            <a key={item} href={`#${item}`} className="text-white/90 hover:text-gold transition-colors text-sm font-medium tracking-widest">
              {item}
            </a>
          ))}
          <button className="gold-gradient text-white px-6 py-2.5 rounded-full text-sm font-bold tracking-widest hover:shadow-lg hover:shadow-gold/20 transition-all">
            無料見積り
          </button>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-white" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-navy p-6 flex flex-col gap-4 md:hidden border-t border-white/10"
          >
            {['施工事例', 'こだわり', 'お客様の声', '会社概要'].map((item) => (
              <a key={item} href="#" className="text-white text-lg font-serif" onClick={() => setIsMobileMenuOpen(false)}>
                {item}
              </a>
            ))}
            <button className="gold-gradient text-white py-4 rounded-lg font-bold">
              無料見積り
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden flex items-center justify-center">
      {/* Background Image - Japanese Modern House */}
      <div className="absolute inset-0">
        <img 
          src="https://images.unsplash.com/photo-1542051841857-5f90071e7989?auto=format&fit=crop&q=80&w=2000" 
          alt="Modern Japanese House" 
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-navy/65 backdrop-blur-[1px]"></div>
      </div>

      <div className="relative z-10 text-center px-6 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <span className="inline-block text-gold font-bold tracking-[0.4em] text-xs md:text-sm mb-6 uppercase">
            Japanese Craftsmanship & Quality
          </span>
          <h1 className="text-5xl md:text-7xl text-white font-serif leading-tight mb-8">
            日本の四季に耐える、<br />
            <span className="text-gold-light">極上の彩り</span>を。
          </h1>
          <p className="text-white/80 text-lg md:text-xl font-light mb-12 max-w-2xl mx-auto leading-relaxed">
            一級塗装技能士が、日本の気候風土に最適な施工をご提案。<br className="hidden md:block" />
            伝統の技と最新の塗料で、大切な住まいを次世代へ繋ぎます。
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="gold-gradient text-white px-10 py-5 rounded-full text-lg font-bold tracking-widest hover:scale-105 transition-transform shadow-2xl shadow-gold/30">
              30秒で完了！無料見積り
            </button>
            <button className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-10 py-5 rounded-full text-lg font-bold tracking-widest hover:bg-white/20 transition-all">
              施工事例を見る
            </button>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/50 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] tracking-[0.2em] uppercase">Scroll</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-white/50 to-transparent"></div>
      </motion.div>
    </section>
  );
};

const BeforeAfter = () => {
  return (
    <section className="py-24 bg-cream overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif mb-4">日本の住まいに、新たな息吹を</h2>
          <div className="w-20 h-1 gold-gradient mx-auto"></div>
          <p className="mt-6 text-navy/60 max-w-2xl mx-auto">
            高温多湿な日本の気候。厳しい環境から家を守り、美観を維持するための最適な施工をお届けします。
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <div className="relative group overflow-hidden rounded-2xl shadow-xl">
              <div className="absolute top-4 left-4 z-10 bg-navy/80 text-white px-4 py-1 text-xs font-bold rounded-full">BEFORE</div>
              <img 
                src="https://images.unsplash.com/photo-1528190336454-13cd56b45b5a?auto=format&fit=crop&q=80&w=1000" 
                alt="Before painting - Japanese house" 
                className="w-full aspect-[4/3] object-cover grayscale opacity-80"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="relative group overflow-hidden rounded-2xl shadow-2xl border-4 border-white">
              <div className="absolute top-4 left-4 z-10 gold-gradient text-white px-4 py-1 text-xs font-bold rounded-full">AFTER</div>
              <img 
                src="https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&q=80&w=1000" 
                alt="After painting - Japanese house" 
                className="w-full aspect-[4/3] object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
          <div className="flex flex-col justify-center space-y-8">
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-navy/5">
              <h3 className="text-2xl font-serif mb-4 flex items-center gap-3">
                <CheckCircle2 className="text-gold" /> 
                湿気・カビ対策の徹底
              </h3>
              <p className="text-navy/70 leading-relaxed">
                日本の住宅で最も多い悩みである「湿気」。通気性を確保しつつ、強力な防カビ・防藻性能を持つ塗料を厳選しています。
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-navy/5">
              <h3 className="text-2xl font-serif mb-4 flex items-center gap-3">
                <CheckCircle2 className="text-gold" /> 
                遮熱・断熱で省エネ
              </h3>
              <p className="text-navy/70 leading-relaxed">
                夏の猛暑対策として遮熱塗装を推奨。室温上昇を抑え、エアコン代の節約にも貢献します。
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-navy/5">
              <h3 className="text-2xl font-serif mb-4 flex items-center gap-3">
                <CheckCircle2 className="text-gold" /> 
                伝統建築から現代住宅まで
              </h3>
              <p className="text-navy/70 leading-relaxed">
                和瓦の屋根や木部塗装、最新のサイディング外壁まで、あらゆる日本の建築様式に精通した職人が対応します。
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const TrustBadges = () => {
  return (
    <section className="py-16 bg-navy text-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { icon: <Award className="w-12 h-12 text-gold" />, title: "一級塗装技能士", desc: "国家資格保持者による施工" },
            { icon: <ShieldCheck className="w-12 h-12 text-gold" />, title: "10年長期保証", desc: "万全のアフターサービス" },
            { icon: <CheckCircle2 className="w-12 h-12 text-gold" />, title: "自社完全施工", desc: "中間マージンなしの適正価格" },
            { icon: <Star className="w-12 h-12 text-gold" />, title: "地域密着20年", desc: "地元に愛される信頼の実績" },
          ].map((badge, idx) => (
            <div key={idx} className="flex flex-col items-center text-center space-y-4">
              <div className="p-4 bg-white/5 rounded-full border border-white/10">
                {badge.icon}
              </div>
              <h4 className="text-lg font-serif">{badge.title}</h4>
              <p className="text-xs text-white/50 tracking-widest">{badge.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Testimonials = () => {
  const reviews = [
    { name: "佐藤 様", location: "東京都世田谷区", text: "築15年で初めての塗装でしたが、色選びから丁寧に相談に乗っていただきました。職人さんのマナーも素晴らしく、仕上がりも新築のようで大満足です。", rating: 5 },
    { name: "田中 様", location: "神奈川県横浜市", text: "見積もりの段階で、他社では指摘されなかった細かいひび割れまで見つけてくれました。誠実な対応に惹かれてお願いしましたが、正解でした。", rating: 5 },
    { name: "伊藤 様", location: "埼玉県さいたま市", text: "近所への挨拶回りもしっかりしてくださり、トラブルなく終わりました。毎日の作業報告も写真付きで分かりやすく、安心してお任せできました。", rating: 5 },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif mb-4">お客様からの信頼の証</h2>
          <div className="w-20 h-1 gold-gradient mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((review, idx) => (
            <div key={idx} className="bg-cream p-8 rounded-3xl relative">
              <Quote className="absolute top-6 right-8 text-gold/20 w-12 h-12" />
              <div className="flex gap-1 mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-gold text-gold" />
                ))}
              </div>
              <p className="text-navy/80 mb-8 leading-relaxed italic">"{review.text}"</p>
              <div className="border-t border-navy/10 pt-6">
                <p className="font-bold text-navy">{review.name}</p>
                <p className="text-xs text-navy/50">{review.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const ContactForm = () => {
  return (
    <section id="contact" className="py-24 bg-navy relative overflow-hidden">
      {/* Abstract Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        <div className="bg-white rounded-[2rem] overflow-hidden shadow-2xl flex flex-col md:flex-row">
          <div className="md:w-2/5 gold-gradient p-12 text-white flex flex-col justify-between">
            <div>
              <h2 className="text-4xl font-serif mb-6">無料見積り・ご相談</h2>
              <p className="text-white/80 mb-12">
                外壁の診断からお見積りまで、すべて無料です。
                強引な営業は一切いたしません。
              </p>
            </div>
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs opacity-70">お電話でのお問い合わせ</p>
                  <p className="text-xl font-bold">0120-XXX-XXX</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs opacity-70">メールでのお問い合わせ</p>
                  <p className="text-lg">info@takumi-irodori.jp</p>
                </div>
              </div>
            </div>
          </div>

          <div className="md:w-3/5 p-12">
            <form className="space-y-6">
              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold text-navy/50 uppercase tracking-widest">お名前</label>
                  <input type="text" className="w-full bg-cream border-none rounded-xl px-4 py-3 focus:ring-2 focus:ring-gold outline-none" placeholder="山田 太郎" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-navy/50 uppercase tracking-widest">お電話番号</label>
                  <input type="tel" className="w-full bg-cream border-none rounded-xl px-4 py-3 focus:ring-2 focus:ring-gold outline-none" placeholder="090-0000-0000" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold text-navy/50 uppercase tracking-widest">メールアドレス</label>
                <input type="email" className="w-full bg-cream border-none rounded-xl px-4 py-3 focus:ring-2 focus:ring-gold outline-none" placeholder="example@mail.com" />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold text-navy/50 uppercase tracking-widest">ご相談内容</label>
                <textarea className="w-full bg-cream border-none rounded-xl px-4 py-3 focus:ring-2 focus:ring-gold outline-none h-32" placeholder="外壁のひび割れが気になる、見積もりが欲しい等"></textarea>
              </div>
              <button className="w-full gold-gradient text-white py-5 rounded-xl font-bold text-lg shadow-xl shadow-gold/20 hover:scale-[1.02] transition-transform">
                この内容で送信する
              </button>
              <p className="text-[10px] text-center text-navy/40">
                ※送信後、24時間以内に担当者よりご連絡を差し上げます。
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-navy pt-24 pb-12 text-white/60">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-24">
          <div className="col-span-2">
            <div className="flex items-center gap-2 mb-8">
              <div className="w-8 h-8 gold-gradient rounded-sm flex items-center justify-center">
                <span className="text-white font-serif text-sm font-bold">匠</span>
              </div>
              <span className="text-2xl font-serif font-bold text-white tracking-wider">
                匠の彩
              </span>
            </div>
            <p className="max-w-md mb-8 leading-relaxed">
              私たちは、単に色を塗るだけでなく、お客様の大切な資産である「住まい」を守り、
              その価値を高めることを使命としています。一級塗装技能士の誇りにかけて、
              最高の一塗りをお約束します。
            </p>
            <div className="flex gap-4">
              <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-gold hover:border-gold transition-all cursor-pointer">
                <span className="text-xs font-bold">IG</span>
              </div>
              <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-gold hover:border-gold transition-all cursor-pointer">
                <span className="text-xs font-bold">FB</span>
              </div>
              <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-gold hover:border-gold transition-all cursor-pointer">
                <span className="text-xs font-bold">X</span>
              </div>
            </div>
          </div>
          <div>
            <h5 className="text-white font-bold mb-8 uppercase tracking-widest text-sm">Quick Links</h5>
            <ul className="space-y-4 text-sm">
              <li><a href="#" className="hover:text-gold transition-colors">施工事例</a></li>
              <li><a href="#" className="hover:text-gold transition-colors">私たちのこだわり</a></li>
              <li><a href="#" className="hover:text-gold transition-colors">料金プラン</a></li>
              <li><a href="#" className="hover:text-gold transition-colors">よくある質問</a></li>
              <li><a href="#" className="hover:text-gold transition-colors">ブログ</a></li>
            </ul>
          </div>
          <div>
            <h5 className="text-white font-bold mb-8 uppercase tracking-widest text-sm">Contact</h5>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-gold shrink-0" />
                <span>〒150-0000 東京都渋谷区神宮前X-X-X</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-gold shrink-0" />
                <span>0120-XXX-XXX</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-gold shrink-0" />
                <span>info@takumi-irodori.jp</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-white/5 pt-12 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-xs">© 2024 匠の彩 - Takumi no Irodori. All Rights Reserved.</p>
          <div className="flex gap-8 text-[10px] uppercase tracking-widest">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

// --- Main App ---

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <TrustBadges />
        <BeforeAfter />
        <Testimonials />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
}
