import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Changelog | ViroxCloud",
    description: "See what's new in ViroxCloud. Updates, improvements, and bug fixes.",
};

export default function ChangelogLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
