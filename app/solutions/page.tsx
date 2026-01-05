"use client";

import ContentPage from "@/components/ContentPage";
import ModuleCard from "@/components/ModuleCard";
import {
    BarChart4,
    Package,
    Users,
    Calculator,
    Briefcase,
    FileText,
    UserCircle,
    GraduationCap
} from "lucide-react";

export default function SolutionsPage() {
    const modules = [
        {
            title: "ERP",
            description: "Complete Enterprise Resource Planning for data-driven manufacturing and logistics.",
            icon: BarChart4,
            href: "/erp",
            color: "bg-blue-500"
        },
        {
            title: "Inventory",
            description: "Real-time stock tracking with AI-powered demand forecasting and warehouse optimization.",
            icon: Package,
            href: "/inventory",
            color: "bg-emerald-500"
        },
        {
            title: "CRM",
            description: "Manage customer relationships, sales pipelines, and support tickets in one unified view.",
            icon: Users,
            href: "/crm",
            color: "bg-purple-500"
        },
        {
            title: "Accounting",
            description: "Automated bookkeeping, financial reporting, and tax compliance for modern businesses.",
            icon: Calculator,
            href: "/accounting",
            color: "bg-amber-500"
        },
        {
            title: "Project Management",
            description: "Agile workflows, resource allocation, and timeline tracking to deliver projects on time.",
            icon: Briefcase,
            href: "/projects",
            color: "bg-pink-500"
        },
        {
            title: "Invoicing",
            description: "Create professional invoices, track payments, and manage cash flow effortlessly.",
            icon: FileText,
            href: "/invoicing",
            color: "bg-indigo-500"
        },
        {
            title: "HRM",
            description: "Seamless recruitment, payroll processing, and employee engagement tools.",
            icon: UserCircle,
            href: "/hrm",
            color: "bg-rose-500"
        },
        {
            title: "LMS",
            description: "Corporate training and upskilling platform with progress tracking and certification.",
            icon: GraduationCap,
            href: "/lms",
            color: "bg-teal-500"
        }
    ];

    return (
        <ContentPage
            title="Our Solutions"
            subtitle="A complete suite of integrated software modules designed to scale with your enterprise."
        >
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {modules.map((module, index) => (
                    <ModuleCard key={index} {...module} />
                ))}
            </div>
        </ContentPage>
    );
}
