import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Professional Services | ViroxCloud",
    description: "Consulting, implementation, and support services to ensure your success.",
};

export default function ServicesLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
