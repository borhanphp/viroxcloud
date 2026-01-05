import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Engagement Models | ViroxCloud",
    description: "Flexible partnership models including fixed price, retainer, and staff augmentation.",
};

export default function PricingLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
