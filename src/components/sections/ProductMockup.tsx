"use client";

import { motion } from "framer-motion";
import { Check, BellRing } from "lucide-react";

export function ProductMockup() {
    return (
        <section className="relative px-6 py-20 overflow-hidden product-gradient">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[200%] h-full bg-[radial-gradient(circle_at_center,rgba(127,255,212,0.08)_0%,transparent_70%)] pointer-events-none"></div>

            <div className="relative z-10 text-center mb-12">
                <h2 className="text-primary text-3xl md:text-5xl font-extrabold mb-4 leading-tight uppercase glow-text tracking-tight">
                    POTENCIA TU NEGOCIO X10
                </h2>
                <h3 className="text-slate-300 text-base md:text-lg font-medium leading-tight italic max-w-xl mx-auto">
                    Aplicando MARCA XPERT a tu negocio
                </h3>
            </div>

            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8 }}
                className="relative mx-auto max-w-[320px] md:max-w-md"
            >
                <div className="mockup-frame rounded-[2rem] p-2 md:p-3 shadow-2xl relative z-20">
                    <div className="bg-brand-black rounded-3xl overflow-hidden border border-white/5 aspect-[3/4] relative flex flex-col">

                        <div className="h-10 border-b border-white/10 flex items-center justify-between px-4 bg-white/5">
                            <div className="flex gap-1.5">
                                <div className="size-2 md:size-2.5 rounded-full bg-primary/40"></div>
                                <div className="size-2 md:size-2.5 rounded-full bg-primary/30"></div>
                                <div className="size-2 md:size-2.5 rounded-full bg-primary/20"></div>
                            </div>
                            <div className="text-[8px] md:text-[10px] text-white/40 font-bold uppercase tracking-widest">
                                Master Dashboard
                            </div>
                        </div>

                        <div className="p-4 md:p-6 space-y-4 md:space-y-6 flex-grow">
                            <div className="grid grid-cols-2 gap-3 md:gap-4">
                                <div className="h-20 rounded-xl bg-primary/10 border border-primary/20 p-3 md:p-4 flex flex-col justify-end group hover:bg-primary/20 transition-colors">
                                    <div className="text-[10px] md:text-xs text-primary/80 font-bold uppercase mb-1">
                                        KPI Ventas
                                    </div>
                                    <div className="text-xl md:text-2xl font-black text-primary glow-text">
                                        +24.5%
                                    </div>
                                </div>

                                <div className="h-20 rounded-xl bg-white/5 border border-white/10 p-3 md:p-4 flex flex-col justify-end">
                                    <div className="text-[10px] md:text-xs text-white/40 font-bold uppercase mb-1">
                                        Eficiencia
                                    </div>
                                    <div className="text-xl md:text-2xl font-black text-white">
                                        92%
                                    </div>
                                </div>
                            </div>

                            <div className="rounded-xl bg-white/5 border border-white/10 p-4 md:p-5">
                                <div className="flex justify-between items-center mb-3">
                                    <div className="text-[10px] md:text-xs text-white/60 font-bold tracking-widest uppercase">
                                        PROGRESO
                                    </div>
                                    <div className="text-sm text-primary font-black drop-shadow-md">
                                        65%
                                    </div>
                                </div>

                                <div className="w-full h-2 md:h-2.5 bg-white/10 rounded-full overflow-hidden mb-6">
                                    <motion.div
                                        initial={{ width: 0 }}
                                        whileInView={{ width: "65%" }}
                                        viewport={{ once: true }}
                                        transition={{ delay: 0.5, duration: 1.5, ease: "easeOut" }}
                                        className="h-full bg-primary glow-shadow"
                                    />
                                </div>

                                <div className="space-y-3">
                                    {[24, 32].map((w, i) => (
                                        <motion.div
                                            key={i}
                                            initial={{ opacity: 0, x: -10 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: 0.8 + i * 0.2 }}
                                            className="flex items-center gap-3"
                                        >
                                            <div className="size-4 md:size-5 rounded flex-shrink-0 bg-primary/20 flex items-center justify-center">
                                                <Check className="w-3 h-3 text-primary" strokeWidth={3} />
                                            </div>
                                            <div className={`h-2.5 w-${w} bg-white/10 rounded-full`}></div>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
                    whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.6, type: "spring", bounce: 0.5 }}
                    className="absolute -bottom-8 -right-6 md:-bottom-12 md:-right-10 w-32 md:w-36 aspect-[9/19] mockup-frame rounded-2xl p-1.5 shadow-2xl z-30"
                >
                    <div className="bg-brand-black rounded-xl overflow-hidden h-full flex flex-col items-center justify-center p-3">
                        <div className="size-10 md:size-12 rounded-full bg-primary/20 flex items-center justify-center mb-3 shadow-[0_0_15px_rgba(127,255,212,0.3)]">
                            <BellRing className="text-primary w-5 h-5 md:w-6 md:h-6" />
                        </div>
                        <div className="h-1.5 w-16 bg-white/20 rounded-full mb-2"></div>
                        <div className="h-1.5 w-10 bg-white/10 rounded-full"></div>
                    </div>
                </motion.div>
            </motion.div>
        </section>
    );
}
