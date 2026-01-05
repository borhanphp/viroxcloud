"use client";

import LegalPage from "@/components/LegalPage";

export default function PrivacyPage() {
    return (
        <LegalPage title="Privacy Policy" lastUpdated="January 1, 2026">
            <p>
                At ViroxCloud, we take your privacy seriously. This Privacy Policy explains how we collect, use,
                disclose, and safeguard your information when you visit our website or use our services.
            </p>

            <h2>1. Information We Collect</h2>
            <p>
                We collect information that you voluntarily provide to us when you register on the website,
                express an interest in obtaining information about us or our products and services, when you
                participate in activities on the website, or otherwise when you contact us.
            </p>

            <h2>2. Use of Your Information</h2>
            <p>
                We use individual data to provide the services you request, to maintain compliance with legal and regulatory obligations,
                and to improve our product offerings.
            </p>

            <h2>3. Data Security</h2>
            <p>
                We use administrative, technical, and physical security measures to help protect your personal information.
                While we have taken reasonable steps to secure the personal information you provide to us, please be aware
                that despite our efforts, no security measures are perfect or impenetrable.
            </p>
        </LegalPage>
    );
}
