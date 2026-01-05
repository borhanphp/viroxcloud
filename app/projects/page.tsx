"use client";

import ModulePage from "@/components/ModulePage";
import { Briefcase, Calendar, Clock, MessageSquare, CheckSquare } from "lucide-react";

export default function ProjectsPage() {
    return (
        <ModulePage
            title="Project Management"
            description="Deliver on time, every time. Organize tasks, track time, and empower your team to collaborate seamlessly in one intuitive workspace."
            icon={Briefcase}
            gradient="bg-gradient-to-br from-fuchsia-600 to-pink-600"
            painPoints={[
                "Missed deadlines and project delays",
                "Scope creep eating into your margins",
                "Confusing spreadsheets and email chains for task tracking",
                "Lack of visibility into resource allocation"
            ]}
            benefits={[
                {
                    title: "Visual Planning",
                    description: "Gantt charts, Kanban boards, and Lists to suit your workflow."
                },
                {
                    title: "Resource Management",
                    description: "See who is overworked and balance the load instantly."
                },
                {
                    title: "Time Tracking",
                    description: "Built-in timers to track billable hours accurately."
                }
            ]}
            features={[
                {
                    title: "Task Management",
                    description: "Assign tasks, set due dates, and add subtasks with ease.",
                    icon: CheckSquare
                },
                {
                    title: "Team Collaboration",
                    description: "Real-time comments, file sharing, and @mentions.",
                    icon: MessageSquare
                },
                {
                    title: "Milestone Tracking",
                    description: "Keep the big picture in focus and celebrate wins.",
                    icon: Calendar
                },
                {
                    title: "Time Sheets",
                    description: "Automated timesheets for easy payroll and billing.",
                    icon: Clock
                }
            ]}
        />
    );
}
