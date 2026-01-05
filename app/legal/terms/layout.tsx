import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Terms of Service | ViroxCloud",
    description: "Read the terms and conditions for using ViroxCloud services.",
};

export default function TermsLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
