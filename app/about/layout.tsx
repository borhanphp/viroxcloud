import { Metadata } from "next";

export const metadata: Metadata = {
    title: "About Us | ViroxCloud",
    description: "Discover the story, mission, and team behind ViroxCloud.",
};

export default function AboutLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
