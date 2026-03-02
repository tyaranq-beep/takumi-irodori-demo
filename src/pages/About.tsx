import Layout from '../components/Layout/Layout';
import LineCTABanner from '../components/Sections/LineCTABanner';
import { MapPin } from 'lucide-react';

const About = () => {
    return (
        <Layout>
            <div className="bg-earth-100 py-20 text-center px-6">
                <h1 className="text-4xl md:text-5xl font-serif font-bold text-earth-900 mb-6">会社案内</h1>
                <p className="text-earth-800 max-w-2xl mx-auto leading-relaxed">
                    私たちのモットーは「お客様に嘘をつかないこと」。<br />地元の皆様に寄り添う工務店として、顔の見える安心の施工をお届けします。
                </p>
            </div>

            <div className="max-w-4xl mx-auto px-6 py-20">

                {/* 代表挨拶 */}
                <div className="friendly-card mb-16 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-earth-400/10 blur-3xl"></div>
                    <h2 className="text-2xl font-serif text-earth-900 font-bold mb-8 border-b border-earth-100 pb-4">代表挨拶</h2>
                    <div className="flex flex-col md:flex-row gap-8 items-center">
                        <div className="w-48 h-48 rounded-full bg-earth-100 shrink-0 overflow-hidden border-4 border-white shadow-xl">
                            <img src="https://images.unsplash.com/photo-1542456073-61fc5f891eb8?auto=format&fit=crop&q=80" alt="代表" className="w-full h-full object-cover" />
                        </div>
                        <div>
                            <p className="text-earth-800 leading-relaxed font-medium mb-6">
                                「その家、まだ諦めないでください。」<br /><br />
                                私たちは地域密着で、長年お客様の住環境をサポートしてまいりました。
                                適正な価格で、最良の品質を提供すること。そして何より「お客様に嘘をつかない」ことを信条としています。<br /><br />
                                大手にはできない細やかな気配りと、職人直営ならではの柔軟な対応力で、お客様の「こうしたい」を形にします。どんな小さな悩みでも、まずは私たちにご相談ください。
                            </p>
                            <div className="text-right">
                                <p className="text-sm font-bold text-earth-600">代表取締役</p>
                                <p className="text-xl font-bold font-serif text-earth-900 mt-1">山田 太郎</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* 会社概要 */}
                <div className="grid md:grid-cols-2 gap-12 mb-16">
                    <div className="friendly-card">
                        <h2 className="text-2xl font-serif text-earth-900 font-bold mb-6 border-b border-earth-100 pb-4">会社概要</h2>
                        <table className="w-full text-sm">
                            <tbody>
                                <tr className="border-b border-earth-100">
                                    <th className="py-4 text-left font-bold text-earth-600 w-1/3">会社名</th>
                                    <td className="py-4 text-earth-900 font-bold">〇〇工務店</td>
                                </tr>
                                <tr className="border-b border-earth-100">
                                    <th className="py-4 text-left font-bold text-earth-600">設立</th>
                                    <td className="py-4 text-earth-900 font-medium">2010年4月</td>
                                </tr>
                                <tr className="border-b border-earth-100">
                                    <th className="py-4 text-left font-bold text-earth-600">事業内容</th>
                                    <td className="py-4 text-earth-900 font-medium leading-relaxed">外壁塗装、屋根工事、水回りリフォーム、エクステリア工事全般</td>
                                </tr>
                                <tr className="border-b border-earth-100">
                                    <th className="py-4 text-left font-bold text-earth-600">所在地</th>
                                    <td className="py-4 text-earth-900 font-medium">〒000-0000<br />〇〇県〇〇市〇〇町1-2-3</td>
                                </tr>
                                <tr>
                                    <th className="py-4 text-left font-bold text-earth-600">資格・許認可</th>
                                    <td className="py-4 text-earth-900 font-medium leading-relaxed">
                                        建設業許可 〇〇県知事（般-X）第XXXXX号<br />
                                        一級塗装技能士<br />
                                        二級建築施工管理技士
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <div className="friendly-card">
                        <h2 className="text-2xl font-serif text-earth-900 font-bold mb-6 border-b border-earth-100 pb-4">アクセスマップ</h2>
                        <div className="aspect-square bg-earth-100 rounded-2xl flex flex-col items-center justify-center text-earth-600 border border-earth-400/20">
                            <MapPin className="w-10 h-10 mb-2" />
                            <span className="font-bold">Google Maps 埋め込みエリア</span>
                        </div>
                    </div>
                </div>
            </div>

            <LineCTABanner />
        </Layout>
    );
};

export default About;
