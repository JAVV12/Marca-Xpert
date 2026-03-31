"use client";

import { motion } from "framer-motion";
import { Award, TrendingUp, Briefcase } from "lucide-react";
import Image from "next/image";

export function MentorAuthority() {
    return (
        <section className="px-6 py-20 bg-brand-black border-y border-white/5 overflow-hidden">
            <div className="max-w-4xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-primary text-2xl md:text-3xl font-black uppercase tracking-[0.2em] glow-text drop-shadow-xl">
                        EL ESTRATEGA DETRÁS DEL CAMBIO
                    </h2>
                    <div className="h-1 w-24 bg-primary mx-auto mt-6 rounded-full opacity-40"></div>
                </div>

                <div className="flex flex-col md:flex-row items-center gap-10 md:gap-14">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="relative group shrink-0"
                    >
                        <div className="absolute inset-0 bg-primary/30 rounded-full blur-[50px] transition-all group-hover:blur-[70px] duration-500"></div>

                        <div className="relative size-64 md:size-80 rounded-full overflow-hidden border-[5px] border-primary/30 shadow-[0_0_40px_rgba(127,255,212,0.3)] bg-white/5">
                            <Image
                                src="/mentor.jpg?v=2"
                                alt="Jonathan Toro - Mentor de Marca Xpert"
                                fill
                                unoptimized={true}
                                className="object-cover object-top grayscale-[0.2] hover:grayscale-0 transition-all duration-700"
                                sizes="(max-width: 768px) 100vw, 50vw"
                            />
                        </div>
                        <div className="absolute -bottom-2 -right-2 md:-bottom-4 md:-right-4 bg-primary text-brand-black p-3 md:p-4 rounded-full shadow-[0_0_20px_rgba(127,255,212,0.5)] border-2 border-brand-black">
                            <Award className="w-8 h-8 md:w-10 md:h-10 fill-brand-black text-primary" strokeWidth={1} />
                        </div>
                    </motion.div>

                    <div className="text-center md:text-left space-y-6">
                        <div>
                            <h3 className="text-primary text-3xl md:text-4xl font-extrabold tracking-tight uppercase">
                                Jonathan Toro
                            </h3>
                            <span className="block text-lg md:text-xl font-medium text-white/80 mt-2 tracking-wide">
                                (Mentor de Negocios Pyme)
                            </span>
                        </div>

                        <div className="text-white text-sm md:text-base leading-relaxed font-normal space-y-4 max-w-lg">
                            <p>
                                Reconocido por su capacidad implacable para rescatar negocios estancados, Jonathan ha dedicado su carrera a transformar estructuras empresariales frágiles en sistemas de alta rentabilidad.
                            </p>
                            <p>
                                Como <span className="text-primary font-bold">arquitecto de imperios</span>, su enfoque no se limita a la gestión tradicional; utiliza la <span className="text-primary font-bold">Ingeniería empresarial</span> avanzada para rediseñar cada proceso desde la raíz.
                            </p>
                            <p>
                                A través de la creación de un <span className="text-primary font-bold">BRANDING AUTÉNTICO</span> y la implementación quirúrgica de su exclusivo <span className="text-primary font-bold">Método NÉXOR</span>, Jonathan permite a los dueños de negocio <span className="text-primary font-bold">multiplicar por 10 los resultados</span>, liberando el flujo de caja y, lo más importante, su libertad personal.
                            </p>
                        </div>

                        <div className="pt-6 flex flex-wrap justify-center md:justify-start gap-4">
                            <div className="flex items-center gap-2 px-5 py-2.5 bg-white/5 rounded-full border border-white/10 hover:bg-white/10 transition-colors">
                                <TrendingUp className="text-primary w-5 h-5 flex-shrink-0" />
                                <span className="text-xs font-black uppercase tracking-widest text-white">Ingeniería</span>
                            </div>
                            <div className="flex items-center gap-2 px-5 py-2.5 bg-white/5 rounded-full border border-white/10 hover:bg-white/10 transition-colors">
                                <Briefcase className="text-primary w-5 h-5 flex-shrink-0" />
                                <span className="text-xs font-black uppercase tracking-widest text-white">Método Néxor</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
