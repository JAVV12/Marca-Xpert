"use client";

import { motion } from "framer-motion";

const PAIN_POINTS = [
    {
        prefix: "Facturo miles, pero mi ",
        highlight: "cuenta personal amanece en cero",
        desc: " todos los meses... ¿A dónde se va el dinero?",
    },
    {
        prefix: "Si apago el celular este domingo, mi ",
        highlight: "negocio colapsa",
        desc: ". Soy esclavo de mis propios clientes.",
    },
    {
        prefix: "Siento que estoy ",
        highlight: "apagando incendios",
        desc: " 24/7 en lugar de liderar. El estrés me está consumiendo.",
    },
];

export function PainPoints() {
    return (
        <section className="px-6 py-16 bg-white/[0.02] border-y border-white/5 relative">
            <div className="max-w-3xl mx-auto relative z-10">
                <div className="text-center mb-12">
                    <h2 className="text-white text-3xl md:text-4xl font-black tracking-tight mb-4 uppercase leading-tight">
                        La cruda realidad que nadie te dice...
                    </h2>
                    <div className="h-1 w-20 bg-primary mx-auto rounded-full shadow-[0_0_10px_rgba(127,255,212,0.5)]"></div>
                </div>

                <div className="space-y-6">
                    {PAIN_POINTS.map((point, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 15 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ delay: index * 0.15 }}
                            className="p-6 md:p-8 rounded-2xl bg-primary/5 border border-primary/10 hover:border-primary/30 transition-colors group italic"
                        >
                            <p className="text-slate-300 md:text-lg leading-relaxed">
                                "{point.prefix}<strong className="text-primary font-bold group-hover:glow-text transition-all">{point.highlight}</strong>{point.desc}"
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
