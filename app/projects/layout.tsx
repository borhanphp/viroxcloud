import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Project Management Software | ViroxCloud",
    description: "Plan, track, and deliver projects on time. Collaborate effectively with your team using ViroxCloud Projects.",
};

export default function ProjectsLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
