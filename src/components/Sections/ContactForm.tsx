import { useState } from 'react';
import { Send, Phone, MapPin } from 'lucide-react';
import { motion } from 'motion/react';

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: ''
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Simulate form submission
        alert('お問い合わせを受け付けました。担当者よりご連絡いたします。');
        setFormData({ name: '', email: '', phone: '', message: '' });
    };

    return (
        <section className="py-24 bg-white" id="contact">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-16">
                    <span className="text-earth-600 font-bold tracking-widest text-sm mb-2 block">CONTACT</span>
                    <h2 className="text-3xl md:text-4xl font-serif text-earth-900 font-bold">無料お見積り・ご相談</h2>
                    <div className="w-20 h-1 bg-forest-500 mx-auto mt-6 rounded-full"></div>
                    <p className="mt-6 text-earth-800 max-w-2xl mx-auto leading-relaxed">
                        強引な営業は一切いたしません。<br />
                        「まずは費用感だけ知りたい」「他社との相見積もりをしたい」という方も大歓迎です。
                    </p>
                </div>

                <div className="grid lg:grid-cols-5 gap-12 items-start max-w-5xl mx-auto">
                    {/* Quick Contact Info */}
                    <div className="lg:col-span-2 space-y-8">
                        <div className="friendly-card bg-earth-100 border-none">
                            <div className="w-12 h-12 bg-earth-600 rounded-full flex items-center justify-center mb-6">
                                <Phone className="w-6 h-6 text-white" />
                            </div>
                            <h3 className="text-xl font-bold text-earth-900 mb-2">お電話でのご相談</h3>
                            <p className="text-earth-600 font-bold text-3xl mb-2">0120-XXX-XXX</p>
                            <p className="text-sm text-earth-800">
                                営業時間：8:00〜19:00<br />
                                定休日：日曜日（※事前予約で対応可）
                            </p>
                        </div>

                        <div className="friendly-card">
                            <div className="w-12 h-12 bg-forest-600 rounded-full flex items-center justify-center mb-6">
                                <MapPin className="w-6 h-6 text-white" />
                            </div>
                            <h3 className="text-xl font-bold text-earth-900 mb-2">対応エリア</h3>
                            <p className="text-sm text-earth-800 leading-relaxed font-medium">
                                〇〇市全域、〇〇市、〇〇町<br />
                                <span className="text-earth-600 block mt-2">※地域密着のため、片道1時間圏内を基本としておりますが、近隣の方もお気軽にご相談ください。</span>
                            </p>
                        </div>
                    </div>

                    {/* Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="lg:col-span-3 friendly-card p-8 md:p-12 relative overflow-hidden"
                    >
                        <div className="absolute top-0 right-0 w-64 h-64 bg-earth-400/5 blur-3xl rounded-full"></div>

                        <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                            <div>
                                <label className="block text-sm font-bold text-earth-900 mb-2">お名前 <span className="text-red-500">*</span></label>
                                <input
                                    type="text"
                                    required
                                    className="w-full px-4 py-3 rounded-xl bg-earth-100/50 border border-earth-400/30 focus:outline-none focus:ring-2 focus:ring-earth-600 transition-all font-medium"
                                    placeholder="例：山田 太郎"
                                    value={formData.name}
                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                />
                            </div>

                            <div className="grid md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-bold text-earth-900 mb-2">電話番号 <span className="text-red-500">*</span></label>
                                    <input
                                        type="tel"
                                        required
                                        className="w-full px-4 py-3 rounded-xl bg-earth-100/50 border border-earth-400/30 focus:outline-none focus:ring-2 focus:ring-earth-600 transition-all font-medium"
                                        placeholder="例：090-1234-5678"
                                        value={formData.phone}
                                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-bold text-earth-900 mb-2">メールアドレス</label>
                                    <input
                                        type="email"
                                        className="w-full px-4 py-3 rounded-xl bg-earth-100/50 border border-earth-400/30 focus:outline-none focus:ring-2 focus:ring-earth-600 transition-all font-medium"
                                        placeholder="例：info@example.com"
                                        value={formData.email}
                                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-bold text-earth-900 mb-2">ご相談内容 <span className="text-red-500">*</span></label>
                                <textarea
                                    required
                                    rows={5}
                                    className="w-full px-4 py-3 rounded-xl bg-earth-100/50 border border-earth-400/30 focus:outline-none focus:ring-2 focus:ring-earth-600 transition-all font-medium resize-none"
                                    placeholder="「外壁のひび割れが気になる」「屋根の点検をお願いしたい」「見積もりが欲しい」など、どんなことでもお気軽にご記入ください。"
                                    value={formData.message}
                                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                className="w-full bg-forest-600 hover:bg-forest-700 text-white font-bold py-4 rounded-xl flex items-center justify-center gap-2 transition-all shadow-md mt-4"
                            >
                                <Send className="w-5 h-5" />
                                この内容で送信する
                            </button>

                            <p className="text-xs text-center text-earth-600 mt-4">
                                ご入力いただいた個人情報は、お問い合わせの対応にのみ使用いたします。
                            </p>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default ContactForm;
