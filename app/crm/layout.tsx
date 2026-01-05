import { Metadata } from "next";

export const metadata: Metadata = {
    title: "CRM Software Suite | ViroxCloud",
    description: "Manage customer relationships, track leads, and close more deals with ViroxCloud CRM.",
};

export default function CRMLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
