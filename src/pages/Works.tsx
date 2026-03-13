import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MessageCircle } from 'lucide-react';
import Slider from '../components/Slider';

// ===== 施工事例データ =====
const cases = [
    {
        id: 'case01',
        category: '外壁・屋根',
        title: '外壁塗装＋屋根カバー工法',
        location: '〇〇市 / 築31年 一戸建て',
        problem: '全体的な色あせとひび割れ（クラック）が進行。一部から雨漏りの形跡が確認された。',
        solution: 'フッ素系塗料を使用した3度塗り施工。屋根はカバー工法で新しい金属屋根を設置。防水性・断熱性が大幅に改善。',
        cost: '85〜110万円',
        duration: '約14日間',
        before: '/before-exterior.png',
        after: '/after-exterior.png',
        tag: '外壁・屋根',
    },
    {
        id: 'case02',
        category: '水回り',
        title: 'キッチン＋ユニットバス全面交換',
        location: '〇〇市 / 築28年 一戸建て',
        problem: 'キッチンの排水詰まりが頻発。ユニットバスはカビと腐食が進み、床が沈み始めていた。',
        solution: 'オープンプランのシステムキッチンに全面交換。ユニットバスは標準より広い1.25坪タイプを採用し、バリアフリー対応の手すりも設置。',
        cost: '120〜160万円',
        duration: '約10日間',
        before: '/before-kitchen.png',
        after: '/after-kitchen.png',
        tag: '水回り',
    },
    {
        id: 'case03',
        category: '内装',
        title: '和室→洋室リノベーション',
        location: '〇〇市 / 築40年 一戸建て',
        problem: '和室の畳が腐食し、冬は底冷えが激しかった。老親の移動のため洋室化を希望。',
        solution: '畳を撤去しナラ無垢フローリングに変更。床下に断熱材を追加。押入れをクローゼットに改修。明るく広く感じられる空間に一変。',
        cost: '50〜70万円',
        duration: '約7日間',
        before: '/before-tatami.png',
        after: '/after-tatami.png',
        tag: '内装',
    },
];

const tags = ['すべて', '外壁・屋根', '水回り', '内装'];

// ===== Works ページ =====
export default function Works() {
    const [active, setActive] = useState('すべて');
    const filtered = cases.filter(c => active === 'すべて' || c.tag === active);

    return (
        <div>
            {/* ページヘッダー */}
            <section className="py-24 bg-slate-900 relative overflow-hidden">
                <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'radial-gradient(rgb(251 191 36) 2px, transparent 2px)', backgroundSize: '30px 30px' }} />
                <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
                    <span className="text-amber-400 font-bold tracking-[0.3em] text-xs uppercase block mb-4">Case Studies</span>
                    <h1 className="text-3xl md:text-5xl font-serif font-bold text-white leading-snug mb-6">
                        ただ直すのではない。<br />未来の暮らしを創るリフォーム。
                    </h1>
                    <p className="text-slate-400 text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
                        すべての写真は実際の施工現場のものです。<br />
                        「こんなに変わるとは思わなかった」——その一言が、私たちの誇りです。
                    </p>
                    <div className="w-16 h-1 bg-amber-500 mx-auto mt-8 rounded-full" />
                </div>
            </section>

            {/* カテゴリタブ */}
            <section className="py-8 bg-slate-950 border-b border-white/5 sticky top-16 md:top-20 z-30">
                <div className="max-w-7xl mx-auto px-6 flex gap-3 flex-wrap">
                    {tags.map(tag => (
                        <button
                            key={tag}
                            onClick={() => setActive(tag)}
                            className={`px-5 py-2 rounded-full text-sm font-bold transition-all ${active === tag
                                ? 'bg-amber-500 text-slate-950 shadow-md'
                                : 'bg-slate-800 text-slate-400 hover:bg-slate-700 hover:text-white'
                                }`}
                        >
                            {tag}
                        </button>
                    ))}
                </div>
            </section>

            {/* 事例一覧 */}
            <section className="py-20 bg-slate-950">
                <div className="max-w-7xl mx-auto px-6 space-y-24">
                    {filtered.map((c, i) => (
                        <div key={c.id} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-start ${i % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                            {/* スライダー */}
                            <div>
                                <p className="text-xs text-slate-500 mb-3 font-bold tracking-widest">← スライダーで施工前後を比較</p>
                                <Slider before={c.before} after={c.after} beforeLabel="施工前" afterLabel="施工後" />
                            </div>
                            {/* テキスト */}
                            <div className="flex flex-col gap-5">
                                <div>
                                    <span className="inline-block px-3 py-1 bg-amber-500/15 text-amber-400 text-xs font-bold rounded-full mb-3">{c.category}</span>
                                    <h2 className="text-2xl md:text-3xl font-serif font-bold text-white mb-2">{c.title}</h2>
                                    <p className="text-slate-500 text-sm">{c.location}</p>
                                </div>
                                <div className="space-y-4">
                                    <div className="p-5 bg-slate-900 rounded-2xl border border-white/5">
                                        <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">📌 施主様のお悩み</p>
                                        <p className="text-slate-200 text-sm leading-relaxed">{c.problem}</p>
                                    </div>
                                    <div className="p-5 bg-amber-500/10 rounded-2xl border border-amber-500/20">
                                        <p className="text-xs font-bold text-amber-400 uppercase tracking-widest mb-2">✅ 解決のポイント</p>
                                        <p className="text-slate-200 text-sm leading-relaxed">{c.solution}</p>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <div className="flex-1 p-4 bg-slate-900 rounded-xl border border-white/5 text-center">
                                        <p className="text-xs text-slate-500 mb-1">費用の目安</p>
                                        <p className="text-white font-bold text-sm">{c.cost}</p>
                                    </div>
                                    <div className="flex-1 p-4 bg-slate-900 rounded-xl border border-white/5 text-center">
                                        <p className="text-xs text-slate-500 mb-1">工期</p>
                                        <p className="text-white font-bold text-sm">{c.duration}</p>
                                    </div>
                                </div>
                                <Link to="/contact" className="bg-amber-500 hover:bg-amber-600 text-slate-950 py-4 rounded-xl text-center font-bold text-sm transition-all shadow-md flex items-center justify-center gap-2">
                                    <MessageCircle className="w-4 h-4" />このような工事を無料で相談する
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* CTAバナー */}
            <section className="py-16 bg-amber-500 relative overflow-hidden">
                <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(white 2px, transparent 2px)', backgroundSize: '24px 24px' }} />
                <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
                    <p className="text-slate-950 text-xl md:text-3xl font-serif font-bold mb-8">
                        「あなたの家も、ここまで変われる。」<br />
                        <span className="text-base font-sans font-medium mt-2 block">まずは写真を送るだけで概算費用をお伝えします。</span>
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link to="/contact" className="bg-slate-950 hover:bg-slate-800 text-white px-8 py-4 rounded-full text-base font-bold transition-all shadow-lg hover:-translate-y-1">
                            無料で診断を依頼する →
                        </Link>
                        <a href="https://line.me" className="bg-[#06C755] hover:bg-[#05b04a] text-white px-8 py-4 rounded-full text-base font-bold flex items-center justify-center gap-2 transition-all shadow-lg">
                            <MessageCircle className="w-5 h-5" />LINEで写真を送って相談
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
}
