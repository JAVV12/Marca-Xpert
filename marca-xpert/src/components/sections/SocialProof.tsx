"use client";

import { motion } from "framer-motion";
import { Play } from "lucide-react";

const PROOFS = [
    { img: "https://images.unsplash.com/photo-1542382257-8024cb862808?q=80&w=600&auto=format&fit=crop" },
    { img: "https://images.unsplash.com/photo-1579546929518-9e396f3cc809?q=80&w=600&auto=format&fit=crop" },
    { img: "https://images.unsplash.com/photo-1555421689-d68471e189f2?q=80&w=600&auto=format&fit=crop" },
    { img: "https://images.unsplash.com/photo-1507238692062-7e9b08d2ae47?q=80&w=600&auto=format&fit=crop" },
];

export function SocialProof() {
    return (
        <section className="py-20 bg-brand-black overflow-hidden relative">
            <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-primary/5 to-transparent pointer-events-none"></div>

            <div className="text-center mb-12 px-6 relative z-10">
                <motion.h2
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-primary text-3xl md:text-5xl font-black tracking-tight mb-4 uppercase drop-shadow-md glow-text"
                >
                    RESULTADOS REALES
                </motion.h2>
                <div className="h-1 w-24 bg-primary mx-auto rounded-full opacity-40 shadow-[0_0_10px_rgba(127,255,212,0.6)]"></div>
            </div>

            <div className="relative w-full max-w-[1400px] mx-auto z-10">
                <div className="carousel-track px-6 pb-10 hide-scrollbar overflow-x-auto flex gap-6 md:gap-8 snap-x snap-mandatory">
                    {PROOFS.map((proof, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: "0px -50px" }}
                            transition={{ delay: idx * 0.15 }}
                            className="w-[280px] md:w-[320px] lg:w-[350px] flex-shrink-0 snap-center"
                        >
                            <div className="vsl-border rounded-3xl overflow-hidden aspect-[9/16] relative bg-slate-900 group mockup-frame cursor-pointer transition-transform hover:-translate-y-2 duration-300">
                                <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-brand-black/30 w-full h-full to-transparent z-10 opacity-90 group-hover:opacity-80 transition-opacity"></div>

                                <div className="absolute inset-0 flex items-center justify-center z-20 transition-transform duration-500 scale-95 group-hover:scale-100">
                                    <div className="size-16 md:size-20 bg-primary/20 backdrop-blur-md rounded-full flex items-center justify-center border border-primary/40 group-hover:scale-110 group-hover:bg-primary/30 transition-all duration-300 shadow-[0_0_20px_rgba(127,255,212,0.3)]">
                                        <Play className="text-primary w-8 h-8 md:w-10 md:h-10 ml-1 fill-primary" />
                                    </div>
                                </div>

                                <img
                                    alt={`Social Proof ${idx + 1}`}
                                    className="w-full h-full object-cover grayscale-[0.2] opacity-70 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                                    src={proof.img}
                                    loading="lazy"
                                />

                                <div className="absolute bottom-6 left-6 right-6 z-20 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                                    <p className="text-primary font-black text-[10px] md:text-xs uppercase tracking-[0.2em] mb-2 glow-text">
                                        CEO OSUNO - Esteban Valencia
                                    </p>
                                    <p className="text-white text-lg md:text-xl font-bold leading-tight drop-shadow-xl">
                                        Marca 100% desarrollada con Marca Xpert
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            <div className="flex justify-center gap-2 mt-4 relative z-10">
                <div className="size-2 rounded-full bg-primary glow-shadow w-6 transition-all duration-300"></div>
                <div className="size-2 rounded-full bg-primary/30"></div>
                <div className="size-2 rounded-full bg-primary/30"></div>
                <div className="size-2 rounded-full bg-primary/30"></div>
            </div>
            <div className="text-center mt-6 px-6 relative z-10">
                <p className="text-slate-400 text-sm md:text-base font-medium italic tracking-widest uppercase">
                    Desliza para ver más casos de éxito —
                </p>
            </div>
        </section>
    );
}
