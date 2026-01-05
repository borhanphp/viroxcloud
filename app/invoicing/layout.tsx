import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Custom Invoicing Software | ViroxCloud",
    description: "Create professional invoices, automate billing, and get paid faster with ViroxCloud Invoicing.",
};

export default function InvoicingLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
