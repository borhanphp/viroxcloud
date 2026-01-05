"use client";

import ContentPage from "@/components/ContentPage";
import Link from "next/link";

export default function BlogPage() {
    const posts = [
        {
            title: "The Future of Cloud ERP: Trends to Watch in 2026",
            excerpt: "AI and automation are redefining how businesses manage resources. Here's what you need to know.",
            date: "Jan 5, 2026",
            category: "Industry Trends"
        },
        {
            title: "How to Streamline Your Inventory Management",
            excerpt: "Tips and tricks for reducing stockouts and optimizing warehouse efficiency.",
            date: "Dec 28, 2025",
            category: "Guides"
        },
        {
            title: "ViroxCloud Releases New HRM Module",
            excerpt: "We're excited to announce our latest update focused on employee engagement and payroll automation.",
            date: "Dec 15, 2025",
            category: "Product Updates"
        }
    ];

    return (
        <ContentPage
            title="ViroxCloud Blog"
            subtitle="Latest news, insights, and expert advice for growing your business."
        >
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                {posts.map((post, idx) => (
                    <div key={idx} className="bg-white dark:bg-slate-900 rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-lg transition-all group">
                        <div className="h-48 bg-slate-100 dark:bg-slate-800 relative">
                            <div className="absolute top-4 left-4 px-3 py-1 bg-white/90 dark:bg-slate-900/90 text-xs font-bold rounded-full">{post.category}</div>
                        </div>
                        <div className="p-6">
                            <div className="text-sm text-slate-500 mb-2">{post.date}</div>
                            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-indigo-600 transition-colors">
                                <Link href="#">{post.title}</Link>
                            </h3>
                            <p className="text-slate-600 dark:text-slate-400 text-sm mb-4">
                                {post.excerpt}
                            </p>
                            <Link href="#" className="text-indigo-600 font-bold text-sm hover:underline">Read Article &rarr;</Link>
                        </div>
                    </div>
                ))}
            </div>
        </ContentPage>
    );
}
