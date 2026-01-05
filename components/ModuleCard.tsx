"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { LucideIcon } from "lucide-react";

interface ModuleCardProps {
    title: string;
    description: string;
    icon: LucideIcon;
    color: string;
    href: string;
    delay?: number;
}

export default function ModuleCard({ title, description, icon: Icon, color, href, delay = 0 }: ModuleCardProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay }}
            viewport={{ once: true }}
            className="group relative cursor-pointer"
        >
            <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-white/5 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

            <div className="relative h-full glass-card p-8 rounded-2xl flex flex-col hover:-translate-y-2 transition-transform duration-300">
                <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 text-white shadow-lg ${color}`}>
                    <Icon size={28} />
                </div>

                <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">{title}</h3>

                <p className="text-muted-foreground mb-6 leading-relaxed flex-grow">
                    {description}
                </p>

                <Link
                    href={href}
                    className="inline-flex items-center text-sm font-semibold text-primary group-hover:gap-2 transition-all"
                >
                    Learn more <ArrowRight size={16} className="ml-1" />
                </Link>
            </div>
        </motion.div>
    );
}
