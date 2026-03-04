import React, { useState } from 'react';
import { Phone, MessagesSquare, Send, MapPin, Clock, MessageCircle } from 'lucide-react';

export default function Contact() {
    const [sent, setSent] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setSent(true);
    };

    const faqs = [
        { q: '見積もりだけでも大丈夫ですか？', a: 'はい、断っていただいても一切問題ありません。お気軽にご相談ください。' },
        { q: '現地診断に費用はかかりますか？', a: '完全無料です。お伺いしての診断・見積もりはすべて無料でご提供しています。' },
        { q: '対応エリアはどこですか？', a: '〇〇市・〇〇市・〇〇町とその周辺です。隣接エリアの方もまずはご相談ください。' },
        { q: '写真だけで概算はわかりますか？', a: 'はい、LINE相談であれば写真を送っていただくだけでおおよその費用感をお伝えできます。' },
    ];

    return (
        <div>
            {/* ページヘッダー */}
            <section className="py-24 bg-slate-900 relative overflow-hidden">
                <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'radial-gradient(rgb(251 191 36) 2px, transparent 2px)', backgroundSize: '30px 30px' }} />
                <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
                    <span className="text-amber-400 font-bold tracking-[0.3em] text-xs uppercase block mb-4">Contact</span>
                    <h1 className="text-3xl md:text-5xl font-serif font-bold text-white leading-snug mb-6">
                        まず、話を聞くだけでも<br />大丈夫です。
                    </h1>
                    <p className="text-slate-400 text-base md:text-lg leading-relaxed max-w-xl mx-auto">
                        職人への直通連絡です。営業マンはいません。<br />
                        見積りは完全無料、現地診断も無料です。<br />
                        断っていただいても構いません。
                    </p>
                    <div className="w-16 h-1 bg-amber-500 mx-auto mt-8 rounded-full" />
                </div>
            </section>

            {/* 3つのコンタクト手段 */}
            <section className="py-16 bg-slate-950">
                <div className="max-w-5xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* 電話 */}
                    <a href="tel:0120-XXX-XXX" className="flex flex-col items-center text-center p-8 bg-slate-900 rounded-3xl border border-white/5 hover:border-amber-500/30 transition-all group">
                        <div className="w-14 h-14 rounded-full bg-amber-500/10 flex items-center justify-center mb-5 group-hover:bg-amber-500/20 transition-colors">
                            <Phone className="w-6 h-6 text-amber-400" />
                        </div>
                        <p className="text-white font-bold text-lg mb-1">お電話</p>
                        <p className="text-amber-400 font-bold text-2xl mb-3">0120-XXX-XXX</p>
                        <p className="text-slate-500 text-xs flex items-center gap-1"><Clock className="w-3 h-3" />8:00〜19:00（土日・祝も対応）</p>
                    </a>

                    {/* LINE */}
                    <a href="https://line.me" className="flex flex-col items-center text-center p-8 bg-slate-900 rounded-3xl border border-[#06C755]/20 hover:border-[#06C755]/50 transition-all group relative overflow-hidden">
                        <div className="absolute top-3 right-3 bg-[#06C755] text-white text-[10px] font-bold px-2 py-0.5 rounded-full">おすすめ</div>
                        <div className="w-14 h-14 rounded-full bg-[#06C755]/10 flex items-center justify-center mb-5 group-hover:bg-[#06C755]/20 transition-colors">
                            <MessageCircle className="w-6 h-6 text-[#06C755]" />
                        </div>
                        <p className="text-white font-bold text-lg mb-1">LINE相談</p>
                        <p className="text-[#06C755] font-bold text-sm mb-3">写真を送るだけでOK</p>
                        <p className="text-slate-500 text-xs">24時間受付中・最短5分でお返事</p>
                    </a>

                    {/* Webフォーム */}
                    <div className="flex flex-col items-center text-center p-8 bg-slate-900 rounded-3xl border border-white/5 hover:border-amber-500/30 transition-all group">
                        <div className="w-14 h-14 rounded-full bg-amber-500/10 flex items-center justify-center mb-5 group-hover:bg-amber-500/20 transition-colors">
                            <MessagesSquare className="w-6 h-6 text-amber-400" />
                        </div>
                        <p className="text-white font-bold text-lg mb-1">Webフォーム</p>
                        <p className="text-slate-400 text-sm mb-3">24時間受付・1〜2営業日以内にご連絡</p>
                        <p className="text-slate-500 text-xs">↓ 下記フォームよりお問い合わせください</p>
                    </div>
                </div>
            </section>

            {/* お問い合わせフォーム */}
            <section className="py-16 bg-slate-900">
                <div className="max-w-3xl mx-auto px-6">
                    <h2 className="text-2xl font-serif font-bold text-white text-center mb-10">お問い合わせフォーム</h2>

                    {sent ? (
                        <div className="text-center py-20 bg-slate-950 rounded-3xl border border-amber-500/20">
                            <div className="text-5xl mb-4">✅</div>
                            <p className="text-white text-xl font-bold mb-2">送信完了しました！</p>
                            <p className="text-slate-400 text-sm">1〜2営業日以内にご連絡いたします。<br />LINEをご利用の方はより早くご対応できます。</p>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit} className="bg-slate-950 p-8 md:p-12 rounded-3xl border border-white/10 space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-bold text-slate-200 mb-2">お名前 <span className="text-red-400">*</span></label>
                                    <input required type="text" placeholder="例：田中 花子" className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-white/10 focus:outline-none focus:ring-2 focus:ring-amber-500 text-white text-sm transition-all" />
                                </div>
                                <div>
                                    <label className="block text-sm font-bold text-slate-200 mb-2">電話番号 <span className="text-red-400">*</span></label>
                                    <input required type="tel" placeholder="例：090-1234-5678" className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-white/10 focus:outline-none focus:ring-2 focus:ring-amber-500 text-white text-sm transition-all" />
                                </div>
                            </div>
                            <div>
                                <label className="block text-sm font-bold text-slate-200 mb-2">メールアドレス</label>
                                <input type="email" placeholder="例：hanako@example.com" className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-white/10 focus:outline-none focus:ring-2 focus:ring-amber-500 text-white text-sm transition-all" />
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-bold text-slate-200 mb-2">築年数・建物の種別</label>
                                    <select className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-white/10 focus:outline-none focus:ring-2 focus:ring-amber-500 text-slate-300 text-sm">
                                        <option value="">選択してください</option>
                                        <option>一戸建て（築10年未満）</option>
                                        <option>一戸建て（築10〜20年）</option>
                                        <option>一戸建て（築20〜30年）</option>
                                        <option>一戸建て（築30年以上）</option>
                                        <option>マンション・アパート</option>
                                        <option>店舗・事務所</option>
                                    </select>
                                </div>
                                <div>
                                    <label className="block text-sm font-bold text-slate-200 mb-2">希望の連絡方法</label>
                                    <select className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-white/10 focus:outline-none focus:ring-2 focus:ring-amber-500 text-slate-300 text-sm">
                                        <option>電話</option>
                                        <option>LINE</option>
                                        <option>メール</option>
                                    </select>
                                </div>
                            </div>
                            <div>
                                <label className="block text-sm font-bold text-slate-200 mb-2">ご相談内容 <span className="text-red-400">*</span></label>
                                <textarea required rows={5} placeholder="「外壁のひび割れが気になる」「水回りをリフォームしたい」など、どんなことでもお気軽にご記入ください。" className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-white/10 focus:outline-none focus:ring-2 focus:ring-amber-500 text-white text-sm resize-none transition-all" />
                            </div>
                            <button type="submit" className="w-full bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold py-4 rounded-xl flex items-center justify-center gap-2 transition-all shadow-md">
                                <Send className="w-5 h-5" />この内容で送信する
                            </button>
                            <p className="text-xs text-center text-slate-600">ご入力いただいた個人情報は、お問い合わせの対応にのみ使用いたします。</p>
                        </form>
                    )}
                </div>
            </section>

            {/* よくある質問 */}
            <section className="py-16 bg-slate-950">
                <div className="max-w-3xl mx-auto px-6">
                    <h2 className="text-2xl font-serif font-bold text-white text-center mb-10">よくある質問</h2>
                    <div className="space-y-4">
                        {faqs.map((faq, i) => (
                            <div key={i} className="p-6 bg-slate-900 rounded-2xl border border-white/5">
                                <p className="text-white font-bold mb-2 flex items-start gap-2">
                                    <span className="text-amber-400 font-serif">Q.</span>{faq.q}
                                </p>
                                <p className="text-slate-400 text-sm leading-relaxed pl-6">
                                    <span className="text-amber-400 font-bold">A. </span>{faq.a}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
