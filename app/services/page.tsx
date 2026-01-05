"use client";

import ContentPage from "@/components/ContentPage";
import { Settings, Code, Headphones, Database, ShieldCheck, RefreshCw, Smartphone, ShoppingCart, Globe } from "lucide-react";

export default function ServicesPage() {
    const services = [
        {
            title: "Mobile App Development",
            desc: "Native and cross-platform mobile apps for iOS and Android. From concept to App Store deployment.",
            icon: Smartphone
        },
        {
            title: "E-commerce Solutions",
            desc: "Custom online stores, payment integration, and inventory management for your digital storefront.",
            icon: ShoppingCart
        },
        {
            title: "Domain & Web Hosting",
            desc: "Reliable, secure hosting with 99.99% uptime SLA. Domain registration, SSL, and email included.",
            icon: Globe
        },
        {
            title: "Custom Software Development",
            desc: "Need a specific feature? We build custom applications and integrations tailored to your workflow.",
            icon: Code
        },
        {
            title: "Implementation & Onboarding",
            desc: "Get up and running fast. Our team handles data migration, configuration, and team training.",
            icon: Settings
        },
        {
            title: "24/7 Managed Support",
            desc: "Round-the-clock technical assistance and proactive system monitoring.",
            icon: Headphones
        },
        {
            title: "Data Analytics & Insight",
            desc: "We help you build custom dashboards and reports to unlock the value of your data.",
            icon: Database
        },
        {
            title: "Security Audits",
            desc: "Regular penetration testing and compliance reviews to ensure your data stays safe.",
            icon: ShieldCheck
        },
        {
            title: "Legacy Modernization",
            desc: "We help you migrate from outdated legacy systems to our modern cloud infrastructure.",
            icon: RefreshCw
        }
    ];

    return (
        <ContentPage
            title="Professional Services"
            subtitle="We don't just provide software. We partner with you to transform your business operations."
        >
            <div className="grid md:grid-cols-3 gap-8">
                {services.map((service, idx) => (
                    <div key={idx} className="p-8 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 hover:border-indigo-500 transition-colors group">
                        <div className="w-14 h-14 rounded-xl bg-indigo-50 dark:bg-indigo-900/20 flex items-center justify-center text-indigo-600 mb-6 group-hover:scale-110 transition-transform">
                            <service.icon size={28} />
                        </div>
                        <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">{service.title}</h3>
                        <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                            {service.desc}
                        </p>
                    </div>
                ))}
            </div>
        </ContentPage>
    );
}
