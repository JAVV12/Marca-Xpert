"use client";

import { motion } from "framer-motion";
import { BrainCircuit, Banknote, Settings } from "lucide-react";

const PILLARS = [
    {
        icon: BrainCircuit,
        title: "Mentalidad de Arquitecto",
        desc: "Deja de operar desde el miedo y empieza a diseñar sistemas de crecimiento exponencial.",
    },
    {
        icon: Banknote,
        title: "Ingeniería de Márgenes",
        desc: "Optimización financiera radical para que el beneficio se quede en tu bolsillo, no en los gastos.",
    },
    {
        icon: Settings,
        title: "Sistemas Autónomos",
        desc: "Creación de procesos que funcionan sin tu presencia física o supervisión constante.",
    },
];

export function SolutionPillars() {
    return (
        <section className="px-6 py-16 text-center max-w-4xl mx-auto">
            <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-white text-3xl md:text-5xl font-black mb-12 leading-tight"
            >
                La solución no es trabajar más duro, es <br />
                <span className="text-primary italic glow-text block mt-2">rediseñar tu arquitectura mental</span>.
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 text-left">
                {PILLARS.map((pillar, idx) => (
                    <motion.div
                        key={idx}
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.15 }}
                        className="flex flex-col md:flex-row items-center md:items-start gap-5 p-6 rounded-2xl bg-white/5 border border-primary/20 hover:bg-white/10 transition-colors shadow-lg group"
                    >
                        <div className="flex size-14 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary border border-primary/20 glow-shadow group-hover:scale-110 transition-transform">
                            <pillar.icon className="w-8 h-8 drop-shadow-md" />
                        </div>
                        <div className="text-center md:text-left">
                            <h4 className="text-primary font-bold text-lg mb-1">{pillar.title}</h4>
                            <p className="text-slate-400 text-sm leading-relaxed font-medium">
                                {pillar.desc}
                            </p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
