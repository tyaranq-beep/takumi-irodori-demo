import { ShieldCheck, Award, MessageCircle, PenTool } from 'lucide-react';
import { motion } from 'motion/react';

const TrustBadges = () => {
    const badges = [
        {
            icon: <Award className="w-8 h-8 text-earth-600" />,
            title: "地域密着の安心感",
            desc: "〇〇市周辺エリアに特化しているからこその「スピード対応」と「きめ細かいアフターフォロー」が強みです。"
        },
        {
            icon: <PenTool className="w-8 h-8 text-earth-600" />,
            title: "職人直営の適正価格",
            desc: "営業マンを挟まないから中間マージンなし。高品質な施工を「適正な価格」で直接お届けします。"
        },
        {
            icon: <ShieldCheck className="w-8 h-8 text-earth-600" />,
            title: "有資格者による確かな技術",
            desc: "一級塗装技能士をはじめとする国家資格を持ったプロが、手抜きなしの長持ちする施工をお約束します。"
        },
        {
            icon: <MessageCircle className="w-8 h-8 text-earth-600" />,
            title: "強引な営業はしません",
            desc: "お客様のペースを第一に考えます。不要な工事の押し売りや、しつこい電話営業は一切いたしません。"
        }
    ];

    return (
        <section className="py-20 bg-earth-100 relative z-20">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-16">
                    <span className="text-earth-600 font-bold tracking-widest text-sm mb-2 block">REASONS TO CHOOSE US</span>
                    <h2 className="text-3xl md:text-4xl font-serif text-earth-900 font-bold">私たちが「地元の皆様」に選ばれる4つの理由</h2>
                    <div className="w-20 h-1 bg-forest-500 mx-auto mt-6 rounded-full"></div>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {badges.map((badge, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="friendly-card flex flex-col items-center text-center group"
                        >
                            <div className="w-20 h-20 rounded-full bg-earth-400/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                                {badge.icon}
                            </div>
                            <h3 className="text-xl font-bold text-earth-900 mb-4">{badge.title}</h3>
                            <p className="text-earth-800 leading-relaxed text-sm">
                                {badge.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TrustBadges;
