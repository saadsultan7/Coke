"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const Navbar = () => {
    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            className="fixed top-0 left-0 right-0 z-50 py-4 sm:py-6 bg-transparent"
        >
            <div className="container mx-auto px-4 sm:px-6 flex justify-between items-center">
                <div className="flex items-center gap-1.5 sm:gap-2">
                    <svg
                        width="32"
                        height="32"
                        viewBox="0 0 40 40"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="text-red-600 sm:w-10 sm:h-10"
                    >
                        <path
                            d="M20 5L15 15H25L20 5ZM20 35L25 25H15L20 35Z"
                            fill="currentColor"
                            fillOpacity="0.8"
                        />
                        <path
                            d="M10 20L20 15V25L10 20ZM30 20L20 25V15L30 20Z"
                            fill="currentColor"
                        />
                        <circle cx="20" cy="20" r="4" fill="white" />
                    </svg>
                    <span className="text-lg sm:text-2xl font-bold bg-gradient-to-r from-red-500 to-red-800 bg-clip-text text-transparent uppercase tracking-tighter">
                        Nano Coke
                    </span>
                </div>

                <div className="hidden md:flex items-center gap-8 text-sm font-medium uppercase tracking-widest text-white/70">
                    <a href="#" className="hover:text-white transition-colors">Products</a>
                    <a href="#" className="hover:text-white transition-colors">Vision</a>
                    <a href="#" className="hover:text-white transition-colors">Lab</a>
                </div>

                <button className="px-4 sm:px-6 py-2 bg-red-600 hover:bg-red-700 text-white text-[10px] sm:text-xs font-bold uppercase tracking-widest rounded-full transition-all hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(220,38,38,0.4)]">
                    Order Now
                </button>
            </div>
        </motion.nav>
    );
};

export default Navbar;
