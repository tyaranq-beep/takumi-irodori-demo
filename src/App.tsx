import React, { useState, useEffect } from 'react';
import {
  Menu,
  X,
  Phone,
  Mail,
  MapPin,
  Send,
  Award,
  PenTool,
  ShieldCheck,
  MessageCircle,
  CircleCheck,
  Star,
  Quote
} from 'lucide-react';

// --- Constants ---
const HERO_IMAGE = "/images/before-renovation.png"; // Use local high-quality asset
const BEFORE_IMAGE = "/images/before-renovation.png";
const AFTER_IMAGE = "/images/after-renovation.png";

// --- Components ---

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'ホーム', href: '#' },
    { label: '事業内容', href: '#services' },
    { label: '施工事例・お客様の声', href: '#施工事例' },
    { label: '会社案内', href: '#about' },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 transition-all duration-300 bg-white/95 py-5 border-b border-earth-400/20 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <a className="flex flex-col group" href="#">
          <span className="text-xl md:text-2xl font-serif font-bold text-earth-900 tracking-wide group-hover:text-earth-600 transition-colors">匠の彩</span>
          <span className="text-[9px] md:text-xs font-sans font-medium text-earth-600 mt-0.5 leading-none">地域密着・住まいの塗り替え相談窓口</span>
        </a>

        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link, i) => (
            <a
              key={link.label}
              href={link.href}
              className={`text-sm font-medium transition-colors hover:text-earth-600 ${i === 0 ? 'text-earth-600 font-bold border-b-2 border-earth-600 pb-1' : 'text-earth-800'}`}
            >
              {link.label}
            </a>
          ))}
          <div className="flex items-center gap-4 ml-4">
            <div className="flex flex-col items-end">
              <span className="text-[10px] font-bold text-earth-600">お気軽にご相談ください</span>
              <a href="tel:0120-123-456" className="text-xl font-bold text-forest-700 flex items-center gap-1 hover:text-forest-500 transition-colors">
                <Phone className="w-5 h-5" />0120-123-456
              </a>
            </div>
            <a className="bg-earth-600 hover:bg-earth-800 text-white px-6 py-3 rounded-2xl text-sm font-bold shadow-md hover:shadow-lg transition-all" href="#contact">
              無料お見積り
            </a>
          </div>
        </div>

        <button className="lg:hidden text-earth-900 p-2" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
        </button>
      </div>

      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-earth-200 p-6 flex flex-col gap-4 shadow-xl">
          {navLinks.map((link) => (
            <a key={link.label} href={link.href} className="text-earth-800 font-bold py-2" onClick={() => setIsMobileMenuOpen(false)}>
              {link.label}
            </a>
          ))}
          <a className="bg-earth-600 text-white py-4 rounded-xl text-center font-bold mt-2" href="#contact" onClick={() => setIsMobileMenuOpen(false)}>
            無料お見積り
          </a>
        </div>
      )}
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center pt-20 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img alt="丁寧な施工風景" className="w-full h-full object-cover scale-105" src={HERO_IMAGE} />
        <div className="absolute inset-0 bg-earth-900/60 mix-blend-multiply"></div>
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full py-12">
        <div className="max-w-3xl">
          <div className="animate-in fade-in slide-in-from-bottom-5 duration-1000">
            <span className="inline-block px-4 py-2 bg-earth-600/90 text-white text-sm md:text-base font-bold rounded-full mb-6 backdrop-blur-sm border border-white/20">地域密着・横浜市周辺で選ばれ続けて15年</span>
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-serif text-white font-bold leading-tight mb-8 drop-shadow-lg">
              あなたの「住まい」を、<br />一番近くで守る<br /><span className="text-earth-400">横浜の工務店です。</span>
            </h1>
            <p className="text-lg md:text-xl text-earth-100/90 mb-10 max-w-2xl leading-relaxed font-medium">
              外壁塗装から小さな修理まで、どんな小さな悩みでもご相談ください。 「嘘をつかない適正価格」と「職人直営の丁寧な仕事」で、 顔の見える安心の施工をお届けします。
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <a className="bg-forest-600 hover:bg-forest-700 text-white px-8 py-4 rounded-full text-lg font-bold text-center transition-all shadow-lg hover:shadow-xl hover:-translate-y-1" href="#contact">まずは無料でお見積り</a>
              <a href="tel:0120-123-456" className="bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/30 text-white px-8 py-4 rounded-full text-lg font-bold flex items-center justify-center gap-2 transition-all">
                <Phone className="w-5 h-5" />0120-123-456 に電話する
              </a>
            </div>
            <div className="flex flex-wrap gap-4 text-sm md:text-base text-white/90 font-medium">
              {[
                "しつこい営業一切なし",
                "最短即日お伺い",
                "経験豊富な職人が直接対応"
              ].map((text, i) => (
                <div key={i} className="flex items-center gap-2 bg-earth-900/40 backdrop-blur-sm px-4 py-2 rounded-full border border-earth-100/10">
                  <CircleCheck className="w-4 h-4 text-earth-400" />
                  <span>{text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 w-full h-16 bg-gradient-to-t from-earth-100 to-transparent z-10"></div>
    </section>
  );
};

const Reasons = () => {
  const items = [
    {
      icon: Award,
      title: "地域密着の安心感",
      desc: "横浜市周辺エリアに特化しているからこその「スピード対応」と「きめ細かいアフターフォロー」が強みです。"
    },
    {
      icon: PenTool,
      title: "職人直営の適正価格",
      desc: "営業マンを挟まないから中間マージンなし。高品質な施工を「適正な価格」で直接お届けします。"
    },
    {
      icon: ShieldCheck,
      title: "有資格者による確かな技術",
      desc: "一級塗装技能士をはじめとする国家資格を持ったプロが、手抜きなしの長持ちする施工をお約束します。"
    },
    {
      icon: MessageCircle,
      title: "強引な営業はしません",
      desc: "お客様のペースを第一に考えます。不要な工事の押し売りや、しつこい電話営業は一切いたしません。"
    }
  ];

  return (
    <section className="py-20 bg-earth-100 relative z-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-earth-600 font-bold tracking-widest text-sm mb-2 block uppercase">Reasons to Choose Us</span>
          <h2 className="text-3xl md:text-4xl font-serif text-earth-900 font-bold">私たちが「地元の皆様」に選ばれる4つの理由</h2>
          <div className="w-20 h-1 bg-forest-500 mx-auto mt-6 rounded-full"></div>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {items.map((item, i) => (
            <div key={i} className="flex flex-col items-center text-center group bg-white p-8 rounded-3xl shadow-sm hover:shadow-md transition-all">
              <div className="w-20 h-20 rounded-full bg-earth-400/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <item.icon className="w-8 h-8 text-earth-600" />
              </div>
              <h3 className="text-xl font-bold text-earth-900 mb-4">{item.title}</h3>
              <p className="text-earth-800 leading-relaxed text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const ComparisonSlider = () => {
  const [sliderPos, setSliderPos] = useState(50);

  const handleMove = (e: React.MouseEvent | React.TouchEvent) => {
    const rect = (e.currentTarget as HTMLElement).getBoundingClientRect();
    const x = 'touches' in e ? e.touches[0].clientX : (e as React.MouseEvent).clientX;
    const position = ((x - rect.left) / rect.width) * 100;
    setSliderPos(Math.min(Math.max(position, 0), 100));
  };

  return (
    <section id="施工事例" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-earth-600 font-bold tracking-widest text-sm mb-2 block uppercase">Works</span>
          <h2 className="text-3xl md:text-4xl font-serif text-earth-900 font-bold">地域での施工事例（ビフォーアフター比較）</h2>
          <div className="w-20 h-1 bg-forest-500 mx-auto mt-6 rounded-full"></div>
          <p className="mt-6 text-earth-800 max-w-2xl mx-auto">スライダーを左右に動かして、施工前と施工後の変化をご確認いただけます。</p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div
            className="relative w-full aspect-video md:aspect-[16/9] overflow-hidden border-4 border-[#2C1E16] shadow-[12px_12px_0px_rgba(44,30,22,0.1)] cursor-col-resize select-none touch-pan-y"
            onMouseMove={handleMove}
            onTouchMove={handleMove}
          >
            <img alt="施工後の様子" className="absolute inset-0 w-full h-full object-cover pointer-events-none" src={AFTER_IMAGE} />
            <div className="absolute top-4 right-4 bg-[#2C1E16] text-white px-3 py-1 text-sm font-bold z-10 shadow-md">施工後</div>

            <div
              className="absolute inset-0 h-full w-full pointer-events-none"
              style={{ clipPath: `inset(0 ${100 - sliderPos}% 0 0)` }}
            >
              <img alt="施工前の様子" className="absolute inset-0 w-full h-full object-cover pointer-events-none" src={BEFORE_IMAGE} />
              <div className="absolute top-4 left-4 bg-[#B87333] text-white px-3 py-1 text-sm font-bold z-10 shadow-md">施工前</div>
            </div>

            <div className="absolute top-0 bottom-0 w-1 bg-white shadow-[0_0_10px_rgba(0,0,0,0.5)] z-20" style={{ left: `${sliderPos}%` }}>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-white border-4 border-[#2C1E16] rounded-full flex items-center justify-center shadow-xl">
                <div className="flex gap-1">
                  <div className="w-1 h-5 bg-[#2C1E16] rounded-full"></div>
                  <div className="w-1 h-5 bg-[#2C1E16] rounded-full"></div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 grid md:grid-cols-2 gap-6">
            <div className="p-6 bg-earth-100/50 rounded-2xl border border-earth-200">
              <span className="text-xs font-bold text-earth-600 mb-1 block uppercase">Before</span>
              <p className="text-earth-900 font-bold">全体的な色褪せと、クラック（ひび割れ）が目立つ状態</p>
            </div>
            <div className="p-6 bg-forest-50/50 rounded-2xl border border-forest-100">
              <span className="text-xs font-bold text-forest-600 mb-1 block uppercase">After</span>
              <p className="text-forest-700 font-bold">新築時のような輝きを取り戻し、防水性も大幅にアップ</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Testimonials = () => {
  const reviews = [
    {
      name: "T様 (横浜市在住)",
      tag: "外壁・屋根塗装",
      text: "最初は相見積もりをいくつか取ったのですが、匠の彩さんの説明が一番わかりやすく、何より「近所での評判が良い」と知人に聞いて決めました。職人さんの挨拶も気持ちよく、仕事も丁寧で大満足です。"
    },
    {
      name: "S様 (横浜市在住)",
      tag: "エクステリア改修",
      text: "細かい要望にも嫌な顔ひとつせず対応してくださり感謝しています。仕上がりも想像以上で、毎日家に帰るのが楽しみになりました。次回のリフォームも絶対にこちらにお願いしようと家族で話しています。"
    },
    {
      name: "M様 (横浜市在住)",
      tag: "屋根修理",
      text: "他社で「全部やり直す必要がある」と高額な見積もりを出されて不安になっていた所を相談しました。こちらの伊藤社長は「今は部分補修で十分です」と提案してくださり、本当に信頼できる会社だと感じました。"
    }
  ];

  return (
    <section id="お客様の声" className="py-24 bg-earth-900 text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(rgb(245, 239, 235) 2px, transparent 2px)', backgroundSize: '30px 30px' }}></div>
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <span className="text-earth-400 font-bold tracking-widest text-sm mb-2 block uppercase">Testimonials</span>
          <h2 className="text-3xl md:text-4xl font-serif text-white font-bold">地元の皆様からのうれしいお声</h2>
          <div className="w-20 h-1 bg-earth-400 mx-auto mt-6 rounded-full"></div>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((r, i) => (
            <div key={i} className="bg-white/5 backdrop-blur-md rounded-3xl p-8 border border-white/10 relative group hover:bg-white/10 transition-colors">
              <Quote className="absolute top-6 right-6 w-12 h-12 text-earth-100/10 group-hover:text-earth-400/20 transition-colors" />
              <div className="flex gap-1 justify-center mb-6">
                {[...Array(5)].map((_, j) => <Star key={j} className="w-5 h-5 fill-earth-400 text-earth-400" />)}
              </div>
              <p className="text-earth-100 leading-loose mb-8 font-medium">"{r.text}"</p>
              <div className="border-t border-earth-100/10 pt-6 text-center">
                <p className="font-bold text-white tracking-widest">{r.name}</p>
                <p className="text-sm text-earth-400 mt-1">{r.tag}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-earth-600 font-bold tracking-widest text-sm mb-2 block uppercase">Contact</span>
          <h2 className="text-3xl md:text-4xl font-serif text-earth-900 font-bold">無料お見積り・ご相談</h2>
          <div className="w-20 h-1 bg-forest-500 mx-auto mt-6 rounded-full"></div>
          <p className="mt-6 text-earth-800 max-w-2xl mx-auto leading-relaxed">
            強引な営業は一切いたしません。<br />
            「まずは費用感だけ知りたい」「他社との相見積もりをしたい」という方も大歓迎です。
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12 items-start max-w-5xl mx-auto">
          <div className="lg:col-span-2 space-y-8">
            <div className="bg-earth-100 p-8 rounded-3xl">
              <div className="w-12 h-12 bg-earth-600 rounded-full flex items-center justify-center mb-6">
                <Phone className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-earth-900 mb-2">お電話でのご相談</h3>
              <p className="text-earth-600 font-bold text-3xl mb-2">0120-123-456</p>
              <p className="text-sm text-earth-800">
                営業時間：8:00〜19:00<br />
                定休日：日曜日（※事前予約で対応可）
              </p>
            </div>

            <div className="bg-white p-8 rounded-3xl border border-earth-200 shadow-sm">
              <div className="w-12 h-12 bg-forest-600 rounded-full flex items-center justify-center mb-6">
                <MapPin className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-earth-900 mb-2">対応エリア</h3>
              <p className="text-sm text-earth-800 leading-relaxed font-medium">
                横浜市全域、川崎市、鎌倉市<br />
                <span className="text-earth-600 block mt-2">※地域密着のため、片道1時間圏内を基本としておりますが、近接エリアの方もお気軽にご相談ください。</span>
              </p>
            </div>
          </div>

          <div className="lg:col-span-3 bg-white p-8 md:p-12 rounded-3xl border border-earth-400/20 shadow-xl">
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-bold text-earth-900 mb-2">お名前 <span className="text-red-500">*</span></label>
                <input required className="w-full px-4 py-3 rounded-xl bg-earth-100/50 border border-earth-400/30 focus:outline-none focus:ring-2 focus:ring-earth-600 transition-all font-medium" placeholder="例：山田 太郎" type="text" />
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-earth-900 mb-2">電話番号 <span className="text-red-500">*</span></label>
                  <input required className="w-full px-4 py-3 rounded-xl bg-earth-100/50 border border-earth-400/30 focus:outline-none focus:ring-2 focus:ring-earth-600 transition-all font-medium" placeholder="例：090-1234-5678" type="tel" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-earth-900 mb-2">メールアドレス</label>
                  <input className="w-full px-4 py-3 rounded-xl bg-earth-100/50 border border-earth-400/30 focus:outline-none focus:ring-2 focus:ring-earth-600 transition-all font-medium" placeholder="例：info@example.com" type="email" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-bold text-earth-900 mb-2">ご相談内容 <span className="text-red-500">*</span></label>
                <textarea required rows={5} className="w-full px-4 py-3 rounded-xl bg-earth-100/50 border border-earth-400/30 focus:outline-none focus:ring-2 focus:ring-earth-600 transition-all font-medium resize-none" placeholder="「外壁のひび割れが気になる」「屋根の点検をお願いしたい」「見積もりが欲しい」など、どんなことでもお気軽にご記入ください。"></textarea>
              </div>
              <button type="submit" className="w-full bg-forest-600 hover:bg-forest-700 text-white font-bold py-4 rounded-xl flex items-center justify-center gap-2 transition-all shadow-md mt-4">
                <Send className="w-5 h-5" />この内容で送信する
              </button>
              <p className="text-xs text-center text-earth-600 mt-4">ご入力いただいた個人情報は、お問い合わせの対応にのみ使用いたします。</p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer id="about" className="bg-earth-900 text-earth-100 pt-20 pb-24 lg:pb-12 border-t-4 border-earth-600">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-serif font-bold text-white mb-6 uppercase tracking-widest">匠の彩</h3>
            <p className="text-earth-100/80 leading-relaxed mb-8 max-w-sm">地域密着で15年の実績。外壁塗装、屋根工事、水回りリフォームなど、住まいのお困りごとは何でもご相談ください。親切丁寧な職人が対応いたします。</p>
            <div className="space-y-4">
              <div className="flex items-start gap-4 text-earth-100/90">
                <MapPin className="w-5 h-5 text-earth-400 shrink-0 mt-1" />
                <p>〒220-0012<br />神奈川県横浜市西区みなとみらい1-1-1</p>
              </div>
              <div className="flex items-center gap-4 text-earth-100/90">
                <Phone className="w-5 h-5 text-earth-400 shrink-0" />
                <p>0120-123-456 <span className="text-sm text-earth-100/60 ml-2">(8:00〜19:00 日曜定休)</span></p>
              </div>
              <div className="flex items-center gap-4 text-earth-100/90">
                <Mail className="w-5 h-5 text-earth-400 shrink-0" />
                <p>contact@takumi-irodori.com</p>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-bold text-white mb-6 border-b border-earth-600/50 pb-2 inline-block">メニュー</h3>
            <ul className="space-y-4">
              <li><a className="hover:text-earth-400 transition-colors" href="#">ホーム</a></li>
              <li><a className="hover:text-earth-400 transition-colors" href="#services">事業内容・強み</a></li>
              <li><a className="hover:text-earth-400 transition-colors" href="#施工事例">施工事例・お客様の声</a></li>
              <li><a className="hover:text-earth-400 transition-colors" href="#about">会社案内・アクセス</a></li>
              <li><a className="hover:text-earth-400 transition-colors" href="#contact">お問い合わせ・無料お見積り</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold text-white mb-6 border-b border-earth-600/50 pb-2 inline-block">対応エリア</h3>
            <p className="text-earth-100/80 leading-relaxed text-sm">横浜市全域、川崎市、鎌倉市<br /><span className="text-earth-400 mt-2 block">※近接エリアの方もお気軽にご相談ください。喜んでお伺いします！</span></p>
          </div>
        </div>
        <div className="pt-8 border-t border-earth-100/10 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-earth-100/50">
          <p>© 2026 匠の彩 All Rights Reserved.</p>
          <div className="flex gap-6">
            <a className="hover:text-earth-100 transition-colors" href="#">プライバシーポリシー</a>
            <a className="hover:text-earth-100 transition-colors" href="#">サイトマップ</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

const MobileStickyCTA = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 lg:hidden flex bg-white border-t border-earth-400/20 shadow-[0_-4px_20px_rgba(44,30,22,0.05)] pb-safe">
      <a href="tel:0120-123-456" className="flex-1 flex flex-col items-center justify-center py-3 border-r border-earth-400/20 active:bg-earth-100 transition-colors">
        <Phone className="w-5 h-5 text-forest-700 mb-1" />
        <span className="text-[10px] font-bold text-forest-700">お電話</span>
      </a>
      <a href="#" className="flex-1 flex flex-col items-center justify-center py-3 border-r border-earth-400/20 active:bg-[#06C755]/10 transition-colors">
        <MessageCircle className="w-5 h-5 text-[#06C755] mb-1" />
        <span className="text-[10px] font-bold text-[#06C755]">LINE相談</span>
      </a>
      <a className="flex-1 flex flex-col items-center justify-center py-3 bg-earth-600 active:bg-earth-800 transition-colors" href="#contact">
        <Mail className="w-5 h-5 text-white mb-1" />
        <span className="text-[10px] font-bold text-white">WEB見積り</span>
      </a>
    </div>
  );
};

const CTASection = () => {
  return (
    <section className="py-20 bg-earth-100 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="bg-[#06C755] rounded-[2rem] p-8 md:p-14 text-center text-white shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -mr-20 -mt-20"></div>
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-black/10 rounded-full blur-2xl -ml-10 -mb-10"></div>

          <div className="relative z-10 flex flex-col items-center">
            <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mb-8 shadow-inner">
              <MessageCircle className="w-10 h-10 text-[#06C755]" />
            </div>
            <h2 className="text-2xl md:text-4xl font-bold mb-6">しつこい営業なし。「ちょっと聞きたい」大歓迎です</h2>
            <p className="text-lg md:text-xl text-white/90 mb-10 max-w-2xl font-medium">
              「外壁のひび割れ、これって直した方がいい？」「見積もりだけもらって検討したい」など、写真でのカンタン見積りにも対応しています。
            </p>
            <a href="#" className="inline-flex items-center gap-3 bg-white text-[#06C755] hover:bg-earth-100 px-10 py-5 rounded-full text-xl font-bold transition-all shadow-lg hover:shadow-xl hover:-translate-y-1">
              <MessageCircle className="w-6 h-6" />
              LINEで無料相談する
            </a>
            <p className="mt-6 text-sm text-white/80 font-medium">※24時間受付中 / 最短5分でお返事します</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default function App() {
  return (
    <div className="min-h-screen bg-earth-100 text-earth-900 font-sans selection:bg-earth-200">
      <Navbar />
      <main className="pt-24 pb-20 lg:pb-0">
        <Hero />
        <Reasons />
        <CTASection />
        <ComparisonSlider />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      <MobileStickyCTA />
    </div>
  );
}
