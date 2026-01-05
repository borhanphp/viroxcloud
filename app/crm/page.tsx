"use client";

import ModulePage from "@/components/ModulePage";
import { Users, Phone, Mail, LineChart, Target } from "lucide-react";

export default function CRMPage() {
    return (
        <ModulePage
            title="Customer Relationship Management"
            description="Turn leads into loyal customers. A complete suite to manage your sales pipeline, track interactions, and deliver exceptional support."
            icon={Users}
            gradient="bg-gradient-to-br from-violet-600 to-purple-600"
            painPoints={[
                "Leads slipping through the cracks",
                "Disorganized customer data across emails and spreadsheets",
                "Lack of visibility into sales team performance",
                "Poor customer follow-up and retention"
            ]}
            benefits={[
                {
                    title: "360° Customer View",
                    description: "See every interaction, purchase, and ticket in one timeline."
                },
                {
                    title: "Pipeline Management",
                    description: "Visual drag-and-drop pipelines to track deal progress."
                },
                {
                    title: "Email Integration",
                    description: "Syncs directly with Gmail and Outlook."
                }
            ]}
            features={[
                {
                    title: "Sales Automation",
                    description: "Automate follow-ups, task assignment, and lead scoring.",
                    icon: Target
                },
                {
                    title: "Contact Management",
                    description: "Centralized database for all your business contacts.",
                    icon: Phone
                },
                {
                    title: "Marketing Campaigns",
                    description: "Send targeted email campaigns to specific customer segments.",
                    icon: Mail
                },
                {
                    title: "Deep Analytics",
                    description: "Forecast revenue and measure team performance accurately.",
                    icon: LineChart
                }
            ]}
        />
    );
}
