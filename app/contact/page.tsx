"use client";

import ContentPage from "@/components/ContentPage";
import { Mail, MapPin, Phone } from "lucide-react";

export default function ContactPage() {
    return (
        <ContentPage
            title="Get in Touch"
            subtitle="Have questions? We'd love to hear from you. Reach out via any of the channels below."
        >
            <div className="max-w-2xl mx-auto">
                {/* Contact Info */}
                <div className="space-y-8">
                    <div className="flex gap-4 p-6 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800">
                        <div className="w-12 h-12 rounded-full bg-indigo-100 dark:bg-indigo-900/30 flex items-center justify-center text-indigo-600 shrink-0">
                            <Mail size={20} />
                        </div>
                        <div>
                            <h3 className="font-bold text-lg text-slate-900 dark:text-white">Email Us</h3>
                            <p className="text-slate-500 mb-1">Our friendly team is here to help.</p>
                            <a href="mailto:hello@viroxcloud.com" className="text-indigo-600 font-medium">hello@viroxcloud.com</a>
                        </div>
                    </div>

                    <div className="flex gap-4 p-6 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800">
                        <div className="w-12 h-12 rounded-full bg-indigo-100 dark:bg-indigo-900/30 flex items-center justify-center text-indigo-600 shrink-0">
                            <MapPin size={20} />
                        </div>
                        <div>
                            <h3 className="font-bold text-lg text-slate-900 dark:text-white">Office</h3>
                            <p className="text-slate-500 mb-1">Come say hello at our office headquarters.</p>
                            <p className="text-slate-700 dark:text-slate-300">KM Tower, Agrabad Commercial Area, Agrabad,<br />Chattogram, Bangladesh 4100</p>
                        </div>
                    </div>

                    <div className="flex gap-4 p-6 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800">
                        <div className="w-12 h-12 rounded-full bg-indigo-100 dark:bg-indigo-900/30 flex items-center justify-center text-indigo-600 shrink-0">
                            <Phone size={20} />
                        </div>
                        <div>
                            <h3 className="font-bold text-lg text-slate-900 dark:text-white">Phone</h3>
                            <p className="text-slate-500 mb-1">Sun-Thu from 9am to 5pm.</p>
                            <a href="tel:+8801855107614" className="text-indigo-600 font-medium">+880 1855-107614</a>
                        </div>
                    </div>

                    {/* WhatsApp */}
                    <div className="flex gap-4 p-6 bg-white dark:bg-slate-900 rounded-2xl border border-green-200 dark:border-green-800">
                        <div className="w-12 h-12 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center text-green-600 shrink-0">
                            <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                            </svg>
                        </div>
                        <div>
                            <h3 className="font-bold text-lg text-slate-900 dark:text-white">WhatsApp</h3>
                            <p className="text-slate-500 mb-1">Quick response via WhatsApp.</p>
                            <a href="https://wa.me/8801855107614" target="_blank" rel="noopener noreferrer" className="text-green-600 font-medium hover:underline">
                                Chat with us →
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </ContentPage>
    );
}
