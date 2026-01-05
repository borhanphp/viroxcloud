import type { Metadata } from "next";
import { Inter } from "next/font/google"; // Using Inter for modern tech look
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { clsx } from "clsx";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "ViroxCloud | Enterprise Management Solutions",
  description: "Comprehensive software suite for ERP, CRM, Inventory, HRM, and more. Empower your enterprise with ViroxCloud.",
  keywords: ["ERP", "Inventory Management", "CRM", "Accounting", "HRM", "LMS", "Custom Invoice", "Project Management"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={clsx(inter.variable, "font-sans antialiased min-h-screen flex flex-col")}>
        <Navbar />
        <main className="flex-grow pt-16">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
