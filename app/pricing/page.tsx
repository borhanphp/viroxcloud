"use client";

import ContentPage from "@/components/ContentPage";
import { Check, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function PricingPage() {
    const models = [
        {
            name: "Project Based",
            desc: "Ideal for defined scope",
            features: ["Fixed Timeline", "Milestone Payments", "Custom Requirements", "Dedicated Team"]
        },
        {
            name: "Retainer",
            desc: "Continuous improvement",
            isPopular: true,
            features: ["Monthly Support", "Priority Access", "Continuous Updates", "Strategic Reviews"]
        },
        {
            name: "Staff Augmentation",
            desc: "Scale your team",
            features: ["Vetted Engineers", "Flexible Contracts", "Direct Management", "Seamless Integration"]
        }
    ];

    return (
        <ContentPage
            title="Engagement Models"
            subtitle="Flexible partnership options tailored to your business needs."
        >
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                {models.map((model, idx) => (
                    <div key={idx} className={`relative p-8 rounded-3xl border ${model.isPopular ? 'border-indigo-500 bg-indigo-50/50 dark:bg-indigo-900/10' : 'border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900'} shadow-xl flex flex-col`}>
                        {model.isPopular && (
                            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-indigo-600 text-white px-4 py-1 rounded-full text-sm font-bold">
                                Recommended
                            </div>
                        )}
                        <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">{model.name}</h3>
                        <p className="text-slate-500 mb-8">{model.desc}</p>

                        <ul className="space-y-4 mb-8 flex-1">
                            {model.features.map((f, i) => (
                                <div key={i} className="flex gap-3">
                                    <Check className="text-green-500 shrink-0" size={20} />
                                    <span className="text-slate-700 dark:text-slate-300 text-sm">{f}</span>
                                </div>
                            ))}
                        </ul>

                        <Link href="/contact" className={`w-full py-4 rounded-xl font-bold transition-colors text-center ${model.isPopular ? 'bg-indigo-600 text-white hover:bg-indigo-700' : 'bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white hover:bg-slate-200 dark:hover:bg-slate-700'}`}>
                            Discuss {model.name}
                        </Link>
                    </div>
                ))}
            </div>

            <div className="mt-16 text-center text-slate-500">
                <p>Not sure which model fits you? <Link href="/contact" className="text-indigo-600 font-bold hover:underline">Book a free discovery call</Link> to find out.</p>
            </div>
        </ContentPage>
    );
}
