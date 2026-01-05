import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Business Accounting Software | ViroxCloud",
    description: "Automate bookkeeping, manage expenses, and ensure tax compliance with ViroxCloud Accounting.",
};

export default function AccountingLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
