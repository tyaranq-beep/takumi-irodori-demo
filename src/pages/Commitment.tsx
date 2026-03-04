import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, MessageCircle } from 'lucide-react';

const commitments = [
    {
        num: '01',
        label: '正直な診断',
        title: '見積もりに水増しなし。全費用を書面で明示。',
        body: '業界慣習の即日契約は一切しません。必ず書面で全費用を明示し、その場でサインを求めません。比較検討の時間を十分にお取りください。他社との相見積もりも大歓迎です。',
        points: ['見積書は必ず書面で提出', '即日契約を迫ることはしない', '相見積もり歓迎・断りやすい雰囲気'],
    },
    {
        num: '02',
        label: '自社職人',
        title: '外注ゼロ。見積りした職人がそのまま施工。',
        body: '外注・下請けゼロ。見積りをした職人が施工まですべて担当します。責任の所在が明確で、施工後アフターも同じ職人が対応します。「知らない人が来た」というトラブルは絶対に起きません。',
        points: ['外注・下請けゼロ', '担当職人がアフターまで一貫対応', '突然知らない業者が来ることはない'],
    },
    {
        num: '03',
        label: '素材の透明性',
        title: '使う製品のメーカー・品番まで公開します。',
        body: '使用する塗料・素材のメーカー・品番・グレードを「仕様書」としてお渡しします。「どんな材料を使っているかわからない」という不安をなくすのが私たちの誠実さです。',
        points: ['塗料メーカー・品番を仕様書に明記', '施工後も確認可能な証拠を手渡し', '曖昧な説明はしない'],
    },
    {
        num: '04',
        label: '15年保証',
        title: '工事後15年間、定期点検でサポートします。',
        body: '工事完了後の1年・3年・5年・10年・15年の節目に無料の定期点検を実施します。問題があれば保証の範囲内でご対応します。',
        points: ['5回の無料定期点検', '保証の範囲内での無償対応', '長く付き合える工務店を目指す'],
    },
];

export default function Commitment() {
    return (
        <div>
            <section className="py-24 bg-slate-900 relative overflow-hidden">
                <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'radial-gradient(rgb(251 191 36) 2px, transparent 2px)', backgroundSize: '30px 30px' }} />
                <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
                    <span className="text-amber-400 font-bold tracking-[0.3em] text-xs uppercase block mb-4">Our Commitment</span>
                    <h1 className="text-3xl md:text-5xl font-serif font-bold text-white leading-snug mb-6">なぜ、地元にこだわるのか。</h1>
                    <p className="text-slate-400 text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
                        大手ではなく地元の工務店を選ぶ理由は値段だけではありません。<br />
                        すべての工程で顔が見える職人が責任を持って関わること——<br />
                        その積み重ねが、15年とおる仕事になります。
                    </p>
                    <div className="w-16 h-1 bg-amber-500 mx-auto mt-8 rounded-full" />
                </div>
            </section>

            <section className="py-20 bg-slate-950">
                <div className="max-w-5xl mx-auto px-6 space-y-20">
                    {commitments.map((c, i) => (
                        <div key={c.num} className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
                            <div className="flex flex-col gap-4">
                                <div className="flex items-start gap-4">
                                    <span className="text-7xl leading-none font-serif font-bold text-white/5 select-none">{c.num}</span>
                                    <div className="pt-2">
                                        <span className="text-amber-400 text-xs font-bold tracking-widest uppercase block mb-1">{c.label}</span>
                                        <h2 className="text-xl md:text-2xl font-serif font-bold text-white leading-snug">{c.title}</h2>
                                    </div>
                                </div>
                                <p className="text-slate-400 leading-relaxed text-sm">{c.body}</p>
                            </div>
                            <div className="p-8 bg-slate-900 rounded-3xl border border-white/5 space-y-4">
                                <p className="text-amber-400 text-xs font-bold tracking-widest uppercase mb-4">このこだわりのポイント</p>
                                {c.points.map((pt, j) => (
                                    <div key={j} className="flex items-start gap-3">
                                        <CheckCircle className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                                        <p className="text-white text-sm font-medium">{pt}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            <section className="py-20 bg-slate-900">
                <div className="max-w-4xl mx-auto px-6 text-center">
                    <h2 className="text-3xl md:text-4xl font-serif text-white font-bold mb-6">「15年保証書」を発行します。</h2>
                    <p className="text-slate-400 leading-relaxed max-w-xl mx-auto mb-10">
                        施工完了後、正式な保証書を発行します。万が一のときでも保証の範囲内で無償にて対応いたします。
                    </p>
                    <div className="grid grid-cols-3 gap-4 max-w-lg mx-auto mb-12">
                        {[['15年', '最長保証期間'], ['5回', '無料定期点検'], ['0円', '保証範囲内修繕費']].map(([num, label]) => (
                            <div key={label} className="p-5 bg-slate-950 rounded-2xl border border-white/5">
                                <p className="text-amber-400 text-2xl font-serif font-bold">{num}</p>
                                <p className="text-slate-400 text-xs mt-1">{label}</p>
                            </div>
                        ))}
                    </div>
                    <Link to="/contact" className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-600 text-slate-950 px-8 py-4 rounded-full text-base font-bold transition-all shadow-lg hover:-translate-y-1">
                        <MessageCircle className="w-5 h-5" />無料でご相談・お見積りを依頼する
                    </Link>
                </div>
            </section>
        </div>
    );
}
