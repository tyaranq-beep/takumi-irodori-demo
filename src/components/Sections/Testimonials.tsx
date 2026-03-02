import { Quote, Star } from 'lucide-react';
import { motion } from 'motion/react';

const Testimonials = () => {
    const reviews = [
        {
            name: "T様 (〇〇市在住)",
            text: "最初は相見積もりをいくつか取ったのですが、〇〇工務店さんの説明が一番わかりやすく、何より「近所での評判が良い」と知人に聞いて決めました。職人さんの挨拶も気持ちよく、仕事も丁寧で大満足です。",
            rating: 5,
            role: "外壁・屋根塗装"
        },
        {
            name: "S様 (〇〇市在住)",
            text: "細かい要望にも嫌な顔ひとつせず対応してくださり感謝しています。仕上がりも想像以上で、毎日家に帰るのが楽しみになりました。次回のリフォームも絶対にこちらにお願いしようと家族で話しています。",
            rating: 5,
            role: "エクステリア改修"
        },
        {
            name: "M様 (〇〇市在住)",
            text: "他社で「全部やり直す必要がある」と高額な見積もりを出されて不安になっていた所を相談しました。こちらの伊藤社長は「今は部分補修で十分です」と提案してくださり、本当に信頼できる会社だと感じました。",
            rating: 5,
            role: "屋根修理"
        }
    ];

    return (
        <section id="お客様の声" className="py-24 bg-earth-900 text-white relative overflow-hidden">
            {/* Decorative Background Pattern */}
            <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(#F5EFEB 2px, transparent 2px)', backgroundSize: '30px 30px' }}></div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="text-center mb-16">
                    <span className="text-earth-400 font-bold tracking-widest text-sm mb-2 block">TESTIMONIALS</span>
                    <h2 className="text-3xl md:text-4xl font-serif text-white font-bold">地元の皆様からのうれしいお声</h2>
                    <div className="w-20 h-1 bg-earth-400 mx-auto mt-6 rounded-full"></div>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {reviews.map((review, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className="bg-white/5 backdrop-blur-md rounded-3xl p-8 border border-white/10 relative group hover:bg-white/10 transition-colors"
                        >
                            <Quote className="absolute top-6 right-6 w-12 h-12 text-earth-100/10 group-hover:text-earth-400/20 transition-colors" />
                            <div className="flex gap-1 justify-center mb-6">
                                {[...Array(review.rating)].map((_, i) => (
                                    <Star key={i} className="w-5 h-5 fill-earth-400 text-earth-400" />
                                ))}
                            </div>
                            <p className="text-earth-100 leading-loose mb-8 font-medium">"{review.text}"</p>
                            <div className="border-t border-earth-100/10 pt-6 text-center">
                                <p className="font-bold text-white tracking-widest">{review.name}</p>
                                <p className="text-sm text-earth-400 mt-1">{review.role}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
