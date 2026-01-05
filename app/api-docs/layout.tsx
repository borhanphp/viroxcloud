import { Metadata } from "next";

export const metadata: Metadata = {
    title: "API Reference | ViroxCloud",
    description: "Complete API documentation for developers.",
};

export default function ApiLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
