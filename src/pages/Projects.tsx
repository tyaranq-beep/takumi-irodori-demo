import Layout from '../components/Layout/Layout';
import BeforeAfter from '../components/Sections/BeforeAfter';
import Testimonials from '../components/Sections/Testimonials';
import LineCTABanner from '../components/Sections/LineCTABanner';

const Projects = () => {
    return (
        <Layout>
            <div className="bg-earth-100 py-20 text-center px-6">
                <h1 className="text-4xl md:text-5xl font-serif font-bold text-earth-900 mb-6">施工事例・お客様の声</h1>
                <p className="text-earth-800 max-w-2xl mx-auto leading-relaxed">
                    私たちがこれまで手掛けてきた「劇的な変化」と、地元のお客様からいただいた「温かいお言葉」をご紹介します。
                </p>
            </div>

            <BeforeAfter />
            <Testimonials />
            <LineCTABanner />
        </Layout>
    );
};

export default Projects;
