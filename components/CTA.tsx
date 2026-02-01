"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function CTA() {
    return (
        <section className="py-24 relative overflow-hidden" id="contact">
            <div className="absolute inset-0 bg-secondary skew-y-3 transform origin-bottom-left -z-10 translate-y-20 scale-110" />
            <div className="container mx-auto px-6">
                <div className="relative rounded-3xl bg-gradient-to-r from-primary to-accent overflow-hidden p-12 md:p-20 text-center text-white shadow-2xl">
                    {/* Decorative circles */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2" />
                    <div className="absolute bottom-0 left-0 w-64 h-64 bg-black/10 rounded-full blur-[80px] translate-y-1/2 -translate-x-1/2" />

                    <h2 className="text-3xl md:text-5xl font-bold mb-6 relative z-10">
                        Ready to Transform Your Operations?
                    </h2>
                    <p className="text-lg md:text-xl text-white/90 mb-10 max-w-2xl mx-auto relative z-10">
                        Partner with ViroxCloud Inc. to build software that scales with your ambitions. Let's discuss your project.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center relative z-10">
                        <Link
                            href="/contact"
                            className="px-8 py-4 bg-white text-primary font-bold rounded-xl hover:bg-gray-100 transition-colors shadow-lg flex items-center justify-center gap-2"
                        >
                            Request a Consultation <ArrowRight size={20} />
                        </Link>
                        <Link
                            href="/solutions"
                            className="px-8 py-4 bg-transparent border border-white/30 text-white font-bold rounded-xl hover:bg-white/10 transition-colors"
                        >
                            Explore Our Products
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
