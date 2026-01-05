import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Community | ViroxCloud",
    description: "Connect with other ViroxCloud users.",
};

export default function CommunityLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
