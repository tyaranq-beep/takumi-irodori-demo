import Layout from '../components/Layout/Layout';
import Hero from '../components/Sections/Hero';
import TrustBadges from '../components/Sections/TrustBadges';
import BeforeAfter from '../components/Sections/BeforeAfter';
import Testimonials from '../components/Sections/Testimonials';
import LineCTABanner from '../components/Sections/LineCTABanner';
import ContactForm from '../components/Sections/ContactForm';

const Home = () => {
    return (
        <Layout>
            <Hero />
            <TrustBadges />
            <div className="py-12 bg-earth-100 text-center px-6">
                <h2 className="text-2xl font-bold text-earth-900 mb-4">お急ぎの方へ</h2>
                <p className="text-earth-800 mb-6">「雨漏りしている」「外壁が剥がれてきた」など、緊急のトラブルにも最短即日で駆けつけます。</p>
            </div>
            <BeforeAfter />
            <Testimonials />
            <LineCTABanner />
            <ContactForm />
        </Layout>
    );
};

export default Home;
