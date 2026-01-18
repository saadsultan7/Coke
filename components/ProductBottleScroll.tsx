"use client";

import React, { useRef, useEffect, useState } from "react";
import { useScroll, useMotionValueEvent } from "framer-motion";
import { Product } from "@/data/products";
import BottleSkeleton from "./BottleSkeleton";

interface ProductBottleScrollProps {
    product: Product;
}

const ProductBottleScroll: React.FC<ProductBottleScrollProps> = ({ product }) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const [images, setImages] = useState<HTMLImageElement[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [loadProgress, setLoadProgress] = useState(0);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"],
    });

    // Preload images
    useEffect(() => {
        setIsLoading(true);
        setLoadProgress(0);
        const loadedImages: HTMLImageElement[] = [];
        let loadedCount = 0;
        const totalFrames = 240;

        for (let i = 1; i <= totalFrames; i++) {
            const img = new Image();
            // Pad frame number to 3 digits (e.g., 001, 042, 240)
            const paddedFrame = i.toString().padStart(3, '0');
            img.src = `${product.folderPath}/ezgif-frame-${paddedFrame}.jpg`;

            img.onload = () => {
                loadedCount++;
                setLoadProgress((loadedCount / totalFrames) * 100);
                if (loadedCount === totalFrames) {
                    setImages(loadedImages);
                    // Small delay to ensure smooth transition
                    setTimeout(() => setIsLoading(false), 300);
                }
            };
            img.onerror = () => {
                console.error(`Failed to load frame ${i} at ${img.src}`);
                loadedCount++;
                setLoadProgress((loadedCount / totalFrames) * 100);
                if (loadedCount === totalFrames) {
                    setImages(loadedImages);
                    setTimeout(() => setIsLoading(false), 300);
                }
            }
            loadedImages[i - 1] = img;
        }
    }, [product.folderPath]);

    const drawImage = (index: number) => {
        if (images.length > 0 && canvasRef.current) {
            const canvas = canvasRef.current;
            const context = canvas.getContext("2d");
            if (context) {
                const img = images[index];
                if (!img) return;

                // Clear canvas
                context.clearRect(0, 0, canvas.width, canvas.height);

                // Draw image with "contain" fit
                const imgRatio = img.width / img.height;
                const canvasRatio = canvas.width / canvas.height;
                let drawWidth, drawHeight, x, y;

                if (imgRatio > canvasRatio) {
                    drawWidth = canvas.width;
                    drawHeight = canvas.width / imgRatio;
                    x = 0;
                    y = (canvas.height - drawHeight) / 2;
                } else {
                    drawHeight = canvas.height;
                    drawWidth = canvas.height * imgRatio;
                    x = (canvas.width - drawWidth) / 2;
                    y = 0;
                }

                context.drawImage(img, x, y, drawWidth, drawHeight);
            }
        }
    };

    // Update canvas on scroll
    useMotionValueEvent(scrollYProgress, "change", (latest) => {
        const frameIndex = Math.min(239, Math.floor(latest * 240));
        requestAnimationFrame(() => drawImage(frameIndex));
    });

    // Initial draw and resize handler
    useEffect(() => {
        const handleResize = () => {
            if (canvasRef.current) {
                canvasRef.current.width = window.innerWidth;
                canvasRef.current.height = window.innerHeight;
                // Redraw current frame
                const currentProgress = scrollYProgress.get();
                const frameIndex = Math.min(239, Math.floor(currentProgress * 240));
                drawImage(frameIndex);
            }
        };

        window.addEventListener("resize", handleResize);
        handleResize(); // Set initial size

        return () => window.removeEventListener("resize", handleResize);
    }, [images, scrollYProgress]);

    return (
        <div ref={containerRef} className="relative h-[500vh]">
            <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden">
                {isLoading && <BottleSkeleton />}
                <canvas
                    ref={canvasRef}
                    className={`w-full h-full object-contain pointer-events-none transition-opacity duration-500 ${
                        isLoading ? 'opacity-0' : 'opacity-100'
                    }`}
                />
            </div>
        </div>
    );
};

export default ProductBottleScroll;
