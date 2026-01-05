"use client";

import ContentPage from "@/components/ContentPage";
import { Users, Globe, Award, Linkedin, Twitter } from "lucide-react";

export default function AboutPage() {
    const team = [
        { name: "Borhan Uddin", role: "CEO & Co-Founder", image: null },
        { name: "Shariful Islam", role: "CTO & Security Engineer", image: null },
        { name: "Shimantho", role: "Co-Founder & Head of Customer Success", image: null },
        { name: "Ayeen Uddin Showrav", role: "COO & QA Lead", image: null },
    ];

    return (
        <ContentPage
            title="About ViroxCloud Inc."
            subtitle="A leading software company building enterprise solutions that power businesses worldwide."
        >
            <div className="grid md:grid-cols-3 gap-8 mb-20 text-center">
                {[
                    { icon: Users, label: "200+", sub: "Engineers & Designers" },
                    { icon: Globe, label: "50+", sub: "Countries Served" },
                    { icon: Award, label: "8", sub: "Software Products" }
                ].map((stat, idx) => (
                    <div key={idx} className="p-8 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm">
                        <div className="w-12 h-12 rounded-xl bg-indigo-100 dark:bg-indigo-900/30 flex items-center justify-center text-indigo-600 mx-auto mb-4">
                            <stat.icon size={24} />
                        </div>
                        <h3 className="text-3xl font-bold text-slate-900 dark:text-white mb-1">{stat.label}</h3>
                        <p className="text-slate-500">{stat.sub}</p>
                    </div>
                ))}
            </div>

            <div className="prose prose-lg prose-slate dark:prose-invert mx-auto max-w-3xl text-center mb-20">
                <p>
                    Founded in 2020, ViroxCloud Inc. set out with a clear mission: to eliminate the inefficiencies
                    plaguing enterprise software. We saw companies drowning in disconnected tools, manual processes,
                    and outdated systems. So we decided to build something better.
                </p>
                <p>
                    Today, ViroxCloud Inc. is a full-service software company. We design, develop, and support
                    a portfolio of 8 enterprise products—including ERP, CRM, HRM, and more—used by over 150
                    enterprise clients across 50+ countries. Our team of 200+ engineers is dedicated to
                    building software that truly works for your business.
                </p>
            </div>

            {/* Leadership Team Section */}
            <div className="mb-20">
                <h2 className="text-3xl font-bold text-center text-slate-900 dark:text-white mb-4">Our Leadership</h2>
                <p className="text-center text-slate-500 mb-12 max-w-xl mx-auto">
                    Meet the team driving innovation and excellence at ViroxCloud Inc.
                </p>
                <div className="grid md:grid-cols-4 gap-8">
                    {team.map((member, idx) => (
                        <div key={idx} className="text-center group">
                            <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-br from-indigo-400 to-purple-600 mb-4 flex items-center justify-center text-white text-4xl font-bold shadow-lg group-hover:scale-105 transition-transform">
                                {member.name.split(' ').map(n => n[0]).join('')}
                            </div>
                            <h3 className="text-lg font-bold text-slate-900 dark:text-white">{member.name}</h3>
                            <p className="text-sm text-slate-500 mb-3">{member.role}</p>
                            <div className="flex justify-center gap-3">
                                <a href="#" className="text-slate-400 hover:text-indigo-600 transition-colors">
                                    <Linkedin size={18} />
                                </a>
                                <a href="#" className="text-slate-400 hover:text-indigo-600 transition-colors">
                                    <Twitter size={18} />
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </ContentPage>
    );
}
