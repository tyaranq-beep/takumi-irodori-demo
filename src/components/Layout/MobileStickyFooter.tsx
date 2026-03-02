import { Phone, Mail, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const MobileStickyFooter = () => {
    return (
        <div className="fixed bottom-0 w-full bg-white border-t border-earth-400/20 shadow-[0_-4px_20px_rgba(44,30,22,0.05)] z-50 lg:hidden flex pb-safe">
            <a
                href="tel:0120-XXX-XXX"
                className="flex-1 flex flex-col items-center justify-center py-3 border-r border-earth-400/20 active:bg-earth-100 transition-colors"
            >
                <Phone className="w-5 h-5 text-forest-700 mb-1" />
                <span className="text-[10px] font-bold text-forest-700">お電話</span>
            </a>
            <a
                href="#"
                className="flex-1 flex flex-col items-center justify-center py-3 border-r border-earth-400/20 active:bg-[#06C755]/10 transition-colors"
            >
                <MessageCircle className="w-5 h-5 text-[#06C755] mb-1" />
                <span className="text-[10px] font-bold text-[#06C755]">LINE相談</span>
            </a>
            <Link
                to="/contact"
                className="flex-1 flex flex-col items-center justify-center py-3 bg-earth-600 active:bg-earth-800 transition-colors"
            >
                <Mail className="w-5 h-5 text-white mb-1" />
                <span className="text-[10px] font-bold text-white">WEB見積り</span>
            </Link>
        </div>
    );
};

export default MobileStickyFooter;
