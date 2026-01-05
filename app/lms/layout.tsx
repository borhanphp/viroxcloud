import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Learning Management System (LMS) | ViroxCloud",
    description: "Upskill your workforce, track training progress, and build a culture of learning with ViroxCloud LMS.",
};

export default function LMSLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
