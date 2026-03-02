import { ReactNode } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import MobileStickyFooter from './MobileStickyFooter';

interface LayoutProps {
    children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
    return (
        <div className="min-h-screen flex flex-col bg-earth-100 text-earth-900 font-sans">
            <Navbar />
            <main className="flex-1 pt-24 pb-20 lg:pb-0">
                {children}
            </main>
            <Footer />
            <MobileStickyFooter />
        </div>
    );
};

export default Layout;
