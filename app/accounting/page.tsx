"use client";

import ModulePage from "@/components/ModulePage";
import { Calculator, PieChart, Landmark, Receipt, FileCheck } from "lucide-react";

export default function AccountingPage() {
    return (
        <ModulePage
            title="Smart Accounting"
            description="Financial management made simple. From automatic bank feeds to tax-ready reports, handle your finances with confidence and precision."
            icon={Calculator}
            gradient="bg-gradient-to-br from-purple-600 to-fuchsia-600"
            painPoints={[
                "Hours spent on manual data entry",
                "Stressful tax seasons with disorganized records",
                "Lack of cash flow visibility",
                "Late client payments affecting liquidity"
            ]}
            benefits={[
                {
                    title: "Bank Synchronization",
                    description: "Automatically import and categorize transactions from your bank."
                },
                {
                    title: "Tax Ready",
                    description: "Generate P&L, Balance Sheet, and Tax Summary reports in seconds."
                },
                {
                    title: "Multi-Currency",
                    description: "Handle international business with auto-updated exchange rates."
                }
            ]}
            features={[
                {
                    title: "Expense Tracking",
                    description: "Snap photos of receipts and let AI extract the data.",
                    icon: Receipt
                },
                {
                    title: "Financial Reporting",
                    description: "Real-time Profit & Loss, Balance Sheet, and Cash Flow statements.",
                    icon: PieChart
                },
                {
                    title: "Asset Management",
                    description: "Track depreciation and manage fixed assets effortlessly.",
                    icon: Landmark
                },
                {
                    title: "Audit Trail",
                    description: "Complete history of every transaction for total compliance.",
                    icon: FileCheck
                }
            ]}
        />
    );
}
