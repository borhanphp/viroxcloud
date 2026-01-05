import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Security & Compliance | ViroxCloud",
    description: "Review ViroxCloud's security protocols, certifications, and compliance standards.",
};

export default function SecurityLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
