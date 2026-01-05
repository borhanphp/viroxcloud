"use client";

import { motion } from "framer-motion";
import { ArrowRight, CheckCircle, LucideIcon, XCircle } from "lucide-react";
import Link from "next/link";

interface Feature {
    title: string;
    description: string;
    icon: LucideIcon;
}

interface Benefit {
    title: string;
    description: string;
}

interface ModulePageProps {
    title: string;
    description: string;
    icon: LucideIcon;
    gradient: string;
    features: Feature[];
    painPoints: string[];
    benefits: Benefit[];
}

export default function ModulePage({
    title,
    description,
    icon: Icon,
    gradient,
    features,
    painPoints,
    benefits,
}: ModulePageProps) {
    return (
        <div className="min-h-screen bg-slate-50 dark:bg-[#0B0F19]">
            {/* Hero Section */}
            <section className="relative pt-32 pb-20 overflow-hidden">
                <div className="absolute inset-0 pointer-events-none">
                    <div className={`absolute top-[-20%] right-[-10%] w-[600px] h-[600px] ${gradient} opacity-20 rounded-full blur-[120px]`} />
                    <div className={`absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] ${gradient} opacity-10 rounded-full blur-[100px]`} />
                </div>

                <div className="container mx-auto px-6 relative z-10 text-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className={`w-20 h-20 mx-auto ${gradient} rounded-2xl flex items-center justify-center text-white shadow-xl mb-8`}
                    >
                        <Icon size={40} />
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-6xl font-extrabold mb-6 text-slate-900 dark:text-white tracking-tight"
                    >
                        {title}
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto mb-10"
                    >
                        {description}
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="flex flex-col sm:flex-row gap-4 justify-center"
                    >
                        <Link
                            href="#contact"
                            className="px-8 py-4 bg-indigo-600 text-white font-bold rounded-xl hover:bg-indigo-700 transition-all shadow-lg hover:shadow-indigo-500/30 flex items-center justify-center gap-2"
                        >
                            Get Started Now <ArrowRight size={20} />
                        </Link>
                    </motion.div>
                </div>
            </section>

            {/* Pain Points vs Solutions */}
            <section className="py-20 bg-white dark:bg-slate-900/50">
                <div className="container mx-auto px-6">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-3xl font-bold mb-8 text-slate-900 dark:text-white">
                                Stop Struggling with...
                            </h2>
                            <div className="space-y-6">
                                {painPoints.map((point, idx) => (
                                    <motion.div
                                        key={idx}
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: idx * 0.1 }}
                                        className="flex items-start gap-4 p-4 bg-red-50 dark:bg-red-900/10 rounded-xl border border-red-100 dark:border-red-900/20"
                                    >
                                        <XCircle className="text-red-500 shrink-0 mt-1" />
                                        <p className="text-slate-700 dark:text-slate-300">{point}</p>
                                    </motion.div>
                                ))}
                            </div>
                        </div>

                        <div className="relative">
                            <div className={`absolute inset-0 ${gradient} opacity-10 blur-3xl -z-10`} />
                            <div className="glass-card p-8 rounded-2xl border border-white/20">
                                <h3 className="text-2xl font-bold mb-6 text-slate-900 dark:text-white">
                                    The ViroxCloud Advantage
                                </h3>
                                <div className="space-y-6">
                                    {benefits.map((benefit, idx) => (
                                        <div key={idx} className="flex gap-4">
                                            <CheckCircle className="text-green-500 shrink-0 mt-1" />
                                            <div>
                                                <h4 className="font-bold text-slate-900 dark:text-white">{benefit.title}</h4>
                                                <p className="text-sm text-slate-500 dark:text-slate-400">{benefit.description}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Features Grid */}
            <section className="py-24">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold mb-4 text-slate-900 dark:text-white">Key Features</h2>
                        <p className="text-slate-500 dark:text-slate-400">Everything you need to excel.</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {features.map((feature, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className="bg-white dark:bg-slate-900 p-8 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-800 hover:border-indigo-500/50 transition-colors group"
                            >
                                <div className={`w-12 h-12 rounded-xl ${gradient} flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform`}>
                                    <feature.icon size={24} />
                                </div>
                                <h3 className="text-xl font-bold mb-3 text-slate-900 dark:text-white">{feature.title}</h3>
                                <p className="text-slate-500 dark:text-slate-400 leading-relaxed">
                                    {feature.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-20 bg-indigo-900 text-white text-center">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">Need a custom {title} solution?</h2>
                    <p className="text-indigo-200 mb-8 max-w-xl mx-auto">
                        Our team of engineers can tailor ViroxCloud to fit your exact business workflows. Let's discuss your requirements.
                    </p>
                    <Link
                        href="/contact"
                        className="inline-block px-8 py-4 bg-white text-indigo-900 font-bold rounded-xl hover:bg-indigo-50 transition-colors"
                    >
                        Speak to a Consultant
                    </Link>
                </div>
            </section>
        </div>
    );
}
