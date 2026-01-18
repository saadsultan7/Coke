"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Product } from "@/data/products";

interface ProductTextOverlaysProps {
    product: Product;
}

const ProductTextOverlays: React.FC<ProductTextOverlaysProps> = ({ product }) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"],
    });

    const opacity1 = useTransform(scrollYProgress, [0, 0.15, 0.2], [1, 1, 0]);
    const y1 = useTransform(scrollYProgress, [0, 0.15, 0.2], [0, 0, -100]);

    const opacity2 = useTransform(scrollYProgress, [0.25, 0.35, 0.45, 0.5], [0, 1, 1, 0]);
    const y2 = useTransform(scrollYProgress, [0.25, 0.35, 0.45, 0.5], [100, 0, 0, -100]);

    const opacity3 = useTransform(scrollYProgress, [0.55, 0.65, 0.75, 0.8], [0, 1, 1, 0]);
    const y3 = useTransform(scrollYProgress, [0.55, 0.65, 0.75, 0.8], [100, 0, 0, -100]);

    const opacity4 = useTransform(scrollYProgress, [0.85, 0.95, 1], [0, 1, 1]);
    const y4 = useTransform(scrollYProgress, [0.85, 0.95, 1], [100, 0, 0]);

    const sections = [
        { data: product.section1, opacity: opacity1, y: y1 },
        { data: product.section2, opacity: opacity2, y: y2 },
        { data: product.section3, opacity: opacity3, y: y3 },
        { data: product.section4, opacity: opacity4, y: y4 },
    ];

    return (
        <div ref={containerRef} className="absolute inset-0 pointer-events-none z-10">
            <div className="h-[500vh]">
                {sections.map((section, index) => (
                    <div key={index} className="sticky top-0 h-screen flex flex-col items-center justify-center px-4 sm:px-6 text-center">
                        <motion.div
                            style={{ opacity: section.opacity, y: section.y }}
                            className="max-w-4xl"
                        >
                            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-black uppercase tracking-tighter mb-2 sm:mb-4 text-white drop-shadow-2xl">
                                {section.data.title}
                            </h2>
                            <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-medium text-white/60 tracking-tight px-4">
                                {section.data.subtitle}
                            </p>
                        </motion.div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProductTextOverlays;
