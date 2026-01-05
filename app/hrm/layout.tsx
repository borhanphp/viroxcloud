import { Metadata } from "next";

export const metadata: Metadata = {
    title: "HRM & Payroll Software | ViroxCloud",
    description: "Streamline HR processes, manage payroll, and engage your workforce with ViroxCloud HRM.",
};

export default function HRMLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
