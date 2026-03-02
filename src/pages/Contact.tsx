import Layout from '../components/Layout/Layout';
import ContactForm from '../components/Sections/ContactForm';
import LineCTABanner from '../components/Sections/LineCTABanner';

const Contact = () => {
    return (
        <Layout>
            <div className="bg-earth-100 pt-20 pb-12 text-center px-6">
                <h1 className="text-4xl md:text-5xl font-serif font-bold text-earth-900 mb-6">お問い合わせ</h1>
                <p className="text-earth-800 max-w-2xl mx-auto leading-relaxed">
                    些細なご相談でも大歓迎です。強引な営業はいたしませんので、お気軽にご連絡ください。<br />
                    お急ぎの場合はお電話、写真で相談したい場合はLINEが便利ですよ！
                </p>
            </div>

            <ContactForm />
            <LineCTABanner />
        </Layout>
    );
};

export default Contact;
