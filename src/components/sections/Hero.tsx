"use client";

import { motion } from "framer-motion";
import { Play } from "lucide-react";

export function Hero() {
    return (
        <header className="pt-12 pb-16 px-6 text-center max-w-4xl mx-auto">
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-10 inline-block"
            >
                <h2 className="text-white text-xs font-black uppercase tracking-[0.4em] border-b border-primary/30 pb-2">
                    Marca Xpert
                </h2>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.1 }}
                className="max-w-[95%] mx-auto mb-10"
            >
                <p className="text-white text-base md:text-lg font-extrabold uppercase tracking-[0.1em] leading-snug">
                    DEJA DE <span className="text-primary glow-text">EMPUJAR</span> TU AUTO.<br />
                    <span className="text-lg md:text-xl block mt-1 glow-text">MEJOR SÉ EL PILOTO</span>
                </p>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="mb-8 space-y-1"
            >
                <h1 className="flex flex-col items-center">
                    <span className="text-white text-2xl font-bold uppercase tracking-tight block">
                        Cómo liberar tu
                    </span>
                    <span className="text-primary text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-tight block glow-text py-2 whitespace-nowrap w-full text-center">
                        FLUJO DE CAJA
                    </span>
                    <span className="text-white text-xl font-bold uppercase tracking-tight block mt-2">
                        sin quebrar tu negocio
                    </span>
                </h1>
            </motion.div>

            <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="text-white text-base md:text-xl mb-10 leading-relaxed font-medium max-w-2xl mx-auto"
            >
                Si quieres crecer tu negocio y recuperar tu tiempo... Mira esto...
            </motion.p>

            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4 }}
                className="relative w-full shadow-[0_0_40px_rgba(127,255,212,0.15)] aspect-video rounded-2xl overflow-hidden mb-10 vsl-border bg-brand-black cursor-pointer group"
            >
                <div className="absolute inset-0 bg-slate-900/50 flex items-center justify-center z-10 transition-colors group-hover:bg-slate-900/30">
                    <div className="size-20 md:size-24 bg-primary/20 backdrop-blur-md rounded-full flex items-center justify-center border border-primary/40 group-hover:scale-110 group-hover:bg-primary/30 transition-all duration-300 shadow-[0_0_25px_rgba(127,255,212,0.4)]">
                        <Play className="text-primary w-10 h-10 md:w-12 md:h-12 ml-1 fill-primary drop-shadow-md" />
                    </div>
                </div>
                <img
                    alt="VSL Preview"
                    className="w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity duration-300"
                    src="https://images.unsplash.com/photo-1542382257-8024cb862808?q=80&w=2600&auto=format&fit=crop"
                    loading="eager"
                />
            </motion.div>

            <motion.button
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="w-full md:w-auto md:px-14 bg-primary text-brand-black font-black py-5 md:py-6 rounded-xl glow-button uppercase tracking-widest text-sm md:text-lg active:scale-[0.98] hover:bg-white transition-all shadow-[0_0_30px_rgba(127,255,212,0.4)]"
            >
                QUIERO ESCALAR A 7 CIFRAS
            </motion.button>
        </header>
    );
}
