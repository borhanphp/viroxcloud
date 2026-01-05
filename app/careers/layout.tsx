import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Careers | ViroxCloud",
    description: "Join our team and help build the future of enterprise software.",
};

export default function CareersLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
