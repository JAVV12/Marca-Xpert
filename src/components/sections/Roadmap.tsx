"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const PHASES = [
    {
        prefix: "F1",
        title: "Diagnóstico",
        desc: "Auditoría profunda de fugas de capital y eliminación de cuellos de botella operativos que frenan tu flujo.",
    },
    {
        prefix: "F2",
        title: "Estructura",
        desc: "Construcción de los cimientos sólidos y sistemas de delegación para recuperar tu tiempo de inmediato.",
    },
    {
        prefix: "F3",
        title: "Ingeniería",
        desc: "Optimización de la oferta High-Ticket y protocolos de venta para maximizar la rentabilidad de cada cliente.",
    },
    {
        prefix: "F4",
        title: "Escala",
        desc: "Automatización agresiva con IA y marketing de alto impacto para alcanzar las 7 cifras de facturación.",
    },
];

export function Roadmap() {
    return (
        <section className="px-6 py-16 bg-white/[0.02] overflow-hidden">
            <div className="max-w-3xl mx-auto">
                <div className="text-center mb-16 px-6">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="mb-8 flex justify-center"
                    >
                        <div className="relative w-full md:w-3/4 aspect-[4/3] group max-w-lg transition-transform hover:scale-105 duration-500">
                            <Image
                                src="/roadmap-mockup.png?v=2"
                                alt="Visualización de la Metodología Marca Xpert"
                                fill
                                unoptimized={true}
                                className="object-contain drop-shadow-[0_20px_50px_rgba(127,255,212,0.3)]"
                                sizes="200px"
                            />
                        </div>
                    </motion.div>
                    
                    <motion.span
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="text-primary text-[10px] md:text-xs font-black uppercase tracking-[0.3em] px-5 py-2 border border-primary/30 bg-primary/5 rounded-full inline-block shadow-[0_0_15px_rgba(127,255,212,0.15)]"
                    >
                        Metodología Marca Xpert
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-white text-3xl md:text-5xl font-black mt-8 uppercase tracking-tight"
                    >
                        Roadmap de 4 Fases
                    </motion.h2>
                </div>

                <div className="relative ml-4 md:ml-12 border-l-2 border-primary/20 pl-10 md:pl-16 space-y-16 py-4">
                    {PHASES.map((phase, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ delay: 0.1 * idx, type: "spring", stiffness: 100 }}
                            className="relative group"
                        >
                            <div className="absolute -left-[57px] md:-left-[81px] top-0 flex size-12 md:size-16 items-center justify-center rounded-full bg-primary text-brand-black text-sm md:text-xl font-black glow-shadow border-[6px] md:border-[8px] border-brand-black uppercase z-10 group-hover:scale-110 transition-transform duration-300">
                                {phase.prefix}
                            </div>
                            <h4 className="text-primary font-bold uppercase text-sm md:text-lg tracking-widest mb-3 glow-text pt-1 md:pt-3">
                                {phase.title}
                            </h4>
                            <p className="text-slate-300 text-sm md:text-base leading-relaxed font-medium">
                                {phase.desc}
                            </p>
                        </motion.div>
                    ))}

                    <motion.div
                        className="absolute top-0 bottom-0 left-[-2px] w-[2px] bg-primary glow-shadow origin-top"
                        initial={{ scaleY: 0 }}
                        whileInView={{ scaleY: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.5, ease: "circOut" }}
                    />
                </div>
            </div>
        </section>
    );
}
