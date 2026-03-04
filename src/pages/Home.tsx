import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, MessageCircle, Award, ShieldCheck, PenTool, Star, Quote, CircleCheck, ArrowRight, Hammer } from 'lucide-react';
import Slider from '../components/Slider';

// ===== ページ内CTAバナー =====
const CTABanner = ({ href = '/contact', text = 'まず無料で診断してもらう →' }) => (
    <section className="py-16 bg-amber-500 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(white 2px, transparent 2px)', backgroundSize: '24px 24px' }} />
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
            <p className="text-slate-950 text-xl md:text-3xl font-serif font-bold mb-8">
                「まず話を聞くだけでも大丈夫です。」<br />
                <span className="text-base md:text-lg font-sans font-medium mt-2 block">見積もり・現地診断、完全無料。強引な営業は一切しません。</span>
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to={href} className="bg-slate-950 hover:bg-slate-800 text-white px-8 py-4 rounded-full text-base font-bold transition-all shadow-lg hover:-translate-y-1">
                    {text}
                </Link>
                <a href="https://line.me" className="bg-[#06C755] hover:bg-[#05b04a] text-white px-8 py-4 rounded-full text-base font-bold flex items-center justify-center gap-2 transition-all shadow-lg hover:-translate-y-1">
                    <MessageCircle className="w-5 h-5" />LINEで相談する
                </a>
            </div>
        </div>
    </section>
);

// ===== ページヘッダー =====
const PageHeader = ({ label, title, lead }: { label: string; title: string; lead?: string }) => (
    <section className="py-24 bg-slate-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'radial-gradient(rgb(251 191 36) 2px, transparent 2px)', backgroundSize: '30px 30px' }} />
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
            <span className="text-amber-400 font-bold tracking-[0.3em] text-xs uppercase block mb-4">{label}</span>
            <h1 className="text-3xl md:text-5xl font-serif font-bold text-white leading-snug mb-6">{title}</h1>
            {lead && <p className="text-slate-400 text-base md:text-lg leading-relaxed max-w-2xl mx-auto">{lead}</p>}
            <div className="w-16 h-1 bg-amber-500 mx-auto mt-8 rounded-full" />
        </div>
    </section>
);

// ===== ホームページ =====
export default function Home() {
    const reasons = [
        { icon: Award, title: '地域密着の安心感', desc: '〇〇市周辺エリアに特化。「スピード対応」と「きめ細かいアフターフォロー」が私たちの強みです。' },
        { icon: PenTool, title: '職人直営の適正価格', desc: '営業マンを挟まないから中間マージンなし。高品質な施工を適正な価格で直接お届けします。' },
        { icon: ShieldCheck, title: '有資格者による確かな技術', desc: '一級塗装技能士が在籍。手抜きなしの長持ちする施工をお約束します。' },
        { icon: MessageCircle, title: '強引な営業は一切なし', desc: 'お客様のペースを第一に。不要な工事の押し売りや、しつこい電話営業は一切いたしません。' },
    ];

    const reviews = [
        { name: 'T様（〇〇市在住）', tag: '外壁・屋根塗装', text: '最初は相見積もりをいくつか取ったのですが、説明が一番わかりやすく、近所での評判が良いと聞いて決めました。職人さんの挨拶も気持ちよく、仕事も丁寧で大満足です。' },
        { name: 'S様（〇〇市在住）', tag: 'エクステリア改修', text: '細かい要望にも嫌な顔ひとつせず対応してくださり感謝しています。仕上がりも想像以上で、毎日家に帰るのが楽しみになりました。次回も絶対にこちらにお願いします。' },
        { name: 'M様（〇〇市在住）', tag: '屋根修理', text: '他社で「全部やり直す必要がある」と高額な見積もりを出されて不安でした。こちらは「今は部分補修で十分です」と提案してくださり、本当に信頼できる会社だと感じました。' },
    ];

    return (
        <div>
            {/* ヒーロー */}
            <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img src="/images/hero-alt-1.jpg" alt="職人の施工風景" className="w-full h-full object-cover scale-105" />
                    <div className="absolute inset-0 bg-slate-950/65" />
                </div>
                <div className="relative z-10 max-w-7xl mx-auto px-6 w-full py-20">
                    <div className="max-w-3xl">
                        <span className="inline-flex items-center gap-2 px-4 py-2 bg-amber-500/90 text-slate-950 text-sm font-bold rounded-full mb-8">
                            地域密着・〇〇市周辺で選ばれ続けて〇〇年
                        </span>
                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif text-white font-bold leading-[1.15] mb-8 drop-shadow-xl">
                            この街で、いちばん<br />
                            <span className="text-amber-400">「ありがとう」と言われる</span><br />
                            工務店でいたい。
                        </h1>
                        <p className="text-lg md:text-xl text-slate-300 mb-10 max-w-2xl leading-relaxed">
                            外壁のひび割れ・色あせから水回りのリフォームまで。「嘘をつかない適正価格」と「職人直営の丁寧な仕事」で、顔の見える安心の施工をお届けします。
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 mb-12">
                            <Link to="/contact" className="bg-amber-500 hover:bg-amber-600 text-slate-950 px-8 py-4 rounded-full text-lg font-bold text-center transition-all shadow-xl hover:-translate-y-1">
                                まず無料でお見積り →
                            </Link>
                            <a href="tel:0120-XXX-XXX" className="bg-white/10 hover:bg-white/15 backdrop-blur-md border border-white/20 text-white px-8 py-4 rounded-full text-lg font-bold flex items-center justify-center gap-2 transition-all">
                                <Phone className="w-5 h-5" />0120-XXX-XXX
                            </a>
                        </div>
                        <div className="flex flex-wrap gap-3">
                            {['しつこい営業一切なし', '最短即日お伺い', '見積もり・診断 完全無料'].map((t, i) => (
                                <div key={i} className="flex items-center gap-2 bg-slate-900/60 backdrop-blur-sm px-4 py-2 rounded-full border border-white/10 text-sm text-white/90">
                                    <CircleCheck className="w-4 h-4 text-amber-400" />{t}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="absolute bottom-0 w-full h-24 bg-gradient-to-t from-slate-950 to-transparent z-10" />
            </section>

            {/* 信頼バッジ */}
            <section className="py-12 bg-slate-900 border-y border-white/5">
                <div className="max-w-5xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                    {[
                        { Icon: Award, title: '一級塗装技能士', sub: '国家資格保有者在籍' },
                        { Icon: ShieldCheck, title: '施工後15年保証', sub: '長期アフター対応' },
                        { Icon: Hammer, title: '自社完全施工', sub: '外注・下請けゼロ' },
                        { Icon: Star, title: 'Googleレビュー', sub: '★4.8（〇〇件）' },
                    ].map(({ Icon, title, sub }, i) => (
                        <div key={i} className="flex flex-col items-center gap-2">
                            <Icon className="w-10 h-10 text-amber-400 mb-1" />
                            <p className="text-white font-bold text-sm">{title}</p>
                            <p className="text-slate-500 text-xs">{sub}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* 選ばれる4つの理由 */}
            <section className="py-24 bg-slate-950">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <span className="text-amber-400 font-bold tracking-widest text-xs uppercase block mb-4">Reasons</span>
                        <h2 className="text-3xl md:text-4xl font-serif text-white font-bold">私たちが地元の皆様に<br />選ばれる4つの理由</h2>
                        <div className="w-16 h-1 bg-amber-500 mx-auto mt-6 rounded-full" />
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {reasons.map((r, i) => (
                            <div key={i} className="flex flex-col items-center text-center bg-slate-900 p-8 rounded-3xl border border-white/5 hover:border-amber-500/30 transition-all group">
                                <div className="w-18 h-18 w-16 h-16 rounded-full bg-amber-500/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                    <r.icon className="w-7 h-7 text-amber-400" />
                                </div>
                                <h3 className="text-lg font-bold text-white mb-3">{r.title}</h3>
                                <p className="text-slate-400 text-sm leading-relaxed">{r.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 施工事例ダイジェスト */}
            <section className="py-24 bg-slate-900">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-4 mb-14">
                        <div>
                            <span className="text-amber-400 font-bold tracking-widest text-xs uppercase block mb-4">Works</span>
                            <h2 className="text-3xl md:text-4xl font-serif text-white font-bold">施工事例（ビフォー・アフター）</h2>
                            <div className="w-16 h-1 bg-amber-500 mt-5 rounded-full" />
                        </div>
                        <Link to="/works" className="flex items-center gap-2 text-amber-400 font-bold hover:gap-3 transition-all text-sm">
                            すべての事例を見る <ArrowRight className="w-4 h-4" />
                        </Link>
                    </div>
                    {/* ダイジェストスライダー */}
                    <div className="max-w-4xl mx-auto">
                        <div className="mb-6 rounded-3xl overflow-hidden shadow-2xl border border-white/10">
                            <Slider before="/before-exterior.png" after="/after-exterior.png" beforeLabel="施工前" afterLabel="施工後" />
                        </div>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <div className="flex-1 p-5 bg-slate-900 rounded-2xl border border-white/5">
                                <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">📌 施工前のお悩み</p>
                                <p className="text-slate-200 text-sm leading-relaxed">全体的な色あせとひび割れ（クラック）が進行しており、一部からは雨漏りのリスクが高い状態でした。</p>
                            </div>
                            <div className="flex-1 p-5 bg-amber-500/10 rounded-2xl border border-amber-500/20">
                                <p className="text-xs font-bold text-amber-400 uppercase tracking-widest mb-2">✅ 解決のポイント</p>
                                <p className="text-slate-200 text-sm leading-relaxed">フッ素系塗料を使用した3度塗り施工で新築のような輝きに。防水性・断熱性も大幅にアップしました。</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <CTABanner />

            {/* お客様の声 */}
            <section className="py-24 bg-slate-900">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <span className="text-amber-400 font-bold tracking-widest text-xs uppercase block mb-4">Testimonials</span>
                        <h2 className="text-3xl md:text-4xl font-serif text-white font-bold">地元の皆様からのうれしいお声</h2>
                        <div className="w-16 h-1 bg-amber-500 mx-auto mt-6 rounded-full" />
                    </div>
                    <div className="grid md:grid-cols-3 gap-8">
                        {reviews.map((r, i) => (
                            <div key={i} className="bg-slate-950 rounded-3xl p-8 border border-white/5 hover:border-amber-500/20 transition-all relative group">
                                <Quote className="absolute top-6 right-6 w-10 h-10 text-white/5 group-hover:text-amber-400/10 transition-colors" />
                                <div className="flex gap-1 mb-5">
                                    {[...Array(5)].map((_, j) => <Star key={j} className="w-4 h-4 fill-amber-400 text-amber-400" />)}
                                </div>
                                <p className="text-slate-300 text-sm leading-relaxed mb-6">「{r.text}」</p>
                                <div className="border-t border-white/5 pt-5">
                                    <p className="font-bold text-white text-sm">{r.name}</p>
                                    <p className="text-amber-400 text-xs mt-1">{r.tag}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
