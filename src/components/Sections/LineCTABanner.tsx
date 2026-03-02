import { MessageCircle } from 'lucide-react';
import { motion } from 'motion/react';

const LineCTABanner = () => {
    return (
        <section className="py-20 bg-earth-100 px-6">
            <div className="max-w-5xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="bg-[#06C755] rounded-[2rem] p-8 md:p-14 text-center text-white shadow-2xl relative overflow-hidden"
                >
                    {/* Decorative circles */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -mr-20 -mt-20"></div>
                    <div className="absolute bottom-0 left-0 w-48 h-48 bg-black/10 rounded-full blur-2xl -ml-10 -mb-10"></div>

                    <div className="relative z-10 flex flex-col items-center">
                        <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mb-8 shadow-inner">
                            <MessageCircle className="w-10 h-10 text-[#06C755]" />
                        </div>
                        <h2 className="text-2xl md:text-4xl font-bold mb-6">
                            しつこい営業なし。「ちょっと聞きたい」大歓迎です
                        </h2>
                        <p className="text-lg md:text-xl text-white/90 mb-10 max-w-2xl font-medium">
                            「外壁のひび割れ、これって直した方がいい？」「見積もりだけもらって検討したい」など、写真でのカンタン見積りにも対応しています。
                        </p>
                        <a
                            href="#"
                            className="inline-flex items-center gap-3 bg-white text-[#06C755] hover:bg-earth-100 px-10 py-5 rounded-full text-xl font-bold transition-all shadow-lg hover:shadow-xl hover:-translate-y-1"
                        >
                            <MessageCircle className="w-6 h-6" />
                            LINEで無料相談する
                        </a>
                        <p className="mt-6 text-sm text-white/80 font-medium">※24時間受付中 / 最短5分でお返事します</p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default LineCTABanner;
