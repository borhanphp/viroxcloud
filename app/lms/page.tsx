"use client";

import ModulePage from "@/components/ModulePage";
import { GraduationCap, BookOpen, Video, Trophy, BarChart } from "lucide-react";

export default function LMSPage() {
    return (
        <ModulePage
            title="Learning Management"
            description="Build a smarter workforce. Create, distribute, and track training programs to ensure your team is always growing and compliant."
            icon={GraduationCap}
            gradient="bg-gradient-to-br from-orange-500 to-amber-500"
            painPoints={[
                "Difficulty tracking mandatory compliance training",
                "Skills gaps slowing down company growth",
                "Disorganized training materials across folders and drives",
                "No way to measure training ROI"
            ]}
            benefits={[
                {
                    title: "Centralized Knowledge",
                    description: "One hub for all your courses, videos, and documents."
                },
                {
                    title: "Progress Tracking",
                    description: "Real-time reports on who has completed what and when."
                },
                {
                    title: "Gamification",
                    description: "Badges, points, and leaderboards to drive engagement."
                }
            ]}
            features={[
                {
                    title: "Course Builder",
                    description: "Drag-and-drop tool to create engaging lessons.",
                    icon: BookOpen
                },
                {
                    title: "Video Support",
                    description: "Host training videos directly within the platform.",
                    icon: Video
                },
                {
                    title: "Quizzes &Certifications",
                    description: "Auto-graded assessments and custom certificates.",
                    icon: Trophy
                },
                {
                    title: "Learning Analytics",
                    description: "Detailed insights into learner performance and course effectiveness.",
                    icon: BarChart
                }
            ]}
        />
    );
}
