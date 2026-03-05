"use client";

import { motion } from "framer-motion";
import { Gem, LineChart, Users } from "lucide-react";

const BONUSES = [
    {
        icon: Gem,
        title: "MASTERCLASS 'IDENTIDAD DE 7 CIFRAS'",
        val: "Valor: $297 — GRATIS",
        desc: "El método Néxor aplicado en esta mentoría, destruirá tu identidad limitante, esa responsable de tenerte en esta situación de hoy. Construiremos tu nueva identidad millonaria en este camino de 90 días.",
    },
    {
        icon: LineChart,
        title: "Auditoría 90/10",
        val: "VALORADO EN $500",
        desc: "Análisis quirúrgico para identificar el 10% de tus actividades que generan el 90% de tus beneficios.",
    },
    {
        icon: Users,
        title: "Club de las Marcas",
        val: "VALORADO EN $2,500",
        desc: "Acceso a nuestra red privada de dueños de negocio facturando sobre las 6 y 7 cifras.",
    },
];

export function Bonuses() {
    return (
        <section className="px-6 py-20 bg-brand-black border-t border-white/5 relative">
            <div className="absolute top-0 inset-x-0 h-[100px] bg-gradient-to-b from-primary/5 to-transparent opacity-50 pointer-events-none"></div>

            <div className="max-w-4xl mx-auto relative z-10">
                <motion.h3
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-primary text-2xl md:text-3xl font-black uppercase tracking-tight mb-12 text-center glow-text"
                >
                    Bonos de Acción Rápida (Exclusivos)
                </motion.h3>

                <div className="space-y-6 md:space-y-8">
                    {BONUSES.map((bn, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, x: idx % 2 === 0 ? -30 : 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ delay: idx * 0.1 }}
                            className={`p-6 md:p-8 rounded-[2rem] bg-gradient-to-br from-white/[0.08] to-transparent border border-white/10 hover:border-primary/40 hover:from-primary/[0.05] transition-all group shadow-xl ${idx === 0 ? 'border-primary/30 from-primary/[0.08]' : ''}`}
                        >
                            <div className="flex justify-between items-start mb-6">
                                <span className={`text-[10px] md:text-xs font-black px-4 py-1.5 rounded-full uppercase tracking-widest shadow-md ${idx === 0 ? 'bg-primary text-brand-black glow-shadow' : 'bg-white/10 text-white'}`}>
                                    {bn.val}
                                </span>
                                <bn.icon className={`w-8 h-8 md:w-10 md:h-10 ${idx === 0 ? 'text-primary fill-primary/20' : 'text-slate-400 group-hover:text-primary transition-colors'}`} strokeWidth={1.5} />
                            </div>
                            <h4 className={`font-bold text-xl md:text-2xl mb-3 tracking-tight uppercase ${idx === 0 ? 'text-primary' : 'text-white'}`}>
                                {bn.title}
                            </h4>
                            <p className="text-slate-300 text-sm md:text-base leading-relaxed font-medium max-w-2xl">
                                {bn.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
