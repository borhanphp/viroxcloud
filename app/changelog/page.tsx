"use client";

import ContentPage from "@/components/ContentPage";

export default function ChangelogPage() {
    const updates = [
        { version: "v2.1.0", date: "Jan 1, 2026", title: "New Dashboard UI", desc: "Completely redesigned dashboard with customizable widgets." },
        { version: "v2.0.5", date: "Dec 15, 2025", title: "Performance Improvements", desc: "50% faster page loads on mobile devices." },
        { version: "v2.0.0", date: "Nov 20, 2025", title: "Major Release: HRM Module", desc: "Launched full Human Resource Management suite." },
    ];

    return (
        <ContentPage
            title="Changelog"
            subtitle="We're constantly improving. Here's what's new."
        >
            <div className="max-w-3xl mx-auto border-l-2 border-slate-200 dark:border-slate-800 pl-8 space-y-12">
                {updates.map((update, idx) => (
                    <div key={idx} className="relative">
                        <div className="absolute -left-[41px] top-1 w-5 h-5 rounded-full bg-indigo-600 border-4 border-white dark:border-slate-950" />
                        <div className="flex items-center gap-4 mb-2">
                            <span className="font-mono text-sm px-3 py-1 bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 rounded-full font-bold">{update.version}</span>
                            <span className="text-slate-500 text-sm">{update.date}</span>
                        </div>
                        <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">{update.title}</h3>
                        <p className="text-slate-600 dark:text-slate-400">{update.desc}</p>
                    </div>
                ))}
            </div>
        </ContentPage>
    );
}
