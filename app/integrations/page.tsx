"use client";

import ContentPage from "@/components/ContentPage";

export default function IntegrationsPage() {
    const tools = ["Slack", "Salesforce", "HubSpot", "Shopify", "QuickBooks", "Zapier", "Gmail", "Outlook", "Zoom"];

    return (
        <ContentPage
            title="Integrations"
            subtitle="Connect ViroxCloud with the tools you already use."
        >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
                {tools.map((tool, idx) => (
                    <div key={idx} className="aspect-square bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 flex flex-col items-center justify-center p-6 hover:shadow-lg transition-all cursor-pointer">
                        <div className="w-16 h-16 rounded-full bg-slate-100 dark:bg-slate-800 mb-4" /> {/* Placeholder for logo */}
                        <span className="font-bold text-slate-900 dark:text-white">{tool}</span>
                    </div>
                ))}
            </div>
        </ContentPage>
    );
}
