"use client";

import { motion } from "framer-motion";
import { ArrowLeft, ShieldCheck } from "lucide-react";
import Link from "next/link";

interface LegalPageProps {
    title: string;
    lastUpdated: string;
    children: React.ReactNode;
}

export default function LegalPage({ title, lastUpdated, children }: LegalPageProps) {
    return (
        <div className="min-h-screen bg-slate-50 dark:bg-[#0B0F19] pt-28 pb-20">
            <div className="container mx-auto px-6 max-w-4xl">
                <Link
                    href="/"
                    className="inline-flex items-center text-sm text-slate-500 hover:text-indigo-600 mb-8 transition-colors"
                >
                    <ArrowLeft size={16} className="mr-2" /> Back to Home
                </Link>

                <div className="bg-white dark:bg-slate-900 rounded-3xl p-8 md:p-12 shadow-sm border border-slate-200 dark:border-slate-800">
                    <div className="flex items-center gap-4 mb-6">
                        <div className="p-3 bg-indigo-100 dark:bg-indigo-900/30 rounded-xl text-indigo-600">
                            <ShieldCheck size={32} />
                        </div>
                        <div>
                            <h1 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-2">
                                {title}
                            </h1>
                            <p className="text-sm text-slate-500">Last updated: {lastUpdated}</p>
                        </div>
                    </div>

                    <div className="prose prose-slate dark:prose-invert max-w-none">
                        {children}
                    </div>
                </div>
            </div>
        </div>
    );
}
