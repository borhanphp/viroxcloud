"use client";

import ModulePage from "@/components/ModulePage";
import { FileText, CreditCard, Send, Settings, Repeat } from "lucide-react";

export default function InvoicingPage() {
    return (
        <ModulePage
            title="Custom Invoicing"
            description="Get paid faster with professional, branded invoices. Automate recurring billing, send reminders, and accept payments online seamlessly."
            icon={FileText}
            gradient="bg-gradient-to-br from-pink-600 to-rose-600"
            painPoints={[
                "Unprofessional invoices hurting your brand image",
                "Chasing clients for late payments manually",
                "Complex billing cycles causing headaches",
                "No easy way for clients to pay online"
            ]}
            benefits={[
                {
                    title: "Brand Consistency",
                    description: "Fully customizable templates to match your brand identity."
                },
                {
                    title: "Automated Reminders",
                    description: "Let the system chase late payments for you professionally."
                },
                {
                    title: "Online Payments",
                    description: "Accept credit cards and bank transfers directly on the invoice."
                }
            ]}
            features={[
                {
                    title: "Recurring Billing",
                    description: "Set and forget subscriptions and retainer invoices.",
                    icon: Repeat
                },
                {
                    title: "Multi-Currency",
                    description: "Invoice international clients in their local currency.",
                    icon: Settings
                },
                {
                    title: "Payment Gateways",
                    description: "Integrates with Stripe, PayPal, and more.",
                    icon: CreditCard
                },
                {
                    title: "One-Click Send",
                    description: "Email invoices via PDF or shareable link instantly.",
                    icon: Send
                }
            ]}
        />
    );
}
