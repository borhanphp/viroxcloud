"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Zap, Layers, Globe } from "lucide-react";

const features = [
    {
        icon: ShieldCheck,
        title: "Enterprise-Grade Security",
        description: "Bank-level encryption and role-based access control to keep your sensitive business data safe.",
    },
    {
        icon: Zap,
        title: "Lightning Fast Performance",
        description: "Optimized for speed with global CDN delivery and efficient cloud architecture.",
    },
    {
        icon: Layers,
        title: "Seamless Integration",
        description: "All modules work together in perfect harmony. One unified database for your whole company.",
    },
    {
        icon: Globe,
        title: "Access Anywhere",
        description: "Cloud-native platform allows you to manage your business from any device, anywhere in the world.",
    },
];

export default function FeatureSection() {
    return (
        <section id="features" className="py-24 bg-secondary/5 relative">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16 max-w-2xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        Why Choose <span className="text-gradient">ViroxCloud</span>?
                    </h2>
                    <p className="text-muted-foreground text-lg">
                        Built for modern enterprises that demand reliability, security, and scalability.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="p-6 rounded-2xl bg-background border border-border hover:border-primary/30 transition-colors"
                        >
                            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-4">
                                <feature.icon size={24} />
                            </div>
                            <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                            <p className="text-sm text-muted-foreground leading-relaxed">
                                {feature.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
