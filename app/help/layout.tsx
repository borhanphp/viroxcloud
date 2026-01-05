import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Help Center | ViroxCloud",
    description: "Get support for your ViroxCloud products.",
};

export default function HelpLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
