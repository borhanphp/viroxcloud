import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Industries | ViroxCloud",
    description: "Specialized solutions for Manufacturing, Retail, Healthcare, and more.",
};

export default function IndustriesLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
