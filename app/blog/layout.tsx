import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Blog | ViroxCloud",
    description: "Insights, updates, and best practices for modern enterprise management.",
};

export default function BlogLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
