"use client";

import ContentPage from "@/components/ContentPage";
import { Briefcase } from "lucide-react";
import Link from "next/link";

export default function CareersPage() {
    return (
        <ContentPage
            title="Join Our Team"
            subtitle="Build products that empower businesses globally. We're looking for innovative minds."
        >
            <div className="max-w-2xl mx-auto text-center">
                {/* No Openings State */}
                <div className="p-12 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 mb-8">
                    <div className="w-16 h-16 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center mx-auto mb-6">
                        <Briefcase className="text-slate-400" size={32} />
                    </div>
                    <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">No Open Positions</h2>
                    <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                        We don't have any career opportunities available at the moment. However, we're always interested in meeting talented people. Feel free to send us your resume for future consideration.
                    </p>
                </div>

                {/* CTA */}
                <div className="p-8 bg-indigo-50 dark:bg-indigo-900/20 rounded-2xl">
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Stay Connected</h3>
                    <p className="text-slate-600 dark:text-slate-400 mb-6">
                        Submit your resume and we'll reach out when a matching role opens up.
                    </p>
                    <Link href="mailto:careers@viroxcloud.com" className="inline-block px-6 py-3 bg-indigo-600 text-white font-bold rounded-xl hover:bg-indigo-700 transition-colors">
                        Send Your Resume
                    </Link>
                </div>
            </div>
        </ContentPage>
    );
}
