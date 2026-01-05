import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Features | ViroxCloud",
    description: "Explore the powerful features that make ViroxCloud the leading choice for enterprise management.",
};

export default function FeaturesLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
