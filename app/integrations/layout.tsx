import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Integrations | ViroxCloud",
    description: "Connect ViroxCloud with your favorite tools like Slack, Salesforce, and more.",
};

export default function IntegrationsLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
