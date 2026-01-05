import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Inventory Management System | ViroxCloud",
    description: "Eliminate stockouts and track inventory in real-time across multiple warehouses with ViroxCloud.",
};

export default function InventoryLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
