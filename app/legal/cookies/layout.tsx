import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Cookie Policy | ViroxCloud",
    description: "Understand how ViroxCloud uses cookies and tracking technologies.",
};

export default function CookieLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
