"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
    {
        name: "Sarah Chen",
        role: "CTO, TechFlow Solutions",
        content: "ViroxCloud transformed our chaotic inventory tracking into a streamlined, automated process. The ROI was evident within the first month.",
        rating: 5,
    },
    {
        name: "Michael Ross",
        role: "Operations Director, Manufacturing Inc.",
        content: "The ERP module is a game-changer. Finally, we have visibility across all departments in real-time. Highly recommended.",
        rating: 5,
    },
    {
        name: "Elena Rodriguez",
        role: "HR Manager, Global Staffing",
        content: "Managing 500+ employees used to be a nightmare. ViroxCloud HRM made payroll and leave management effortless.",
        rating: 5,
    },
];

export default function Testimonials() {
    return (
        <section className="py-24 relative overflow-hidden">
            {/* Background Blobs */}
            <div className="absolute top-1/2 left-0 w-96 h-96 bg-primary/5 rounded-full blur-[120px] -translate-y-1/2 -z-10" />
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-[120px] -z-10" />

            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        Trusted by Industry <span className="text-gradient">Leaders</span>
                    </h2>
                    <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                        See what our clients are saying about their transformation with ViroxCloud.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="glass-card p-8 rounded-2xl relative"
                        >
                            <div className="flex gap-1 mb-4 text-yellow-400">
                                {[...Array(testimonial.rating)].map((_, i) => (
                                    <Star key={i} size={18} fill="currentColor" />
                                ))}
                            </div>
                            <p className="text-foreground leading-relaxed italic mb-6">
                                &quot;{testimonial.content}&quot;
                            </p>
                            <div className="flex items-center gap-4">
                                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white font-bold text-sm">
                                    {testimonial.name.charAt(0)}
                                </div>
                                <div>
                                    <h4 className="font-bold text-sm">{testimonial.name}</h4>
                                    <p className="text-xs text-muted-foreground">{testimonial.role}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
