import { Phone, Mail, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="bg-earth-900 text-earth-100 pt-20 pb-24 lg:pb-12 border-t-4 border-earth-600">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

                    {/* Company Info */}
                    <div className="lg:col-span-2">
                        <h3 className="text-2xl font-serif font-bold text-white mb-6">〇〇工務店</h3>
                        <p className="text-earth-100/80 leading-relaxed mb-8 max-w-sm">
                            地域密着で〇〇年の実績。外壁塗装、屋根工事、水回りリフォームなど、住まいのお困りごとは何でもご相談ください。親切丁寧な職人が対応いたします。
                        </p>
                        <div className="space-y-4">
                            <div className="flex items-start gap-4 text-earth-100/90">
                                <MapPin className="w-5 h-5 text-earth-400 shrink-0 mt-1" />
                                <p>〒000-0000<br />〇〇県〇〇市〇〇町1-2-3</p>
                            </div>
                            <div className="flex items-center gap-4 text-earth-100/90">
                                <Phone className="w-5 h-5 text-earth-400 shrink-0" />
                                <p>0120-XXX-XXX <span className="text-sm text-earth-100/60 ml-2">(8:00〜19:00 日曜定休)</span></p>
                            </div>
                            <div className="flex items-center gap-4 text-earth-100/90">
                                <Mail className="w-5 h-5 text-earth-400 shrink-0" />
                                <p>info@example.com</p>
                            </div>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-lg font-bold text-white mb-6 border-b border-earth-600/50 pb-2 inline-block">メニュー</h3>
                        <ul className="space-y-4">
                            <li><Link to="/" className="hover:text-earth-400 transition-colors">ホーム</Link></li>
                            <li><Link to="/services" className="hover:text-earth-400 transition-colors">事業内容・強み</Link></li>
                            <li><Link to="/projects" className="hover:text-earth-400 transition-colors">施工事例・お客様の声</Link></li>
                            <li><Link to="/about" className="hover:text-earth-400 transition-colors">会社案内・アクセス</Link></li>
                            <li><Link to="/contact" className="hover:text-earth-400 transition-colors">お問い合わせ・無料お見積り</Link></li>
                        </ul>
                    </div>

                    {/* Service Area */}
                    <div>
                        <h3 className="text-lg font-bold text-white mb-6 border-b border-earth-600/50 pb-2 inline-block">対応エリア</h3>
                        <p className="text-earth-100/80 leading-relaxed text-sm">
                            〇〇市全域、〇〇市、〇〇町<br />
                            <span className="text-earth-400 mt-2 block">※近隣エリアの方もお気軽にご相談ください。喜んでお伺いします！</span>
                        </p>
                    </div>

                </div>

                {/* Copyright */}
                <div className="pt-8 border-t border-earth-100/10 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-earth-100/50">
                    <p>&copy; {new Date().getFullYear()} 〇〇工務店 All Rights Reserved.</p>
                    <div className="flex gap-6">
                        <Link to="/privacy" className="hover:text-earth-100 transition-colors">プライバシーポリシー</Link>
                        <Link to="/terms" className="hover:text-earth-100 transition-colors">サイトマップ</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
