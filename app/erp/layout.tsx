import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Cloud ERP Software | ViroxCloud",
    description: "Unify your business with ViroxCloud ERP. Integrate finance, HR, sales, and operations into one intelligent system.",
};

export default function ERPLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
