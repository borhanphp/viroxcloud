"use client";

import ContentPage from "@/components/ContentPage";

export default function CommunityPage() {
    return (
        <ContentPage
            title="ViroxCloud Community"
            subtitle="Join thousands of professionals sharing tips and tricks."
        >
            <div className="text-center p-12 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800">
                <h2 className="text-2xl font-bold mb-4 text-slate-900 dark:text-white">Discussion View</h2>
                <p className="text-slate-500 mb-8">Access our forums to ask questions and share knowledge.</p>
                <button className="px-8 py-3 bg-indigo-600 text-white font-bold rounded-xl hover:bg-indigo-700">Go to Forums</button>
            </div>
        </ContentPage>
    );
}
