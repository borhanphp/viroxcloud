"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, CheckCircle } from "lucide-react";

export default function Hero() {
    return (
        <section className="relative min-h-screen flex items-center pt-28 pb-20 overflow-hidden bg-slate-50 dark:bg-[#0B0F19]">
            {/* Dynamic Background */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-[-20%] right-[-10%] w-[800px] h-[800px] bg-indigo-500/10 rounded-full blur-[120px] animate-pulse" style={{ animationDuration: '4s' }} />
                <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-sky-500/10 rounded-full blur-[100px]" />
            </div>

            <div className="container mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-16 items-center">
                {/* Text Content */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 text-indigo-600 dark:text-indigo-400 text-sm font-semibold mb-8 shadow-sm">
                        <span className="relative flex h-2.5 w-2.5">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-500 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-indigo-600"></span>
                        </span>
                        Trusted by Fortune 500 Companies
                    </div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-5xl md:text-7xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-6 leading-[1.1]"
                    >
                        We Build Software <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 animate-gradient-x">
                            That Powers Enterprises.
                        </span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-xl text-slate-600 dark:text-slate-400 mb-10 max-w-xl leading-relaxed"
                    >
                        ViroxCloud Inc. designs, develops, and deploys custom enterprise software solutions. From ERP to HRM, we create the tools that drive your business forward.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="flex flex-col sm:flex-row gap-4 mb-16"
                    >
                        <Link
                            href="/contact"
                            className="px-8 py-4 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-full font-bold hover:scale-105 transition-transform flex items-center justify-center gap-2 shadow-xl shadow-indigo-500/20"
                        >
                            Talk to Our Team <ArrowRight size={20} />
                        </Link>
                        <Link
                            href="/solutions"
                            className="px-8 py-4 bg-white dark:bg-slate-800 text-slate-900 dark:text-white rounded-full font-bold border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700/50 flex items-center justify-center gap-2 transition-colors"
                        >
                            View Our Products
                        </Link>
                    </motion.div>

                    <div className="flex items-center gap-8 text-sm font-medium text-slate-500 dark:text-slate-400 border-t border-slate-200 dark:border-slate-800 pt-8">
                        <div className="flex items-center gap-2">
                            <CheckCircle className="text-indigo-500 w-5 h-5 flex-shrink-0" />
                            <span>150+ Enterprise Clients</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <CheckCircle className="text-indigo-500 w-5 h-5 flex-shrink-0" />
                            <span>ISO 27001 Certified</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <CheckCircle className="text-indigo-500 w-5 h-5 flex-shrink-0" />
                            <span>Award-Winning Support</span>
                        </div>
                    </div>
                </motion.div>

                {/* Visual Content (Dashboard Mockup) */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
                    className="relative hidden lg:block"
                >
                    <div className="relative z-10 glass-card rounded-2xl p-3 bg-white/40 dark:bg-slate-800/40 border border-white/50 shadow-2xl backdrop-blur-xl">
                        {/* Main App Window */}
                        <div className="bg-slate-900 rounded-xl overflow-hidden shadow-2xl aspect-[16/10] relative border border-slate-800">
                            {/* Sidebar */}
                            <div className="absolute left-0 top-0 bottom-0 w-16 bg-slate-950 border-r border-slate-800 flex flex-col items-center py-6 gap-6">
                                <div className="w-8 h-8 rounded-lg bg-indigo-600" />
                                <div className="w-8 h-8 rounded-lg bg-slate-800" />
                                <div className="w-8 h-8 rounded-lg bg-slate-800" />
                                <div className="w-8 h-8 rounded-lg bg-slate-800" />
                            </div>

                            {/* Header */}
                            <div className="absolute left-16 top-0 right-0 h-16 bg-slate-900 border-b border-slate-800 flex items-center justify-between px-8">
                                <div className="w-32 h-4 bg-slate-800 rounded" />
                                <div className="flex gap-4">
                                    <div className="w-8 h-8 rounded-full bg-slate-800" />
                                    <div className="w-8 h-8 rounded-full bg-slate-800" />
                                </div>
                            </div>

                            {/* Content Area */}
                            <div className="absolute left-16 top-16 right-0 bottom-0 p-8 grid grid-cols-3 gap-6">
                                {/* Large Chart */}
                                <div className="col-span-2 bg-slate-800/50 rounded-xl p-4 border border-slate-700/50 h-48 relative overflow-hidden">
                                    <div className="flex gap-2 items-end h-full w-full px-2 pb-2">
                                        <div className="w-full bg-indigo-500/20 h-[40%] rounded-t" />
                                        <div className="w-full bg-indigo-500/40 h-[70%] rounded-t" />
                                        <div className="w-full bg-indigo-500/60 h-[50%] rounded-t" />
                                        <div className="w-full bg-indigo-500/80 h-[85%] rounded-t" />
                                        <div className="w-full bg-indigo-500 h-[65%] rounded-t" />
                                    </div>
                                </div>

                                {/* Stats Card 1 */}
                                <div className="bg-slate-800/50 rounded-xl p-4 border border-slate-700/50">
                                    <div className="w-8 h-8 rounded bg-sky-500/20 mb-3" />
                                    <div className="w-16 h-3 bg-slate-700 rounded mb-2" />
                                    <div className="w-20 h-6 bg-slate-600 rounded" />
                                </div>

                                {/* Bottom Panels */}
                                <div className="col-span-1 bg-slate-800/50 rounded-xl p-4 border border-slate-700/50 h-32" />
                                <div className="col-span-2 bg-slate-800/50 rounded-xl p-4 border border-slate-700/50 h-32" />
                            </div>
                        </div>

                        {/* Floating Card 1 - Sales Up */}
                        <motion.div
                            animate={{ y: [0, -10, 0] }}
                            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute -right-8 top-12 p-4 bg-white dark:bg-slate-800 rounded-xl shadow-xl border border-slate-200 dark:border-slate-700 w-48 z-20"
                        >
                            <div className="flex items-center gap-3 mb-2">
                                <div className="w-8 h-8 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center text-green-600">
                                    <ArrowRight className="-rotate-45 w-4 h-4" />
                                </div>
                                <div>
                                    <p className="text-xs text-slate-500">Total Revenue</p>
                                    <p className="font-bold text-slate-900 dark:text-white">$124,500</p>
                                </div>
                            </div>
                            <div className="w-full bg-slate-100 dark:bg-slate-700 h-1.5 rounded-full overflow-hidden">
                                <div className="bg-green-500 h-full w-[75%]" />
                            </div>
                        </motion.div>

                        {/* Floating Card 2 - Users */}
                        <motion.div
                            animate={{ y: [0, 10, 0] }}
                            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                            className="absolute -left-8 bottom-20 p-4 bg-white dark:bg-slate-800 rounded-xl shadow-xl border border-slate-200 dark:border-slate-700 w-40 z-20 flex items-center gap-3"
                        >
                            <div className="flex -space-x-2">
                                <div className="w-8 h-8 rounded-full bg-indigo-500 border-2 border-white dark:border-slate-800" />
                                <div className="w-8 h-8 rounded-full bg-sky-500 border-2 border-white dark:border-slate-800" />
                                <div className="w-8 h-8 rounded-full bg-violet-500 border-2 border-white dark:border-slate-800" />
                            </div>
                            <div>
                                <p className="font-bold text-slate-900 dark:text-white">2.4k+</p>
                                <p className="text-[10px] text-slate-500">Active Users</p>
                            </div>
                        </motion.div>

                    </div>

                    {/* Decorative Elements */}
                    <div className="absolute -inset-4 bg-indigo-500/20 rounded-3xl blur-2xl -z-10" />
                </motion.div>
            </div>
        </section>
    );
}
