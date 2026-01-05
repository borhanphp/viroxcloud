"use client";

import LegalPage from "@/components/LegalPage";

export default function SecurityPage() {
    return (
        <LegalPage title="Security & Compliance" lastUpdated="January 1, 2026">
            <p>
                Security is at the core of everything we do. We use enterprise-grade security to protect your data at every layer.
            </p>

            <h2>1. Data Encryption</h2>
            <p>
                All data is encrypted in transit using TLS 1.3 and at rest using AES-256 encryption. We utilize top-tier cloud providers who maintain rigorous physical and network security controls.
            </p>

            <h2>2. Infrastructure Security</h2>
            <p>
                Our infrastructure is hosted on AWS and Google Cloud Platform, providing world-class DDoS protection, firewalls, and network isolation. We perform regular penetration testing and vulnerability scans.
            </p>

            <h2>3. Access Control</h2>
            <p>
                We enforce strict Role-Based Access Control (RBAC) and Multi-Factor Authentication (MFA) for all internal access to production systems. Customer data is only accessed when necessary for support or maintenance, with full audit logging.
            </p>
        </LegalPage>
    );
}
