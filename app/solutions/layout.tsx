import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Solutions | ViroxCloud",
    description: "Comprehensive software solutions for every business need.",
};

export default function SolutionsLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
