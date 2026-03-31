"use client";

import { motion } from "framer-motion";
import { ShieldCheck } from "lucide-react";

export function OfferAndGuarantee() {
    return (
        <section className="px-6 py-24 bg-primary/5 border-t border-primary/20 relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(127,255,212,0.1),transparent_70%)] pointer-events-none"></div>

            <div className="max-w-4xl mx-auto relative z-10 text-center">
                <motion.h2
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="text-white text-4xl md:text-6xl font-black mb-12 uppercase tracking-tight"
                >
                    Inicia tu Transformación
                </motion.h2>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="p-8 md:p-14 rounded-[2.5rem] bg-brand-black border-2 border-primary/40 text-center relative overflow-hidden mb-12 shadow-[0_30px_60px_-15px_rgba(127,255,212,0.15)]"
                >
                    <div className="absolute -top-20 -right-20 size-64 bg-primary/10 rounded-full blur-[80px]"></div>
                    <div className="absolute -bottom-20 -left-20 size-64 bg-primary/10 rounded-full blur-[80px]"></div>

                    <div className="flex flex-col items-center gap-2 mb-10 relative z-10">
                        <span className="text-slate-400 text-xs md:text-sm font-bold uppercase tracking-widest line-through decoration-primary/50 decoration-2">
                            VALOR REAL $1,991
                        </span>
                        <div className="flex items-start gap-1 py-2">
                            <span className="text-primary text-5xl md:text-7xl font-black glow-text leading-none tracking-tight">
                                HOY $497
                            </span>
                        </div>
                        <span className="text-primary/80 bg-primary/10 px-4 py-1.5 rounded-full text-[10px] md:text-xs font-black uppercase tracking-widest mt-2 border border-primary/20">
                            Ahorro: 1.494 USD
                        </span>
                        <p className="text-slate-500 text-[10px] md:text-xs mt-6 font-bold uppercase tracking-[0.2em]">
                            Pago único o cuotas disponibles
                        </p>
                    </div>

                    <a
                        href="https://pay.hotmart.com/O103789470F"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full relative z-10 bg-primary text-brand-black font-black py-6 md:py-7 rounded-2xl glow-button uppercase tracking-[0.2em] text-lg md:text-xl active:scale-[0.98] hover:bg-white transition-all shadow-xl group block text-center"
                    >
                        <span className="relative z-10">QUIERO ESCALAR</span>
                        <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 rounded-2xl transition-opacity"></div>
                    </a>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                    className="p-8 md:p-10 rounded-3xl bg-brand-black/50 border border-primary/30 text-center relative overflow-hidden shadow-xl max-w-3xl mx-auto backdrop-blur-sm"
                >
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-full bg-primary/5 rounded-full blur-[60px]"></div>

                    <ShieldCheck className="w-16 h-16 md:w-20 md:h-20 text-primary mx-auto mb-6 glow-text drop-shadow-xl" strokeWidth={1} />

                    <h3 className="text-white text-2xl md:text-3xl font-extrabold mb-4 uppercase tracking-tight">
                        GARANTÍA DE CERO RIESGO
                    </h3>
                    <p className="text-slate-300 text-sm md:text-base leading-relaxed font-medium max-w-xl mx-auto">
                        Si aplicas a esta mentoría de 12 semanas y tras culminadas no lograste escalar tu negocio cumpliendo todas tus expectativas iniciales, te devolveré el <span className="text-primary font-bold">100% del dinero</span>. Garantizado por <span className="text-primary font-bold">contrato legal</span>.
                    </p>
                </motion.div>
            </div>

            <div className="mt-24 text-center pb-6 relative z-10">
                <p className="text-slate-500 text-[10px] md:text-xs font-bold uppercase tracking-widest">
                    © {new Date().getFullYear()} Jonathan Toro • Marca Xpert • Todos los derechos reservados
                </p>
            </div>
        </section>
    );
}
