"use client";

import ModulePage from "@/components/ModulePage";
import { UserCircle, Heart, Award, CalendarCheck, FileBadge } from "lucide-react";

export default function HRMPage() {
    return (
        <ModulePage
            title="HR Management"
            description="Empower your people. From recruitment to retirement, streamline your entire human resources lifecycle in one secure platform."
            icon={UserCircle}
            gradient="bg-gradient-to-br from-rose-600 to-orange-600"
            painPoints={[
                "Managing employee data in messy spreadsheets",
                "Compliance risks from outdated documentation",
                "Slow and painful onboarding processes",
                "Payroll errors affecting employee morale"
            ]}
            benefits={[
                {
                    title: "Employee Portal",
                    description: "Self-service portal for leave requests, payslips, and profile updates."
                },
                {
                    title: "Automated Payroll",
                    description: "Run payroll in minutes with auto-calculated taxes and deductions."
                },
                {
                    title: "Performance Management",
                    description: "Track goals, run reviews, and celebrate achievements."
                }
            ]}
            features={[
                {
                    title: "Leave Management",
                    description: "Automated approval workflows for vacation and sick leave.",
                    icon: CalendarCheck
                },
                {
                    title: "Recruitment (ATS)",
                    description: "Track applicants and manage the hiring pipeline.",
                    icon: FileBadge
                },
                {
                    title: "Benefits Administration",
                    description: "Manage insurance, bonuses, and other perks easily.",
                    icon: Heart
                },
                {
                    title: "Training & Development",
                    description: "Identify skills gaps and assign training programs.",
                    icon: Award
                }
            ]}
        />
    );
}
