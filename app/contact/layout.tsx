import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Contact Us | ViroxCloud",
    description: "Get in touch with our sales or support team.",
};

export default function ContactLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
