"use client";

import ContentPage from "@/components/ContentPage";
import { Factory, ShoppingBag, Stethoscope, Landmark, Truck, GraduationCap } from "lucide-react";

export default function IndustriesPage() {
    const industries = [
        { title: "Manufacturing", desc: "Optimize production lines, manage supply chains, and reduce waste.", icon: Factory },
        { title: "Retail & E-commerce", desc: "Unified inventory, omnichannel sales, and customer loyalty programs.", icon: ShoppingBag },
        { title: "Healthcare", desc: "HIPAA-compliant patient management, scheduling, and billing.", icon: Stethoscope },
        { title: "Finance & Banking", desc: "Secure transaction processing, risk management, and regulatory compliance.", icon: Landmark },
        { title: "Logistics", desc: "Fleet management, route optimization, and real-time tracking.", icon: Truck },
        { title: "Education", desc: "Student information systems, campus management, and e-learning.", icon: GraduationCap },
    ];

    return (
        <ContentPage
            title="Industries We Serve"
            subtitle="Deep domain expertise across key sectors. We speak your language."
        >
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {industries.map((ind, idx) => (
                    <div key={idx} className="relative overflow-hidden group rounded-2xl aspect-[4/3] bg-slate-900 flex flex-col items-center justify-center text-center p-8 cursor-pointer">
                        <div className="absolute inset-0 opacity-20 bg-gradient-to-br from-indigo-600 to-purple-800 transition-opacity group-hover:opacity-30" />

                        <div className="relative z-10 w-16 h-16 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-white mb-6 group-hover:bg-white/20 transition-colors">
                            <ind.icon size={32} />
                        </div>

                        <h3 className="relative z-10 text-2xl font-bold text-white mb-2">{ind.title}</h3>
                        <p className="relative z-10 text-slate-300 max-w-sm mx-auto">{ind.desc}</p>
                    </div>
                ))}
            </div>
        </ContentPage>
    );
}
