import React from "react";

const Footer = () => {
    return (
        <footer className="bg-black py-20 border-t border-white/10">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
                    <div className="col-span-1 md:col-span-1">
                        <div className="flex items-center gap-2 mb-6">
                            <span className="text-2xl font-bold bg-gradient-to-r from-red-500 to-red-800 bg-clip-text text-transparent uppercase tracking-tighter">
                                Nano Coke
                            </span>
                        </div>
                        <p className="text-white/40 text-sm leading-relaxed">
                            Redefining the essence of refreshment through molecular precision and timeless taste. The future of cola is electric.
                        </p>
                    </div>

                    <div>
                        <h4 className="text-white font-bold uppercase tracking-widest text-xs mb-6">Shop</h4>
                        <ul className="space-y-4 text-sm text-white/50">
                            <li><a href="#" className="hover:text-red-500 transition-colors">Classic Cola</a></li>
                            <li><a href="#" className="hover:text-red-500 transition-colors">Zero Gravity</a></li>
                            <li><a href="#" className="hover:text-red-500 transition-colors">Molecular Citrus</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-white font-bold uppercase tracking-widest text-xs mb-6">Support</h4>
                        <ul className="space-y-4 text-sm text-white/50">
                            <li><a href="#" className="hover:text-red-500 transition-colors">Delivery Info</a></li>
                            <li><a href="#" className="hover:text-red-500 transition-colors">Returns</a></li>
                            <li><a href="#" className="hover:text-red-500 transition-colors">Contact</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-white font-bold uppercase tracking-widest text-xs mb-6">Newsletter</h4>
                        <div className="relative">
                            <input
                                type="email"
                                placeholder="EMAIL ADDRESS"
                                className="w-full bg-white/5 border border-white/10 rounded-full px-6 py-3 text-xs text-white focus:outline-none focus:border-red-500 transition-colors"
                                readOnly
                            />
                            <button className="absolute right-2 top-2 bottom-2 px-4 bg-red-600 rounded-full text-[10px] font-bold uppercase tracking-widest hover:bg-red-700 transition-colors">
                                Join
                            </button>
                        </div>
                    </div>
                </div>

                <div className="mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] text-white/30 uppercase tracking-[0.2em]">
                    <p>© 2026 Nano Coke Corp. All Rights Reserved.</p>
                    <div className="flex gap-8">
                        <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                        <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
