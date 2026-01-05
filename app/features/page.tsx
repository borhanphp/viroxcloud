"use client";

import ContentPage from "@/components/ContentPage";
import { Zap, Shield, Globe, Smartphone, BarChart, Cloud } from "lucide-react";

export default function FeaturesPage() {
    const features = [
        { title: "Real-time Analytics", desc: "Gain instant insights with live data dashboards.", icon: BarChart },
        { title: "Bank-Grade Security", desc: "Enterprise encryption and compliance standards.", icon: Shield },
        { title: "Global Scale", desc: "Infrastructure designed to support operations worldwide.", icon: Globe },
        { title: "Mobile First", desc: "Manage your business from anywhere with our iOS and Android apps.", icon: Smartphone },
        { title: "Cloud Native", desc: "Built for the cloud, ensuring high availability and updates.", icon: Cloud },
        { title: "AI Automation", desc: "Smart workflows that reduce manual tasks by 80%.", icon: Zap },
    ];

    return (
        <ContentPage
            title="Platform Features"
            subtitle="Everything you need to run your business, all in one place."
        >
            <div className="grid md:grid-cols-3 gap-8">
                {features.map((feature, idx) => (
                    <div key={idx} className="p-8 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800">
                        <div className="w-12 h-12 rounded-xl bg-indigo-100 dark:bg-indigo-900/30 flex items-center justify-center text-indigo-600 mb-4">
                            <feature.icon size={24} />
                        </div>
                        <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">{feature.title}</h3>
                        <p className="text-slate-500">{feature.desc}</p>
                    </div>
                ))}
            </div>
        </ContentPage>
    );
}
