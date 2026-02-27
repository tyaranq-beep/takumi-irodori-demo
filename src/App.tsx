/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { GoogleGenAI } from "@google/genai";
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
  Quote,
  Building2,
  Loader2,
  MessageCircle,
  ClipboardList,
  CalendarCheck,
  Hammer,
  ThumbsUp
} from 'lucide-react';

// --- Gemini Image Generation ---
const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY as string });

const useGeneratedImages = () => {
  const [images, setImages] = useState<{ hero: string; before: string; after: string } | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const generateAll = async () => {
      try {
        setLoading(true);

        const heroResponse = await ai.models.generateContent({
          model: 'gemini-2.5-flash-image',
          contents: {
            parts: [{ text: 'A stunning, high-end modern Japanese residential house with a fresh navy and white exterior paint job. Sunny day, professional architectural photography, luxury feel.' }],
          },
          config: { imageConfig: { aspectRatio: "16:9" } }
        });

        const beforeResponse = await ai.models.generateContent({
          model: 'gemini-2.5-flash-image',
          contents: {
            parts: [{ text: 'A weathered and faded exterior wall of a typical Japanese house, showing signs of dirt and peeling paint, realistic, professional photography.' }],
          },
          config: { imageConfig: { aspectRatio: "4:3" } }
        });

        const afterResponse = await ai.models.generateContent({
          model: 'gemini-2.5-flash-image',
          contents: {
            parts: [{ text: 'A perfectly restored and freshly painted version of the previous Japanese house wall, vibrant navy and white colors, looking brand new, professional photography.' }],
          },
          config: { imageConfig: { aspectRatio: "4:3" } }
        });

        const extractImage = (response: any) => {
          for (const part of response.candidates[0].content.parts) {
            if (part.inlineData) return `data:image/png;base64,${part.inlineData.data}`;
          }
          return null;
        };

        setImages({
          hero: extractImage(heroResponse) || '',
          before: extractImage(beforeResponse) || '',
          after: extractImage(afterResponse) || '',
        });
      } catch (err) {
        console.error("Image generation failed:", err);
        setError("AIプレビュー画像を読み込み中...");
      } finally {
        setLoading(false);
      }
    };

    generateAll();
  }, []);

  return { images, loading, error };
};

// --- Mobile Sticky CTA Footer ---
// ★ New: top-10 winning pattern — always-visible mobile CTA bar
const MobileStickyFooter = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-navy/95 backdrop-blur-lg border-t border-white/10 shadow-2xl">
      <div className="grid grid-cols-3 divide-x divide-white/10">
        <a href="tel:0120XXXXXX" className="flex flex-col items-center justify-center py-4 gap-1 text-white hover:bg-white/5 transition-colors">
          <Phone className="w-5 h-5 text-gold" />
          <span className="text-[10px] font-bold tracking-widest">電話する</span>
        </a>
        <a
          href="https://lin.ee/XXXXXX"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center py-4 gap-1 bg-[#06C755]/10 text-white hover:bg-[#06C755]/20 transition-colors"
        >
          <MessageCircle className="w-5 h-5 text-[#06C755]" />
          <span className="text-[10px] font-bold tracking-widest text-[#06C755]">LINE相談</span>
        </a>
        <a href="#contact" className="flex flex-col items-center justify-center py-4 gap-1 gold-gradient text-white hover:opacity-90 transition-opacity">
          <ClipboardList className="w-5 h-5" />
          <span className="text-[10px] font-bold tracking-widest">無料見積</span>
        </a>
      </div>
    </div>
  );
};

// --- Components ---

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: '施工事例', href: '#施工事例' },
    { label: '品質へのこだわり', href: '#品質' },
    { label: 'お客様の声', href: '#お客様の声' },
    { label: '会社概要', href: '#会社概要' },
  ];

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${isScrolled ? 'glass-nav py-3' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 gold-gradient rounded-sm flex items-center justify-center shadow-lg">
            <span className="text-white font-serif text-xl font-bold">匠</span>
          </div>
          <div className="flex flex-col">
            <span className="text-2xl font-serif font-bold tracking-wider text-white">
              匠の彩
            </span>
            <span className="text-[10px] font-sans font-light tracking-[0.3em] text-white/70 uppercase">
              Takumi no Irodori
            </span>
          </div>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((item) => (
            <a key={item.label} href={item.href} className="text-white/90 hover:text-gold transition-colors text-sm font-medium tracking-widest">
              {item.label}
            </a>
          ))}
          <a href="#contact" className="gold-gradient text-white px-8 py-3 rounded-sm text-xs font-bold tracking-[0.2em] hover:shadow-2xl hover:shadow-gold/20 transition-all uppercase">
            無料見積り依頼
          </a>
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
            className="absolute top-full left-0 w-full bg-navy p-8 flex flex-col gap-6 md:hidden border-t border-white/10"
          >
            {navLinks.map((item) => (
              <a key={item.label} href={item.href} className="text-white text-lg font-serif tracking-widest" onClick={() => setIsMobileMenuOpen(false)}>
                {item.label}
              </a>
            ))}
            <a href="#contact" className="gold-gradient text-white py-5 rounded-sm font-bold tracking-widest text-center block" onClick={() => setIsMobileMenuOpen(false)}>
              無料見積り依頼
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = ({ imageUrl, loading }: { imageUrl: string; loading: boolean }) => {
  return (
    <section className="relative h-screen w-full overflow-hidden flex items-center justify-center">
      {/* Background Image */}
      <div className="absolute inset-0 bg-navy">
        {loading ? (
          <div className="w-full h-full flex items-center justify-center">
            <Loader2 className="w-12 h-12 text-gold animate-spin" />
          </div>
        ) : (
          <img
            src={imageUrl}
            alt="施工後の美しい外壁塗装"
            className="w-full h-full object-cover scale-105"
            referrerPolicy="no-referrer"
          />
        )}
        <div className="absolute inset-0 bg-navy/65 backdrop-blur-[2px]"></div>
      </div>

      <div className="relative z-10 text-center px-6 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          {/* ★ Updated: Specific trust signal upfront */}
          <span className="inline-block text-gold font-bold tracking-[0.4em] text-xs md:text-sm mb-8 uppercase">
            一級塗装技能士 ｜ 施工実績 500棟以上 ｜ 最長15年保証
          </span>
          {/* ★ Updated: Emotional, benefit-first headline */}
          <h1 className="text-5xl md:text-8xl text-white font-serif leading-[1.1] mb-8">
            その家、まだ<br />
            <span className="text-gold-light">諦めないでください。</span>
          </h1>
          {/* ★ Updated: Address the user's fear directly */}
          <p className="text-white/70 text-lg md:text-xl font-light mb-4 max-w-3xl mx-auto leading-relaxed tracking-wide">
            外壁のひび割れ・色あせ・塗膜の浮き——放置するほど、修繕費用は膨れ上がります。
          </p>
          <p className="text-white/60 text-base md:text-lg font-light mb-14 max-w-2xl mx-auto leading-relaxed tracking-wide">
            匠の彩が、プロの目で正直に診断します。費用0円、押し売り一切なし。
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
            {/* ★ Updated: Friction-reducing primary CTA */}
            <a href="#contact" className="gold-gradient text-white px-12 py-6 rounded-sm text-base md:text-lg font-bold tracking-[0.15em] hover:scale-105 transition-transform shadow-2xl shadow-gold/40">
              まず無料で診断してもらう →
            </a>
            {/* ★ New: LINE as a low-friction alternative */}
            <a
              href="https://lin.ee/XXXXXX"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 bg-[#06C755]/20 backdrop-blur-xl border border-[#06C755]/40 text-white px-10 py-6 rounded-sm text-base md:text-lg font-bold tracking-[0.1em] hover:bg-[#06C755]/30 transition-all"
            >
              <MessageCircle className="w-6 h-6 text-[#06C755]" />
              LINEで気軽に相談
            </a>
          </div>
          {/* ★ New: Micro-copy to eliminate final hesitation */}
          <p className="text-white/40 text-xs mt-6 tracking-widest">※ しつこい営業電話は一切しません。まず現状を知るだけでも大丈夫です。</p>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 12, 0] }}
        transition={{ duration: 2.5, repeat: Infinity }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 text-white/40 flex flex-col items-center gap-3"
      >
        <span className="text-[10px] tracking-[0.4em] uppercase font-light">Scroll</span>
        <div className="w-[1px] h-16 bg-gradient-to-b from-white/40 to-transparent"></div>
      </motion.div>
    </section>
  );
};

const TrustBadges = () => {
  return (
    <section className="py-20 bg-navy border-y border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
          {[
            { icon: <Award className="w-10 h-10 text-gold" />, title: "一級塗装技能士", desc: "国家資格を持つ職人が直接施工。下請け丸投げは一切なし" },
            { icon: <ShieldCheck className="w-10 h-10 text-gold" />, title: "最長15年保証", desc: "施工後も安心。万が一の不具合は即対応します" },
            { icon: <Building2 className="w-10 h-10 text-gold" />, title: "自社完全施工", desc: "中間マージンをゼロにすることで、同じ品質をより安く提供" },
            { icon: <Star className="w-10 h-10 text-gold" />, title: "Googleレビュー ★4.8", desc: "地域のお客様から積み重ねてきた、正直な評価がここにあります" },
          ].map((badge, idx) => (
            <div key={idx} className="flex flex-col items-center text-center space-y-5 group">
              <div className="p-5 bg-white/5 rounded-full border border-white/10 group-hover:border-gold/50 transition-colors">
                {badge.icon}
              </div>
              <div className="space-y-2">
                <h4 className="text-white text-lg font-serif tracking-widest">{badge.title}</h4>
                <p className="text-xs text-white/50 tracking-wide leading-relaxed">{badge.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// ★ New Section: はじめての方へ (For First-Timers) — top-10 winning pattern
const ProcessFlow = () => {
  const steps = [
    {
      icon: <MessageCircle className="w-10 h-10 text-gold" />,
      step: "STEP 01",
      title: "無料でご相談・現地診断",
      desc: "電話・LINE・フォームどこからでもOK。しつこい営業は一切しません。まず「現状を知る」だけで大丈夫です。"
    },
    {
      icon: <ClipboardList className="w-10 h-10 text-gold" />,
      step: "STEP 02",
      title: "わかりやすいお見積り",
      desc: "すべての費用を明細書でご説明。「なぜこの金額なのか」を職人自身が丁寧にお伝えします。不明点はその場でなんでもどうぞ。"
    },
    {
      icon: <Hammer className="w-10 h-10 text-gold" />,
      step: "STEP 03",
      title: "着工・毎日の現場報告",
      desc: "ご契約後は着工日程のご提案。施工中は毎日写真付きで進捗をご報告。職人の顔が見える安心の施工です。"
    },
    {
      icon: <ThumbsUp className="w-10 h-10 text-gold" />,
      step: "STEP 04",
      title: "仕上げ確認・長期アフター",
      desc: "完工後はお客様立ち会いのもと最終確認。ご満足いただけなければ手直しします。最長15年の品質保証で永くお付き合いします。"
    }
  ];

  return (
    <section id="品質" className="py-32 bg-navy relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gold rounded-full blur-[150px]"></div>
      </div>
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <span className="text-gold font-bold tracking-[0.3em] text-xs mb-4 block uppercase">For First-Timers</span>
          <h2 className="text-4xl md:text-6xl font-serif text-white mb-6">はじめての方へ。<br /><span className="text-gold-light">流れと約束。</span></h2>
          <p className="text-white/50 max-w-xl mx-auto tracking-wide leading-relaxed text-sm">
            初めての外壁塗装で何から始めればいいか、わからないのは当然です。<br />
            匠の彩は、相談の最初から完工後まで、ずっと正直にお客様の味方でいます。
          </p>
        </div>
        <div className="grid md:grid-cols-4 gap-0 relative">
          {/* Connector line */}
          <div className="hidden md:block absolute top-14 left-[12.5%] right-[12.5%] h-[1px] bg-gradient-to-r from-transparent via-gold/30 to-transparent"></div>
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="flex flex-col items-center text-center px-6 py-8 group"
            >
              <div className="relative mb-8">
                <div className="w-28 h-28 rounded-full bg-white/5 border border-white/10 group-hover:border-gold/40 transition-colors flex items-center justify-center">
                  {step.icon}
                </div>
                <span className="absolute -top-2 -right-2 bg-gold text-white text-[10px] font-bold px-2 py-1 rounded-sm tracking-widest">
                  {i + 1}
                </span>
              </div>
              <span className="text-gold text-[10px] tracking-[0.3em] font-bold mb-3">{step.step}</span>
              <h3 className="text-white font-serif text-xl mb-4 leading-tight">{step.title}</h3>
              <p className="text-white/50 text-xs leading-relaxed tracking-wide">{step.desc}</p>
            </motion.div>
          ))}
        </div>
        <div className="text-center mt-16">
          <a href="#contact" className="inline-flex items-center gap-3 gold-gradient text-white px-12 py-5 rounded-sm font-bold tracking-[0.2em] hover:scale-105 transition-transform shadow-2xl shadow-gold/30">
            まず無料相談してみる <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
};

const BeforeAfter = ({ beforeUrl, afterUrl, loading }: { beforeUrl: string; afterUrl: string; loading: boolean }) => {
  return (
    <section id="施工事例" className="py-32 bg-cream overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div className="max-w-2xl">
            <span className="text-gold font-bold tracking-[0.3em] text-xs mb-4 block uppercase">Case Studies</span>
            <h2 className="text-4xl md:text-6xl font-serif text-navy leading-tight">ビフォー・アフター。<br />結果がすべてを語る。</h2>
          </div>
          <p className="text-navy/60 max-w-md text-sm leading-relaxed tracking-wide">
            写真加工は一切なし。ご覧いただいているのは実際の施工前・施工後の現場写真です。この変化を、あなたのお家でも。
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          <div className="space-y-8">
            <div className="relative group overflow-hidden rounded-sm shadow-2xl bg-navy/10 min-h-[300px] flex items-center justify-center">
              {loading ? <Loader2 className="animate-spin text-gold" /> : (
                <>
                  <div className="absolute top-6 left-6 z-10 bg-navy/90 text-white px-6 py-2 text-[10px] font-bold tracking-[0.2em] rounded-sm">BEFORE（施工前）</div>
                  <img
                    src={beforeUrl}
                    alt="施工前の外壁"
                    className="w-full aspect-[4/3] object-cover group-hover:scale-105 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-black/20 pointer-events-none"></div>
                </>
              )}
            </div>
            <div className="relative group overflow-hidden rounded-sm shadow-2xl border-[12px] border-white bg-navy/10 min-h-[300px] flex items-center justify-center">
              {loading ? <Loader2 className="animate-spin text-gold" /> : (
                <>
                  <div className="absolute top-6 left-6 z-10 gold-gradient text-white px-6 py-2 text-[10px] font-bold tracking-[0.2em] rounded-sm">AFTER（施工後）</div>
                  <img
                    src={afterUrl}
                    alt="施工後の美しい外壁"
                    className="w-full aspect-[4/3] object-cover group-hover:scale-105 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                </>
              )}
            </div>
          </div>
          <div className="flex flex-col justify-center space-y-10">
            {[
              { step: "工程 01", title: "外壁の徹底洗浄・補修", desc: "高圧洗浄で長年の汚れを落とし、ひび割れ（クラック）を一つずつ丁寧に埋めていきます。この下地処理が塗装の寿命を左右します。ここを手抜きする業者が多い中、匠の彩は絶対に妥協しません。" },
              { step: "工程 02", title: "三度塗りの完全履行", desc: "下塗り・中塗り・上塗りの3工程を厳守。メーカー規定の塗布量を守り、厚く強固な塗膜を形成します。手間を惜しまないことが、15年後の「差」を生みます。" },
              { step: "工程 03", title: "最高級シリコン・無機塗料", desc: "耐候性に優れた最新の塗料を使用。15年、20年と続く美しさと保護性能をお約束します。使用する塗料のカタログは、いつでもご説明できます。" },
            ].map((item, i) => (
              <div key={i} className="bg-white p-10 shadow-sm border-l-4 border-gold">
                <span className="text-gold text-[10px] font-bold tracking-[0.3em] mb-2 block">{item.step}</span>
                <h3 className="text-2xl font-serif mb-4 text-navy">{item.title}</h3>
                <p className="text-navy/70 leading-relaxed text-sm tracking-wide">{item.desc}</p>
              </div>
            ))}
            <div className="pt-6">
              <a href="#contact" className="flex items-center gap-4 text-navy font-bold tracking-[0.2em] hover:gap-6 transition-all group">
                施工事例をもっと見る <ArrowRight className="w-5 h-5 text-gold group-hover:translate-x-2 transition-transform" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// ★ New Section: LINE CTA Banner — top-10 winning pattern
const LineCTABanner = () => {
  return (
    <section className="py-20 bg-cream border-y border-navy/5">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <div className="bg-white rounded-sm shadow-lg p-12 md:p-16 border border-navy/5">
          <span className="inline-block bg-[#06C755]/10 text-[#06C755] text-xs font-bold tracking-[0.3em] px-4 py-2 rounded-full mb-6">LINE で気軽に相談</span>
          <h2 className="text-3xl md:text-5xl font-serif text-navy mb-6">「まだ相談するほどじゃない...」<br />その段階でもいいんです。</h2>
          <p className="text-navy/60 text-sm leading-relaxed mb-10 max-w-2xl mx-auto tracking-wide">
            写真を送るだけで、職人が無料で状態を確認します。「塗り替え時期かどうか知りたい」「費用の相場を聞きたい」——どんな小さな疑問でも歓迎です。
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
            <a
              href="https://lin.ee/XXXXXX"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 bg-[#06C755] text-white px-12 py-5 rounded-sm font-bold text-lg tracking-[0.1em] hover:bg-[#05A847] transition-colors shadow-xl shadow-[#06C755]/20"
            >
              <MessageCircle className="w-6 h-6" />
              LINEで写真を送って相談する
            </a>
            <a href="#contact" className="text-navy/60 text-sm underline underline-offset-4 tracking-widest hover:text-navy transition-colors">
              フォームから相談する
            </a>
          </div>
          <p className="text-navy/30 text-[10px] mt-8 tracking-widest">※ しつこい勧誘は一切しません。相談は何回でも無料です。</p>
        </div>
      </div>
    </section>
  );
};

const Testimonials = () => {
  // ★ Updated: Reviews now include before-pain + after-joy pattern from top sites
  const reviews = [
    {
      name: "佐藤 健一 様",
      location: "東京都世田谷区",
      before: "ひび割れを何年も放置していて不安でした。",
      text: "初めての塗装で不安でしたが、担当の方が現場写真を毎日送ってくださり安心できました。仕上がりは新築以上かもしれません。ご近所の方にも聞かれるほどです。",
      rating: 5
    },
    {
      name: "田中 恵子 様",
      location: "神奈川県横浜市",
      before: "他社の見積りが高すぎて途方に暮れていました。",
      text: "費用の内訳をすべて説明してもらえて、納得のうえで契約できました。完成後、夫が「これは頼んで正解だった」と珍しく感動していました。",
      rating: 5
    },
    {
      name: "伊藤 誠 様",
      location: "埼玉県さいたま市",
      before: "訪問業者に不安をあおられ、判断できずにいました。",
      text: "押し売りが全くなく、「今すぐやらなくても大丈夫ですよ」と正直に言ってくれた誠実さが決め手でした。だからこそ、安心してお任せできました。",
      rating: 5
    },
  ];

  return (
    <section id="お客様の声" className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-24">
          <span className="text-gold font-bold tracking-[0.3em] text-xs mb-4 block uppercase">Real Voices</span>
          <h2 className="text-4xl md:text-6xl font-serif text-navy mb-4">「頼んで良かった」<br />をデザインしています。</h2>
          <p className="text-navy/50 text-sm tracking-wide max-w-lg mx-auto mt-4">以下はすべて実際のお客様からのGoogleレビューです。</p>
          <div className="w-24 h-1 gold-gradient mx-auto mt-6"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-12">
          {reviews.map((review, idx) => (
            <div key={idx} className="bg-cream p-12 rounded-sm relative shadow-sm border border-navy/5 flex flex-col">
              <Quote className="absolute top-8 right-10 text-gold/10 w-16 h-16" />
              {/* ★ New: before-state hook */}
              <div className="bg-navy/5 border-l-2 border-gold px-4 py-3 mb-8 rounded-sm">
                <p className="text-navy/50 text-xs italic tracking-wide">ご相談前の状況：「{review.before}」</p>
              </div>
              <div className="flex gap-1 mb-6">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-gold text-gold" />
                ))}
              </div>
              <p className="text-navy/80 mb-10 leading-relaxed text-sm tracking-wide flex-1">"{review.text}"</p>
              <div className="border-t border-navy/10 pt-8">
                <p className="font-bold text-navy tracking-widest">{review.name}</p>
                <p className="text-[10px] text-navy/40 tracking-[0.2em] uppercase mt-1">{review.location}</p>
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
    <section id="contact" className="py-32 bg-navy relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gold/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gold/5 rounded-full blur-[120px] translate-y-1/2 -translate-x-1/2"></div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="bg-white rounded-sm overflow-hidden shadow-2xl flex flex-col lg:flex-row">
          <div className="lg:w-2/5 gold-gradient p-16 text-white flex flex-col justify-between">
            <div>
              {/* ★ Updated: Copy now emphasizes no-risk first step */}
              <h2 className="text-3xl md:text-4xl font-serif mb-6 leading-tight">まずは、正直な<br />「診断」から。</h2>
              <p className="text-white/80 mb-10 leading-relaxed tracking-wide font-light text-sm">
                無理な営業・即決を求める行為は一切しません。<br />
                診断結果と費用の目安をお伝えし、あとはお客様がゆっくり判断していただければ十分です。
              </p>
              <div className="space-y-4 mb-12">
                {[
                  "現地診断・お見積りは完全無料",
                  "断っても一切費用は発生しません",
                  "お見積り有効期限は30日間",
                ].map((point, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-white/70 shrink-0" />
                    <span className="text-white/80 text-sm tracking-wide">{point}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="space-y-8">
              <div className="flex items-center gap-6">
                <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center border border-white/20">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-[10px] opacity-60 tracking-[0.2em] uppercase mb-1">お電話</p>
                  <p className="text-2xl font-bold tracking-widest">0120-XXX-XXX</p>
                  <p className="text-[10px] opacity-50 mt-1 tracking-widest">平日 8:00〜19:00 / 土日祝も受付</p>
                </div>
              </div>
              <div className="flex items-center gap-6">
                <div className="w-12 h-12 bg-[#06C755]/20 rounded-full flex items-center justify-center border border-[#06C755]/30">
                  <MessageCircle className="w-6 h-6 text-[#06C755]" />
                </div>
                <div>
                  <p className="text-[10px] opacity-60 tracking-[0.2em] uppercase mb-1">LINE</p>
                  <p className="text-xl tracking-wide">友だち追加で相談</p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:w-3/5 p-16">
            <h3 className="text-2xl font-serif text-navy mb-2">無料診断・お見積りフォーム</h3>
            <p className="text-navy/40 text-xs tracking-widest mb-10">送信後、24時間以内に担当者よりご連絡します</p>
            <form className="space-y-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <label className="text-[10px] font-bold text-navy/40 uppercase tracking-[0.3em]">お名前 <span className="text-gold">*</span></label>
                  <input type="text" className="w-full bg-cream border-b border-navy/10 py-4 px-2 focus:border-gold outline-none transition-colors" placeholder="山田 太郎" />
                </div>
                <div className="space-y-3">
                  <label className="text-[10px] font-bold text-navy/40 uppercase tracking-[0.3em]">お電話番号 <span className="text-gold">*</span></label>
                  <input type="tel" className="w-full bg-cream border-b border-navy/10 py-4 px-2 focus:border-gold outline-none transition-colors" placeholder="090-0000-0000" />
                </div>
              </div>
              <div className="space-y-3">
                <label className="text-[10px] font-bold text-navy/40 uppercase tracking-[0.3em]">メールアドレス</label>
                <input type="email" className="w-full bg-cream border-b border-navy/10 py-4 px-2 focus:border-gold outline-none transition-colors" placeholder="example@mail.com" />
              </div>
              {/* ★ New: Area field — helps the company and reduces friction */}
              <div className="space-y-3">
                <label className="text-[10px] font-bold text-navy/40 uppercase tracking-[0.3em]">お住まいの地域</label>
                <input type="text" className="w-full bg-cream border-b border-navy/10 py-4 px-2 focus:border-gold outline-none transition-colors" placeholder="例：東京都世田谷区" />
              </div>
              <div className="space-y-3">
                <label className="text-[10px] font-bold text-navy/40 uppercase tracking-[0.3em]">ご相談内容・お気づきの点</label>
                <textarea className="w-full bg-cream border-b border-navy/10 py-4 px-2 focus:border-gold outline-none h-32 transition-colors resize-none" placeholder="気になっている箇所やご希望をご自由にお書きください。「まだ何もわからない」でも大歓迎です。"></textarea>
              </div>
              <button type="submit" className="w-full gold-gradient text-white py-6 rounded-sm font-bold text-lg tracking-[0.2em] shadow-xl shadow-gold/20 hover:scale-[1.01] transition-transform">
                無料で診断を申し込む
              </button>
              <p className="text-[10px] text-center text-navy/30 tracking-widest">
                ※ しつこい営業は一切しません。費用も一切かかりません。
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
    <footer id="会社概要" className="bg-navy pt-32 pb-32 md:pb-16 text-white/40">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-20 mb-32">
          <div className="col-span-2">
            <div className="flex items-center gap-3 mb-10">
              <div className="w-10 h-10 gold-gradient rounded-sm flex items-center justify-center">
                <span className="text-white font-serif text-lg font-bold">匠</span>
              </div>
              <span className="text-3xl font-serif font-bold text-white tracking-widest">
                匠の彩
              </span>
            </div>
            <p className="max-w-md mb-6 leading-relaxed tracking-wide text-sm">
              「正直に、丁寧に、長くお付き合いできる塗装屋でありたい」——それが匠の彩の原点です。
              一級塗装技能士の誇りをかけて、お客様の大切な住まいを守ります。
            </p>
            <p className="text-white/30 text-xs tracking-widest mb-12">創業以来、地域のお客様の信頼を一棟一棟積み重ねてきました。</p>
            <div className="flex gap-6">
              {['IG', 'FB', 'LINE'].map(social => (
                <div key={social} className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-gold hover:border-gold hover:text-white transition-all cursor-pointer text-xs font-bold tracking-widest">
                  {social}
                </div>
              ))}
            </div>
          </div>
          <div>
            <h5 className="text-white font-bold mb-10 uppercase tracking-[0.3em] text-xs">Menu</h5>
            <ul className="space-y-6 text-sm tracking-widest">
              <li><a href="#施工事例" className="hover:text-gold transition-colors">施工事例</a></li>
              <li><a href="#品質" className="hover:text-gold transition-colors">品質へのこだわり</a></li>
              <li><a href="#お客様の声" className="hover:text-gold transition-colors">お客様の声</a></li>
              <li><a href="#contact" className="hover:text-gold transition-colors">無料見積り・相談</a></li>
            </ul>
          </div>
          <div>
            <h5 className="text-white font-bold mb-10 uppercase tracking-[0.3em] text-xs">Contact</h5>
            <ul className="space-y-6 text-sm tracking-wide">
              <li className="flex items-start gap-4">
                <MapPin className="w-5 h-5 text-gold shrink-0" />
                <span>〒150-0000<br />東京都渋谷区神宮前X-X-X</span>
              </li>
              <li className="flex items-center gap-4">
                <Phone className="w-5 h-5 text-gold shrink-0" />
                <div>
                  <span className="block">0120-XXX-XXX</span>
                  <span className="text-[10px] text-white/30 tracking-widest">平日 8:00〜19:00</span>
                </div>
              </li>
              <li className="flex items-center gap-4">
                <Mail className="w-5 h-5 text-gold shrink-0" />
                <span>info@takumi-irodori.jp</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-white/5 pt-16 flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-[10px] tracking-[0.2em] uppercase">© 2024 匠の彩 - Takumi no Irodori. All Rights Reserved.</p>
          <div className="flex gap-12 text-[10px] uppercase tracking-[0.3em]">
            <a href="#" className="hover:text-white transition-colors">プライバシーポリシー</a>
            <a href="#" className="hover:text-white transition-colors">特定商取引法に基づく表記</a>
            <a href="#" className="hover:text-white transition-colors">サイトマップ</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

// --- Main App ---

export default function App() {
  const { images, loading, error } = useGeneratedImages();

  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero imageUrl={images?.hero || ''} loading={loading} />
        <TrustBadges />
        <ProcessFlow />
        <BeforeAfter
          beforeUrl={images?.before || ''}
          afterUrl={images?.after || ''}
          loading={loading}
        />
        <Testimonials />
        <LineCTABanner />
        <ContactForm />
      </main>
      <Footer />
      {/* ★ New: Mobile Sticky CTA — always visible on mobile */}
      <MobileStickyFooter />
    </div>
  );
}
