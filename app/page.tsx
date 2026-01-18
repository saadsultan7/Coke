"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProductBottleScroll from "@/components/ProductBottleScroll";
import ProductTextOverlays from "@/components/ProductTextOverlays";
import { products } from "@/data/products";

export default function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const product = products[currentIndex];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentIndex]);

  return (
    <main className="relative min-h-screen bg-black">
      <Navbar />

      <AnimatePresence mode="wait">
        <motion.div
          key={product.id}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
        >
          {/* Hero Scrollytelling Section */}
          <section className="relative">
            <ProductBottleScroll product={product} />
            <ProductTextOverlays product={product} />
          </section>

          {/* Details Section */}
          <section className="relative py-16 sm:py-24 md:py-32 bg-black z-20">
            <div className="container mx-auto px-4 sm:px-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                >
                  <h3 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tighter mb-6 sm:mb-8 text-white">
                    {product.detailsSection.title}
                  </h3>
                  <p className="text-base sm:text-lg text-white/50 leading-relaxed mb-8 sm:mb-12">
                    {product.detailsSection.description}
                  </p>

                  <div className="grid grid-cols-3 gap-4 sm:gap-8">
                    {product.stats.map((stat, i) => (
                      <div key={i}>
                        <p className="text-[8px] sm:text-[10px] uppercase tracking-widest text-white/30 mb-1">{stat.label}</p>
                        <p className="text-lg sm:text-xl font-bold text-red-500">{stat.val}</p>
                      </div>
                    ))}
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                  className="bg-white/5 rounded-3xl p-8 sm:p-12 aspect-square flex items-center justify-center border border-white/10"
                >
                  <div className="text-center">
                    <p className="text-4xl sm:text-5xl md:text-6xl font-black text-white/10 italic">NANO</p>
                    <p className="text-5xl sm:text-6xl md:text-8xl font-black text-red-600 -mt-4 sm:-mt-6 md:-mt-8 tracking-tighter">COKE</p>
                  </div>
                </motion.div>
              </div>
            </div>
          </section>

          {/* Freshness section */}
          <section className="py-16 sm:py-24 md:py-32 bg-white/5 border-y border-white/10 overflow-hidden">
            <div className="container mx-auto px-4 sm:px-6 text-center">
              <motion.h3
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                className="text-4xl sm:text-5xl md:text-7xl lg:text-9xl font-black uppercase tracking-tighter mb-8 sm:mb-12 opacity-20 pointer-events-none"
              >
                FRESHNESS LOCK
              </motion.h3>
              <div className="max-w-2xl mx-auto">
                <h4 className="text-2xl sm:text-3xl font-bold text-white mb-4 sm:mb-6">{product.freshnessSection.title}</h4>
                <p className="text-sm sm:text-base text-white/40 leading-relaxed">
                  {product.freshnessSection.description}
                </p>
              </div>
            </div>
          </section>

          {/* Commerce Section */}
          <section className="py-16 sm:py-24 md:py-32 bg-black z-20">
            <div className="container mx-auto px-4 sm:px-6">
              <div className="max-w-4xl mx-auto bg-gradient-to-br from-red-600/20 to-transparent p-6 sm:p-10 md:p-20 rounded-2xl sm:rounded-[3rem] border border-red-600/30">
                <div className="flex flex-col md:flex-row justify-between items-center gap-8 sm:gap-12">
                  <div className="w-full md:w-auto">
                    <h3 className="text-3xl sm:text-4xl md:text-5xl font-black text-white uppercase tracking-tighter mb-2">Buy {product.name}</h3>
                    <p className="text-white/50 uppercase tracking-widest text-xs mb-6 sm:mb-8">{product.buyNowSection.unit}</p>

                    <ul className="space-y-3 sm:space-y-4 mb-8 sm:mb-12">
                      {product.buyNowSection.processingParams.map((param, i) => (
                        <li key={i} className="flex items-center gap-3 text-xs sm:text-sm text-white/80">
                          <span className="w-2 h-2 bg-red-600 rounded-full flex-shrink-0" />
                          {param}
                        </li>
                      ))}
                    </ul>

                    <p className="text-[9px] sm:text-[10px] text-white/40 uppercase tracking-widest max-w-xs">{product.buyNowSection.deliveryPromise}</p>
                  </div>

                  <div className="text-center md:text-right w-full md:w-auto">
                    <p className="text-[9px] sm:text-[10px] uppercase tracking-widest text-white/30 mb-2">Price per unit</p>
                    <p className="text-5xl sm:text-6xl md:text-7xl font-black text-white mb-6 sm:mb-8">{product.buyNowSection.price}</p>
                    <button className="w-full md:w-auto px-8 sm:px-12 py-4 sm:py-5 bg-white text-black font-black uppercase tracking-widest text-xs sm:text-sm rounded-full hover:bg-red-500 hover:text-white transition-all transform hover:scale-105 active:scale-95">
                      Check-out
                    </button>
                    <p className="mt-4 sm:mt-6 text-[9px] sm:text-[10px] text-white/30 uppercase tracking-widest">{product.buyNowSection.returnPolicy}</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Next Flavor CTA */}
          <section className="py-20 sm:py-32 md:py-40 bg-black text-center overflow-hidden">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="inline-block cursor-pointer group px-4"
            >
              <p className="text-red-600 font-bold uppercase tracking-[0.3em] sm:tracking-[0.5em] text-[10px] sm:text-xs mb-6 sm:mb-8">Discover More</p>
              <h3 className="text-5xl sm:text-6xl md:text-7xl lg:text-[10vw] font-black uppercase text-white tracking-tighter leading-[0.8] mb-4 transition-transform group-hover:italic">
                Next Flavor
              </h3>
            </motion.div>
          </section>
        </motion.div>
      </AnimatePresence>

      <Footer />
    </main>
  );
}
