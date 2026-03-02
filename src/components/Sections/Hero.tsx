import { Phone, CheckCircle2 } from 'lucide-react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';

interface HeroProps {
    imageUrl?: string;
    loading?: boolean;
}

const Hero = ({ imageUrl, loading }: HeroProps) => {
    return (
        <section className="relative min-h-[90vh] flex items-center justify-center pt-20 overflow-hidden">
            {/* Background Image Area */}
            <div className="absolute inset-0 z-0">
                {loading ? (
                    <div className="w-full h-full bg-earth-800 animate-pulse" />
                ) : (
                    <>
                        <img
                            src={imageUrl || "https://images.unsplash.com/photo-1541888086425-d81bb1902047?auto=format&fit=crop&q=80"}
                            alt="丁寧な施工風景"
                            className="w-full h-full object-cover scale-105"
                        />
                        {/* Darker overlay for text readability */}
                        <div className="absolute inset-0 bg-earth-900/60 mix-blend-multiply" />
                    </>
                )}
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-6 w-full py-12">
                <div className="max-w-3xl">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <span className="inline-block px-4 py-2 bg-earth-600/90 text-white text-sm md:text-base font-bold rounded-full mb-6 backdrop-blur-sm border border-white/20">
                            地域密着・〇〇市周辺で選ばれ続けて〇〇年
                        </span>
                        <h1 className="text-4xl md:text-5xl lg:text-7xl font-serif text-white font-bold leading-tight mb-8 drop-shadow-lg">
                            あなたの「住まい」を、<br />
                            一番近くで守る<br />
                            <span className="text-earth-400">町の工務店です。</span>
                        </h1>
                        <p className="text-lg md:text-xl text-earth-100/90 mb-10 max-w-2xl leading-relaxed font-medium">
                            外壁塗装から小さな修理まで、どんな小さな悩みでもご相談ください。
                            「嘘をつかない適正価格」と「職人直営の丁寧な仕事」で、
                            顔の見える安心の施工をお届けします。
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 mb-12">
                            <Link
                                to="/contact"
                                className="bg-forest-600 hover:bg-forest-700 text-white px-8 py-4 rounded-full text-lg font-bold text-center transition-all shadow-lg hover:shadow-xl hover:-translate-y-1"
                            >
                                まずは無料でお見積り
                            </Link>
                            <a
                                href="tel:0120-XXX-XXX"
                                className="bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/30 text-white px-8 py-4 rounded-full text-lg font-bold flex items-center justify-center gap-2 transition-all"
                            >
                                <Phone className="w-5 h-5" />
                                0120-XXX-XXX に電話する
                            </a>
                        </div>

                        <div className="flex flex-wrap gap-4 text-sm md:text-base text-white/90 font-medium">
                            {['しつこい営業一切なし', '最短即日お伺い', '経験豊富な職人が直接対応'].map((text, i) => (
                                <div key={i} className="flex items-center gap-2 bg-earth-900/40 backdrop-blur-sm px-4 py-2 rounded-full border border-earth-100/10">
                                    <CheckCircle2 className="w-4 h-4 text-earth-400" />
                                    <span>{text}</span>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Decorative earthy shape at the bottom */}
            <div className="absolute bottom-0 w-full h-16 bg-gradient-to-t from-earth-100 to-transparent z-10" />
        </section>
    );
};

export default Hero;
