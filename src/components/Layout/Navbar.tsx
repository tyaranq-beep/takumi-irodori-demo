import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone } from 'lucide-react';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const location = useLocation();

    const navLinks = [
        { label: 'ホーム', href: '/' },
        { label: '事業内容', href: '/services' },
        { label: '施工事例・お客様の声', href: '/projects' },
        { label: '会社案内', href: '/about' },
    ];

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 10);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Close mobile menu on route change
    useEffect(() => {
        setIsMobileMenuOpen(false);
    }, [location.pathname]);

    return (
        <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'glass-nav py-3' : 'bg-white/95 py-5 border-b border-earth-400/20 shadow-sm'}`}>
            <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
                {/* Logo Area */}
                <Link to="/" className="flex flex-col">
                    <span className="text-xl md:text-2xl font-serif font-bold text-earth-900 tracking-wide">
                        〇〇工務店
                    </span>
                    <span className="text-[10px] md:text-xs font-sans font-medium text-earth-600 mt-1">
                        地域密着・〇〇市の住まいの相談窓口
                    </span>
                </Link>

                {/* Desktop Menu */}
                <div className="hidden lg:flex items-center gap-8">
                    {navLinks.map((item) => (
                        <Link
                            key={item.label}
                            to={item.href}
                            className={`text-sm font-medium transition-colors hover:text-earth-600 ${location.pathname === item.href ? 'text-earth-600 font-bold border-b-2 border-earth-600 pb-1' : 'text-earth-800'
                                }`}
                        >
                            {item.label}
                        </Link>
                    ))}

                    <div className="flex items-center gap-4 ml-4">
                        <div className="flex flex-col items-end">
                            <span className="text-[10px] font-bold text-earth-600">お気軽にご相談ください</span>
                            <a href="tel:0120-XXX-XXX" className="text-xl font-bold text-forest-700 flex items-center gap-1">
                                <Phone className="w-5 h-5" />
                                0120-XXX-XXX
                            </a>
                        </div>
                        <Link
                            to="/contact"
                            className="bg-earth-600 hover:bg-earth-800 text-white px-6 py-3 rounded-2xl text-sm font-bold shadow-md hover:shadow-lg transition-all"
                        >
                            無料お見積り
                        </Link>
                    </div>
                </div>

                {/* Mobile Toggle */}
                <button
                    className="lg:hidden text-earth-900 p-2"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    aria-label="メニュー"
                >
                    {isMobileMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
                </button>
            </div>

            {/* Mobile Menu Overlay */}
            {isMobileMenuOpen && (
                <div className="lg:hidden absolute top-full left-0 w-full bg-white border-b border-earth-400/20 shadow-xl py-4 px-6 flex flex-col gap-4">
                    {navLinks.map((item) => (
                        <Link
                            key={item.label}
                            to={item.href}
                            className="text-earth-900 text-lg font-medium py-3 border-b border-earth-100"
                        >
                            {item.label}
                        </Link>
                    ))}
                    <a
                        href="tel:0120-XXX-XXX"
                        className="flex items-center justify-center gap-2 w-full py-4 mt-2 bg-earth-100 text-forest-700 font-bold rounded-xl"
                    >
                        <Phone className="w-5 h-5" />
                        0120-XXX-XXX に電話する
                    </a>
                    <Link
                        to="/contact"
                        className="w-full py-4 bg-earth-600 text-white font-bold rounded-xl text-center shadow-md"
                    >
                        無料お見積り・ご相談
                    </Link>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
