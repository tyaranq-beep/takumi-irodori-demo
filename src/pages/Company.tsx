import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, MessageCircle } from 'lucide-react';

const staff = [
    { name: '田中 匠', role: '代表・一級塗装技能士', msg: '「正直な診断が最大の強みです」', emoji: '👨‍🔧' },
    { name: '佐藤 健二', role: '現場監督・左官職人', msg: '「仕上がりに絶対妥協しません」', emoji: '👷' },
    { name: '山田 美咲', role: '設計担当・インテリアコーディネーター', msg: '「ご家族の暮らしをイメージして提案します」', emoji: '🎨' },
];

const companyInfo = [
    ['会社名', '株式会社 匠の彩'],
    ['代表取締役', '田中 匠'],
    ['設立', '2005年（創業1980年）'],
    ['所在地', '〒000-0000 〇〇県〇〇市〇〇町1-2-3'],
    ['電話番号', '0120-XXX-XXX'],
    ['メール', 'info@takumi-irodori.jp'],
    ['営業時間', '8:00〜19:00（土日・祝日対応可）'],
    ['定休日', '日曜日（事前予約で対応可）'],
    ['施工エリア', '〇〇市・〇〇市・〇〇町とその周辺'],
    ['主な事業', '外壁塗装 / 屋根工事 / 水回りリフォーム / 内装リノベーション'],
    ['資格', '一級塗装技能士・一級外壁仕上げ施工技能士 他'],
];

export default function Company() {
    return (
        <div>
            {/* ページヘッダー */}
            <section className="py-24 bg-slate-900 relative overflow-hidden">
                <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'radial-gradient(rgb(251 191 36) 2px, transparent 2px)', backgroundSize: '30px 30px' }} />
                <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
                    <span className="text-amber-400 font-bold tracking-[0.3em] text-xs uppercase block mb-4">About Us</span>
                    <h1 className="text-3xl md:text-5xl font-serif font-bold text-white leading-snug mb-6">
                        地元で、家族と暮らし続けてきた職人が、<br />あなたの家を直します。
                    </h1>
                    <p className="text-slate-400 text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
                        私たちは〇〇市で創業して〇〇年。これまで〇〇件以上のご家族と歩んできました。<br />
                        お客様が満足するまで正直に向き合うこと——それだけを守り続けています。
                    </p>
                    <div className="w-16 h-1 bg-amber-500 mx-auto mt-8 rounded-full" />
                </div>
            </section>

            {/* 代表あいさつ */}
            <section className="py-20 bg-slate-950">
                <div className="max-w-4xl mx-auto px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-start">
                        <div className="flex flex-col items-center gap-4">
                            <div className="w-36 h-36 rounded-full bg-slate-800 border-4 border-amber-500/40 flex items-center justify-center text-7xl shadow-xl">👨‍🔧</div>
                            <div className="text-center">
                                <p className="text-white font-bold text-lg">田中 匠</p>
                                <p className="text-amber-400 text-sm">代表取締役 / 一級塗装技能士</p>
                            </div>
                        </div>
                        <div className="lg:col-span-2">
                            <span className="text-amber-400 font-bold tracking-widest text-xs uppercase block mb-4">Message</span>
                            <h2 className="text-2xl md:text-3xl font-serif text-white font-bold mb-6">代表あいさつ</h2>
                            <div className="space-y-4 text-slate-300 leading-relaxed">
                                <p>私が職人の道に入ったのは、父の家が雨漏りで少しずつ傷んでいくのを幼い頃から見ていたからです。「なぜ誰も助けてあげないのだろう」と思いながら育ちました。</p>
                                <p>工務店を開いて〇〇年。最初からずっと変わらない約束があります。「お客様に嘘をつかない」——これだけです。適正な価格で、手を抜かない施工をする。当たり前のことですが、業界では意外と難しいことです。</p>
                                <p>地元のお客様に「頼んで良かった」と言っていただけること、それが私たちの唯一の目標です。どうぞ気軽にご相談ください。</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* スタッフ紹介 */}
            <section className="py-20 bg-slate-900">
                <div className="max-w-5xl mx-auto px-6">
                    <div className="text-center mb-14">
                        <span className="text-amber-400 font-bold tracking-widest text-xs uppercase block mb-4">Our Team</span>
                        <h2 className="text-3xl md:text-4xl font-serif text-white font-bold">施工チームのご紹介</h2>
                        <div className="w-16 h-1 bg-amber-500 mx-auto mt-6 rounded-full" />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {staff.map((s, i) => (
                            <div key={i} className="flex flex-col items-center text-center p-8 bg-slate-950 rounded-3xl border border-white/5 hover:border-amber-500/20 transition-all">
                                <div className="w-20 h-20 rounded-full bg-slate-800 border-2 border-amber-500/30 flex items-center justify-center text-4xl mb-5">{s.emoji}</div>
                                <p className="text-white font-bold text-lg">{s.name}</p>
                                <p className="text-amber-400 text-xs mt-1 mb-4 leading-snug">{s.role}</p>
                                <p className="text-slate-400 text-sm italic">「{s.msg.replace(/「|」/g, '')}」</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 会社概要 */}
            <section className="py-20 bg-slate-950">
                <div className="max-w-4xl mx-auto px-6">
                    <div className="text-center mb-12">
                        <span className="text-amber-400 font-bold tracking-widest text-xs uppercase block mb-4">Company Info</span>
                        <h2 className="text-3xl font-serif text-white font-bold">会社概要</h2>
                        <div className="w-16 h-1 bg-amber-500 mx-auto mt-6 rounded-full" />
                    </div>
                    <div className="overflow-hidden rounded-3xl border border-white/5">
                        {companyInfo.map(([label, value], i) => (
                            <div key={label} className={`flex flex-col sm:flex-row ${i % 2 === 0 ? 'bg-slate-900' : 'bg-slate-950'}`}>
                                <div className="sm:w-48 px-6 py-4 text-slate-400 text-sm font-bold shrink-0 border-b border-white/5 sm:border-b-0 sm:border-r border-white/5">{label}</div>
                                <div className="px-6 py-4 text-white text-sm">{value}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* アクセス＋CTA */}
            <section className="py-20 bg-slate-900">
                <div className="max-w-4xl mx-auto px-6 text-center">
                    <h2 className="text-2xl font-serif text-white font-bold mb-6">アクセス・お問い合わせ</h2>
                    <div className="space-y-3 text-slate-300 text-sm mb-8">
                        <p className="flex items-center justify-center gap-2"><MapPin className="w-4 h-4 text-amber-400" />〒000-0000 〇〇県〇〇市〇〇町1-2-3</p>
                        <p className="flex items-center justify-center gap-2"><Phone className="w-4 h-4 text-amber-400" /><a href="tel:0120-XXX-XXX" className="hover:text-amber-400 transition-colors">0120-XXX-XXX</a></p>
                        <p className="flex items-center justify-center gap-2"><Mail className="w-4 h-4 text-amber-400" />info@takumi-irodori.jp</p>
                    </div>
                    <div className="w-full h-48 bg-slate-800 rounded-3xl flex items-center justify-center text-slate-500 text-sm mb-8 border border-white/5">
                        ✦ Googleマップを埋め込み予定 ✦
                    </div>
                    <Link to="/contact" className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-600 text-slate-950 px-8 py-4 rounded-full font-bold transition-all shadow-lg hover:-translate-y-1">
                        <MessageCircle className="w-5 h-5" />無料でご相談・お見積りを依頼する
                    </Link>
                </div>
            </section>
        </div>
    );
}
