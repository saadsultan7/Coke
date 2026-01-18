"use client";

import React from "react";
import { motion } from "framer-motion";

const BottleSkeleton: React.FC = () => {
    return (
        <div className="absolute inset-0 flex items-center justify-center bg-black">
            <div className="relative w-full max-w-md h-[80vh] flex items-center justify-center">
                {/* Bottle shape skeleton */}
                <motion.div
                    className="relative w-48 h-[600px]"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                >
                    {/* Bottle cap */}
                    <motion.div
                        className="absolute top-0 left-1/2 -translate-x-1/2 w-16 h-8 bg-gradient-to-b from-white/10 to-white/5 rounded-t-lg"
                        animate={{
                            opacity: [0.3, 0.6, 0.3],
                        }}
                        transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: "easeInOut",
                        }}
                    />
                    
                    {/* Bottle neck */}
                    <motion.div
                        className="absolute top-8 left-1/2 -translate-x-1/2 w-12 h-24 bg-gradient-to-b from-white/5 to-white/10"
                        animate={{
                            opacity: [0.3, 0.6, 0.3],
                        }}
                        transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: 0.1,
                        }}
                    />
                    
                    {/* Bottle body */}
                    <motion.div
                        className="absolute top-32 left-1/2 -translate-x-1/2 w-48 h-[400px] bg-gradient-to-b from-white/10 via-white/5 to-white/10 rounded-[3rem]"
                        animate={{
                            opacity: [0.3, 0.6, 0.3],
                        }}
                        transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: 0.2,
                        }}
                    />
                    
                    {/* Shimmer effect */}
                    <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
                        animate={{
                            x: ["-100%", "200%"],
                        }}
                        transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: "linear",
                        }}
                    />
                </motion.div>
                
                {/* Loading text */}
                <motion.div
                    className="absolute bottom-20 text-center"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                >
                    <motion.p
                        className="text-white/40 text-sm uppercase tracking-widest mb-2"
                        animate={{
                            opacity: [0.4, 1, 0.4],
                        }}
                        transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: "easeInOut",
                        }}
                    >
                        Loading Experience
                    </motion.p>
                    
                    {/* Loading dots */}
                    <div className="flex gap-2 justify-center">
                        {[0, 1, 2].map((i) => (
                            <motion.div
                                key={i}
                                className="w-2 h-2 bg-red-600 rounded-full"
                                animate={{
                                    scale: [1, 1.5, 1],
                                    opacity: [0.3, 1, 0.3],
                                }}
                                transition={{
                                    duration: 1.5,
                                    repeat: Infinity,
                                    delay: i * 0.2,
                                }}
                            />
                        ))}
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default BottleSkeleton;
