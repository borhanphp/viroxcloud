"use client";

import ContentPage from "@/components/ContentPage";

export default function HelpPage() {
    return (
        <ContentPage
            title="Help Center"
            subtitle="Find answers to common questions and get support."
        >
            <div className="max-w-2xl mx-auto space-y-4">
                {["How do I reset my password?", "Can I export my data?", "How does billing work?", "Where do I add new users?"].map((q, idx) => (
                    <div key={idx} className="p-6 bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 cursor-pointer hover:border-indigo-500 transition-colors">
                        <span className="font-medium text-slate-900 dark:text-white">{q}</span>
                    </div>
                ))}
            </div>
        </ContentPage>
    );
}
