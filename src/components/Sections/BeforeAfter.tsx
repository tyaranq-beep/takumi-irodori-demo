import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

interface BeforeAfterProps {
    beforeUrl?: string;
    afterUrl?: string;
    loading?: boolean;
}

const BeforeAfter = ({ beforeUrl, afterUrl, loading }: BeforeAfterProps) => {
    return (
        <section id="施工事例" className="py-24 bg-white relative">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-16">
                    <span className="text-earth-600 font-bold tracking-widest text-sm mb-2 block">WORKS</span>
                    <h2 className="text-3xl md:text-4xl font-serif text-earth-900 font-bold">地域での施工事例（ビフォーアフター）</h2>
                    <div className="w-20 h-1 bg-forest-500 mx-auto mt-6 rounded-full"></div>
                    <p className="mt-6 text-earth-800 max-w-2xl mx-auto">
                        長年の実績から、劇的に改善された住まいの事例のほんの一部をご紹介します。
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center">
                    <div className="relative group rounded-3xl overflow-hidden shadow-xl shadow-earth-900/10">
                        <div className="absolute top-4 left-4 bg-earth-900/80 backdrop-blur-md text-white px-4 py-2 font-bold tracking-wider z-10 rounded-xl rounded-tl-none border border-white/20">
                            施工前
                        </div>
                        {loading ? (
                            <div className="w-full aspect-[4/3] bg-earth-100 animate-pulse" />
                        ) : (
                            <img
                                src={beforeUrl || "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&q=80"}
                                alt="施工前"
                                className="w-full aspect-[4/3] object-cover group-hover:scale-105 transition-transform duration-700"
                            />
                        )}
                        <div className="p-6 bg-earth-100/50 backdrop-blur-md border-t border-white absolute bottom-0 w-full">
                            <p className="text-earth-900 font-bold">全体的な色褪せと、クラック（ひび割れ）が目立つ状態</p>
                        </div>
                    </div>

                    <div className="hidden md:flex justify-center -mx-4 z-10 relative">
                        <div className="w-16 h-16 bg-forest-600 rounded-full flex items-center justify-center text-white shadow-xl shadow-forest-900/20 border-4 border-white">
                            <ArrowRight className="w-8 h-8" />
                        </div>
                    </div>

                    <div className="relative group rounded-3xl overflow-hidden shadow-2xl shadow-forest-900/10 border-4 border-earth-100">
                        <div className="absolute top-4 left-4 forest-gradient text-white px-6 py-2 font-bold tracking-wider z-10 rounded-xl rounded-tl-none shadow-lg border border-white/20">
                            施工後
                        </div>
                        {loading ? (
                            <div className="w-full aspect-[4/3] bg-earth-100 animate-pulse" />
                        ) : (
                            <img
                                src={afterUrl || "https://images.unsplash.com/photo-1541888086425-d81bb1902047?auto=format&fit=crop&q=80"}
                                alt="施工後"
                                className="w-full aspect-[4/3] object-cover group-hover:scale-105 transition-transform duration-700"
                            />
                        )}
                        <div className="p-6 bg-white/90 backdrop-blur-md border-t border-forest-500/20 absolute bottom-0 w-full">
                            <p className="text-forest-700 font-bold">新築時のような輝きを取り戻し、防水性も大幅にアップ</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BeforeAfter;
