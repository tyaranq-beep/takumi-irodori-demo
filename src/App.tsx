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
  Loader2
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
        
        // 1. Generate Hero Image
        const heroResponse = await ai.models.generateContent({
          model: 'gemini-2.5-flash-image',
          contents: {
            parts: [{ text: 'A stunning, high-end modern Japanese residential house with a fresh navy and white exterior paint job. Sunny day, professional architectural photography, luxury feel.' }],
          },
          config: { imageConfig: { aspectRatio: "16:9" } }
        });

        // 2. Generate "Before" Image
        const beforeResponse = await ai.models.generateContent({
          model: 'gemini-2.5-flash-image',
          contents: {
            parts: [{ text: 'A weathered and faded exterior wall of a typical Japanese house, showing signs of dirt and peeling paint, realistic, professional photography.' }],
          },
          config: { imageConfig: { aspectRatio: "4:3" } }
        });

        // 3. Generate "After" Image (Ideally we'd use the before as reference, but for simplicity and reliability in this turn, we'll generate a matching "perfect" version)
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
        setError("画像の生成に失敗しました。再読み込みをお試しください。");
      } finally {
        setLoading(false);
      }
    };

    generateAll();
  }, []);

  return { images, loading, error };
};

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
          {['施工事例', '品質へのこだわり', 'お客様の声', '会社概要'].map((item) => (
            <a key={item} href={`#${item}`} className="text-white/90 hover:text-gold transition-colors text-sm font-medium tracking-widest">
              {item}
            </a>
          ))}
          <button className="gold-gradient text-white px-8 py-3 rounded-sm text-xs font-bold tracking-[0.2em] hover:shadow-2xl hover:shadow-gold/20 transition-all uppercase">
            無料見積り依頼
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
            className="absolute top-full left-0 w-full bg-navy p-8 flex flex-col gap-6 md:hidden border-t border-white/10"
          >
            {['施工事例', '品質へのこだわり', 'お客様の声', '会社概要'].map((item) => (
              <a key={item} href="#" className="text-white text-lg font-serif tracking-widest" onClick={() => setIsMobileMenuOpen(false)}>
                {item}
              </a>
            ))}
            <button className="gold-gradient text-white py-5 rounded-sm font-bold tracking-widest">
              無料見積り依頼
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = ({ imageUrl, loading }: { imageUrl: string; loading: boolean }) => {
  return (
    <section className="relative h-screen w-full overflow-hidden flex items-center justify-center">
      {/* Background Image - Generated by Gemini */}
      <div className="absolute inset-0 bg-navy">
        {loading ? (
          <div className="w-full h-full flex items-center justify-center">
            <Loader2 className="w-12 h-12 text-gold animate-spin" />
          </div>
        ) : (
          <img 
            src={imageUrl} 
            alt="Beautifully Painted House Exterior" 
            className="w-full h-full object-cover scale-105"
            referrerPolicy="no-referrer"
          />
        )}
        <div className="absolute inset-0 bg-navy/60 backdrop-blur-[2px]"></div>
      </div>

      <div className="relative z-10 text-center px-6 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <span className="inline-block text-gold font-bold tracking-[0.5em] text-xs md:text-sm mb-8 uppercase">
            Masterpiece of Exterior Painting
          </span>
          <h1 className="text-5xl md:text-8xl text-white font-serif leading-[1.1] mb-10">
            外壁塗装を、<br />
            <span className="text-gold-light">住まいの芸術</span>へ。
          </h1>
          <p className="text-white/70 text-lg md:text-2xl font-light mb-14 max-w-3xl mx-auto leading-relaxed tracking-wide">
            一級塗装技能士が、一軒一軒に魂を込めて。<br className="hidden md:block" />
            最高級の塗料と熟練の技で、新築以上の輝きを永遠に刻みます。
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <button className="gold-gradient text-white px-12 py-6 rounded-sm text-lg font-bold tracking-[0.2em] hover:scale-105 transition-transform shadow-2xl shadow-gold/40">
              30秒で完了！無料見積り
            </button>
            <button className="bg-white/5 backdrop-blur-xl border border-white/20 text-white px-12 py-6 rounded-sm text-lg font-bold tracking-[0.2em] hover:bg-white/10 transition-all">
              塗装実績を詳しく見る
            </button>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        animate={{ y: [0, 12, 0] }}
        transition={{ duration: 2.5, repeat: Infinity }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 text-white/40 flex flex-col items-center gap-3"
      >
        <span className="text-[10px] tracking-[0.4em] uppercase font-light">Discover</span>
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
            { icon: <Award className="w-10 h-10 text-gold" />, title: "一級塗装技能士", desc: "国家資格保持者による直接施工" },
            { icon: <ShieldCheck className="w-10 h-10 text-gold" />, title: "最長15年保証", desc: "業界トップクラスの長期保証制度" },
            { icon: <Building2 className="w-10 h-10 text-gold" />, title: "自社完全施工", desc: "中間マージンを排除した適正価格" },
            { icon: <Star className="w-10 h-10 text-gold" />, title: "顧客満足度 98%", desc: "地域に根ざした信頼と実績" },
          ].map((badge, idx) => (
            <div key={idx} className="flex flex-col items-center text-center space-y-5 group">
              <div className="p-5 bg-white/5 rounded-full border border-white/10 group-hover:border-gold/50 transition-colors">
                {badge.icon}
              </div>
              <div className="space-y-2">
                <h4 className="text-white text-lg font-serif tracking-widest">{badge.title}</h4>
                <p className="text-[10px] text-white/40 tracking-[0.2em] uppercase">{badge.desc}</p>
              </div>
            </div>
          ))}
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
            <h2 className="text-4xl md:text-6xl font-serif text-navy leading-tight">劇的な変化、<br />揺るぎない品質。</h2>
          </div>
          <p className="text-navy/60 max-w-md text-sm leading-relaxed tracking-wide">
            私たちは単に色を塗るだけではありません。建物の寿命を延ばし、美観を極限まで高めるための「再生」を行います。
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          <div className="space-y-8">
            <div className="relative group overflow-hidden rounded-sm shadow-2xl bg-navy/10 min-h-[300px] flex items-center justify-center">
              {loading ? <Loader2 className="animate-spin text-gold" /> : (
                <>
                  <div className="absolute top-6 left-6 z-10 bg-navy/90 text-white px-6 py-2 text-[10px] font-bold tracking-[0.2em] rounded-sm">BEFORE (施工前)</div>
                  <img 
                    src={beforeUrl} 
                    alt="Before painting - Weathered Exterior" 
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
                  <div className="absolute top-6 left-6 z-10 gold-gradient text-white px-6 py-2 text-[10px] font-bold tracking-[0.2em] rounded-sm">AFTER (施工後)</div>
                  <img 
                    src={afterUrl} 
                    alt="After painting - Beautifully Restored" 
                    className="w-full aspect-[4/3] object-cover group-hover:scale-105 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                </>
              )}
            </div>
          </div>
          <div className="flex flex-col justify-center space-y-10">
            {[
              { title: "外壁の徹底洗浄・補修", desc: "高圧洗浄で長年の汚れを落とし、ひび割れ（クラック）を一つずつ丁寧に埋めていきます。この下地処理が塗装の寿命を左右します。" },
              { title: "三度塗りの完全履行", desc: "下塗り・中塗り・上塗りの3工程を厳守。メーカー規定の塗布量を守り、厚く強固な塗膜を形成して家を守ります。" },
              { title: "最高級シリコン・無機塗料", desc: "耐候性に優れた最新の塗料を使用。15年、20年と続く美しさと保護性能をお約束します。" },
            ].map((item, i) => (
              <div key={i} className="bg-white p-10 shadow-sm border-l-4 border-gold">
                <h3 className="text-2xl font-serif mb-4 text-navy">{item.title}</h3>
                <p className="text-navy/70 leading-relaxed text-sm tracking-wide">{item.desc}</p>
              </div>
            ))}
            <div className="pt-6">
              <button className="flex items-center gap-4 text-navy font-bold tracking-[0.2em] hover:gap-6 transition-all group">
                すべての外壁塗装事例を見る <ArrowRight className="w-5 h-5 text-gold group-hover:translate-x-2 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Testimonials = () => {
  const reviews = [
    { name: "佐藤 健一 様", location: "東京都世田谷区", text: "築20年の我が家が見違えるようになりました。職人さんの礼儀正しさと、細部まで妥協しない姿勢に感動しました。匠の彩さんにお願いして本当に良かったです。", rating: 5 },
    { name: "田中 恵子 様", location: "神奈川県横浜市", text: "色選びのシミュレーションから親身に相談に乗っていただきました。仕上がりは想像以上で、近所の方からも『素敵ね』と声をかけられます。10年後のメンテナンスもお願いします。", rating: 5 },
    { name: "伊藤 誠 様", location: "埼玉県さいたま市", text: "他社と比較して、説明の具体性と誠実さが決め手でした。工事中の報告も毎日写真付きで届き、安心してお任せできました。一級技能士の技術は本物です。", rating: 5 },
  ];

  return (
    <section id="お客様の声" className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-24">
          <span className="text-gold font-bold tracking-[0.3em] text-xs mb-4 block uppercase">Testimonials</span>
          <h2 className="text-4xl md:text-6xl font-serif text-navy mb-6">お客様からの信頼の証</h2>
          <div className="w-24 h-1 gold-gradient mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-12">
          {reviews.map((review, idx) => (
            <div key={idx} className="bg-cream p-12 rounded-sm relative shadow-sm border border-navy/5">
              <Quote className="absolute top-8 right-10 text-gold/10 w-16 h-16" />
              <div className="flex gap-1 mb-8">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-gold text-gold" />
                ))}
              </div>
              <p className="text-navy/80 mb-10 leading-relaxed italic text-sm tracking-wide">"{review.text}"</p>
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
        <div className="bg-white rounded-sm overflow-hidden shadow-2xl flex flex-col lg:row-reverse lg:flex-row">
          <div className="lg:w-2/5 gold-gradient p-16 text-white flex flex-col justify-between">
            <div>
              <h2 className="text-4xl font-serif mb-8 leading-tight">至高の住まいへの、<br />第一歩。</h2>
              <p className="text-white/80 mb-16 leading-relaxed tracking-wide font-light">
                外壁の診断からお見積りまで、すべて無料で承ります。<br />
                私たちは、お客様の理想を形にするパートナーです。
              </p>
            </div>
            <div className="space-y-10">
              <div className="flex items-center gap-6">
                <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center border border-white/20">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-[10px] opacity-60 tracking-[0.2em] uppercase mb-1">Direct Call</p>
                  <p className="text-2xl font-bold tracking-widest">0120-XXX-XXX</p>
                </div>
              </div>
              <div className="flex items-center gap-6">
                <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center border border-white/20">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-[10px] opacity-60 tracking-[0.2em] uppercase mb-1">Email Support</p>
                  <p className="text-xl tracking-wide">info@takumi-irodori.jp</p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:w-3/5 p-16">
            <form className="space-y-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <label className="text-[10px] font-bold text-navy/40 uppercase tracking-[0.3em]">お名前</label>
                  <input type="text" className="w-full bg-cream border-b border-navy/10 py-4 px-2 focus:border-gold outline-none transition-colors" placeholder="山田 太郎" />
                </div>
                <div className="space-y-3">
                  <label className="text-[10px] font-bold text-navy/40 uppercase tracking-[0.3em]">お電話番号</label>
                  <input type="tel" className="w-full bg-cream border-b border-navy/10 py-4 px-2 focus:border-gold outline-none transition-colors" placeholder="090-0000-0000" />
                </div>
              </div>
              <div className="space-y-3">
                <label className="text-[10px] font-bold text-navy/40 uppercase tracking-[0.3em]">メールアドレス</label>
                <input type="email" className="w-full bg-cream border-b border-navy/10 py-4 px-2 focus:border-gold outline-none transition-colors" placeholder="example@mail.com" />
              </div>
              <div className="space-y-3">
                <label className="text-[10px] font-bold text-navy/40 uppercase tracking-[0.3em]">ご相談内容</label>
                <textarea className="w-full bg-cream border-b border-navy/10 py-4 px-2 focus:border-gold outline-none h-32 transition-colors resize-none" placeholder="外壁の劣化状況や、ご希望の施工時期などをご記入ください。"></textarea>
              </div>
              <button className="w-full gold-gradient text-white py-6 rounded-sm font-bold text-lg tracking-[0.3em] shadow-xl shadow-gold/20 hover:scale-[1.01] transition-transform uppercase">
                無料見積りを申し込む
              </button>
              <p className="text-[10px] text-center text-navy/30 tracking-widest">
                ※送信後、24時間以内に専門スタッフよりご連絡を差し上げます。
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
    <footer className="bg-navy pt-32 pb-16 text-white/40">
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
            <p className="max-w-md mb-12 leading-relaxed tracking-wide text-sm">
              私たちは、単に色を塗るだけでなく、お客様の大切な資産である「住まい」を守り、
              その価値を永続させることを使命としています。一級塗装技能士の誇りにかけて、
              最高の一塗りをお約束します。
            </p>
            <div className="flex gap-6">
              {['IG', 'FB', 'X'].map(social => (
                <div key={social} className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-gold hover:border-gold hover:text-white transition-all cursor-pointer text-xs font-bold tracking-widest">
                  {social}
                </div>
              ))}
            </div>
          </div>
          <div>
            <h5 className="text-white font-bold mb-10 uppercase tracking-[0.3em] text-xs">Navigation</h5>
            <ul className="space-y-6 text-sm tracking-widest">
              <li><a href="#" className="hover:text-gold transition-colors">施工事例</a></li>
              <li><a href="#" className="hover:text-gold transition-colors">品質へのこだわり</a></li>
              <li><a href="#" className="hover:text-gold transition-colors">料金体系</a></li>
              <li><a href="#" className="hover:text-gold transition-colors">よくある質問</a></li>
              <li><a href="#" className="hover:text-gold transition-colors">ブログ</a></li>
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
                <span>0120-XXX-XXX</span>
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
  const { images, loading, error } = useGeneratedImages();

  return (
    <div className="min-h-screen">
      <Navbar />
      {error && (
        <div className="fixed top-20 left-1/2 -translate-x-1/2 z-[60] bg-red-500 text-white px-6 py-2 rounded-full shadow-xl text-sm font-bold">
          {error}
        </div>
      )}
      <main>
        <Hero imageUrl={images?.hero || ''} loading={loading} />
        <TrustBadges />
        <BeforeAfter 
          beforeUrl={images?.before || ''} 
          afterUrl={images?.after || ''} 
          loading={loading} 
        />
        <Testimonials />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
}
