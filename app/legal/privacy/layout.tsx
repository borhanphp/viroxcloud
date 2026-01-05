import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Privacy Policy | ViroxCloud",
    description: "Learn how ViroxCloud collects, uses, and protects your personal data.",
};

export default function PrivacyLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
