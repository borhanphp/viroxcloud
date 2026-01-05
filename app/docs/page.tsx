"use client";

import ContentPage from "@/components/ContentPage";
import { Book, Code, FileText } from "lucide-react";

export default function DocsPage() {
    return (
        <ContentPage
            title="Documentation"
            subtitle="Learn how to integrate and use ViroxCloud effectively."
        >
            <div className="grid md:grid-cols-3 gap-8">
                {[
                    { icon: Book, title: "Getting Started", desc: "Quick start guides for new users." },
                    { icon: FileText, title: "User Manuals", desc: "Deep dive into every module." },
                    { icon: Code, title: "Developer Tools", desc: "SDKs and libraries for devs." }
                ].map((item, idx) => (
                    <div key={idx} className="p-8 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 text-center hover:border-indigo-600 transition-colors cursor-pointer">
                        <div className="w-12 h-12 rounded-xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-900 dark:text-white mx-auto mb-4">
                            <item.icon size={24} />
                        </div>
                        <h3 className="font-bold text-lg mb-2 text-slate-900 dark:text-white">{item.title}</h3>
                        <p className="text-slate-500">{item.desc}</p>
                    </div>
                ))}
            </div>
        </ContentPage>
    );
}
