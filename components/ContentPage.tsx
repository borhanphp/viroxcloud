"use client";

import { motion } from "framer-motion";

interface ContentPageProps {
    title: string;
    subtitle: string;
    children: React.ReactNode;
}

export default function ContentPage({ title, subtitle, children }: ContentPageProps) {
    return (
        <div className="min-h-screen bg-slate-50 dark:bg-[#0B0F19] pt-32 pb-20">
            <div className="container mx-auto px-6 relative z-10 text-center mb-16">
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-4xl md:text-6xl font-extrabold mb-6 text-slate-900 dark:text-white"
                >
                    {title}
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto"
                >
                    {subtitle}
                </motion.p>
            </div>

            <div className="container mx-auto px-6">
                {children}
            </div>
        </div>
    );
}
