"use client";

import ModulePage from "@/components/ModulePage";
import { BarChart4, Database, Layers, Lock, Zap } from "lucide-react";

export default function ERPPage() {
    return (
        <ModulePage
            title="Enterprise Resource Planning"
            description="The backbone of your modern enterprise. Unify every department, automate core processes, and gain real-time insights to make data-driven decisions."
            icon={BarChart4}
            gradient="bg-gradient-to-br from-blue-600 to-indigo-600"
            painPoints={[
                "Disconnected departments operating in silos",
                "Manual data entry causing expensive errors",
                "Lack of real-time visibility into business performance",
                "Difficulty scaling operations efficiently"
            ]}
            benefits={[
                {
                    title: "Single Source of Truth",
                    description: "All your business data in one secure database, accessible in real-time."
                },
                {
                    title: "Automated Workflows",
                    description: "Reduce manual tasks by 80% with intelligent automation rules."
                },
                {
                    title: "Scalable Architecture",
                    description: "Built to grow with you, from 10 to 10,000 employees."
                }
            ]}
            features={[
                {
                    title: "Financial Management",
                    description: "Complete general ledger, accounts payable/receivable, and automated tax compliance.",
                    icon: Database
                },
                {
                    title: "Supply Chain",
                    description: "End-to-end visibility from procurement to delivery.",
                    icon: Layers
                },
                {
                    title: "Business Intelligence",
                    description: "AI-powered analytics and customizable dashboards for instant insights.",
                    icon: Zap
                },
                {
                    title: "Enterprise Security",
                    description: "Role-based access control and bank-grade encryption.",
                    icon: Lock
                }
            ]}
        />
    );
}
