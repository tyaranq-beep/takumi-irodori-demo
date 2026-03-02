import { motion } from 'motion/react';
import Layout from '../components/Layout/Layout';
import LineCTABanner from '../components/Sections/LineCTABanner';
import { Settings, Home as HomeIcon, Droplet, Sun } from 'lucide-react';

const Services = () => {
    const services = [
        {
            icon: <HomeIcon className="w-10 h-10 text-earth-600" />,
            title: "外壁・屋根塗装",
            problem: "「色あせが気になる」「手で触ると白い粉がつく（チョーキング）」",
            solution: "単に色を塗るだけでなく、下地処理から徹底的に行い、家を長持ちさせる塗装を行います。最適な塗料選びからご提案します。"
        },
        {
            icon: <Droplet className="w-10 h-10 text-earth-600" />,
            title: "防水・雨漏り工事",
            problem: "「天井にシミができている」「ベランダの水はけが悪い」",
            solution: "雨漏りは家の天敵です。原因箇所を徹底的に特定し、確実な防水処理を施します。緊急の応急処置にも対応可能です。"
        },
        {
            icon: <Sun className="w-10 h-10 text-earth-600" />,
            title: "エクステリア・外構",
            problem: "「庭の手入れが大変」「駐車スペースを広げたい」",
            solution: "カーポートの設置、ウッドデッキ、フェンス工事など、毎日の暮らしを豊かにする外回り・お庭のリフォームをご提案します。"
        },
        {
            icon: <Settings className="w-10 h-10 text-earth-600" />,
            title: "内装リフォーム・水回り",
            problem: "「キッチンが古くて使いにくい」「お風呂が寒い」",
            solution: "システムキッチンの交換や、トイレ・お風呂のバリアフリー化など、ご家族のライフスタイルに合わせた快適な空間づくりをお手伝いします。"
        }
    ];

    return (
        <Layout>
            <div className="bg-earth-100 py-20 pb-12 text-center px-6">
                <h1 className="text-4xl md:text-5xl font-serif font-bold text-earth-900 mb-6">事業内容・お悩み解決</h1>
                <p className="text-earth-800 max-w-2xl mx-auto leading-relaxed">
                    専門用語は使いません。お客様の「困った」「こうしたい」を解決するのが私たちの仕事です。
                    どんな小さな工事でも喜んでお引き受けします。
                </p>
            </div>

            <div className="max-w-5xl mx-auto px-6 py-20">
                <div className="grid md:grid-cols-2 gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className="friendly-card flex flex-col h-full"
                        >
                            <div className="flex items-center gap-4 mb-6 pb-4 border-b border-earth-100">
                                <div className="w-16 h-16 bg-earth-100 rounded-full flex items-center justify-center shrink-0">
                                    {service.icon}
                                </div>
                                <h2 className="text-2xl font-bold text-earth-900">{service.title}</h2>
                            </div>

                            <div className="mb-6 flex-1">
                                <span className="inline-block bg-earth-100 text-earth-800 text-xs font-bold px-3 py-1 rounded-full mb-3">
                                    こんなお悩みに
                                </span>
                                <p className="text-earth-900 font-bold mb-4">
                                    {service.problem}
                                </p>
                                <span className="inline-block bg-forest-100 text-forest-700 text-xs font-bold px-3 py-1 rounded-full mb-3">
                                    私たちの解決策
                                </span>
                                <p className="text-earth-800 leading-relaxed text-sm">
                                    {service.solution}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            <LineCTABanner />
        </Layout>
    );
};

export default Services;
