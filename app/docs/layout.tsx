import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Documentation | ViroxCloud",
    description: "Technical guides and references for ViroxCloud platform.",
};

export default function DocsLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
