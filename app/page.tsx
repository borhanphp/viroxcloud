"use client";

import Hero from "@/components/Hero";
import FeatureSection from "@/components/FeatureSection";
import ModuleCard from "@/components/ModuleCard";
import Testimonials from "@/components/Testimonials";
import CTA from "@/components/CTA";
import {
  BarChart4,
  Package,
  Users,
  Calculator,
  Briefcase,
  FileText,
  UserCircle,
  GraduationCap,
  Settings,
  Headphones
} from "lucide-react";

export default function Home() {
  const modules = [
    {
      title: "ERP System",
      description: "Unify your entire business operation. Stop juggling disconnected spreadsheets and gain a single source of truth for better decision making.",
      icon: BarChart4,
      color: "bg-blue-500",
      href: "/erp"
    },
    {
      title: "Inventory Management",
      description: "Eliminate stockouts and overstocking. Track every item in real-time across multiple warehouses with precision.",
      icon: Package,
      color: "bg-indigo-500",
      href: "/inventory"
    },
    {
      title: "CRM Suite",
      description: "Convert more leads and keep customers happy. Track every interaction and never let a sales opportunity slip through the cracks.",
      icon: Users,
      color: "bg-violet-500",
      href: "/crm"
    },
    {
      title: "Accounting",
      description: "Automate your finances. From expense tracking to tax reports, make your financial operations error-free and compliant.",
      icon: Calculator,
      color: "bg-purple-500",
      href: "/accounting"
    },
    {
      title: "Project Management",
      description: "Deliver on time, every time. organize tasks, track time, and collaborate with your team in one intuitive workspace.",
      icon: Briefcase,
      color: "bg-fuchsia-500",
      href: "/projects"
    },
    {
      title: "Custom Invoicing",
      description: "Get paid faster. Create professional, branded invoices in seconds and automate recurring billing.",
      icon: FileText,
      color: "bg-pink-500",
      href: "/invoicing"
    },
    {
      title: "HRM Platform",
      description: "Empower your people. Streamline recruitment, onboarding, payroll, and performance reviews in one secure portal.",
      icon: UserCircle,
      color: "bg-rose-500",
      href: "/hrm"
    },
    {
      title: "LMS",
      description: "Upskill your workforce. Deliver training, track progress, and ensure compliance with our integrated Learning Management System.",
      icon: GraduationCap,
      color: "bg-orange-500",
      href: "/lms"
    }
  ];

  return (
    <div className="flex flex-col gap-0">
      <Hero />

      <section id="modules" className="py-24 relative z-10">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Our <span className="text-gradient">Software Portfolio</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              A suite of enterprise products designed, built, and supported by ViroxCloud Inc.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {modules.map((module, index) => (
              <ModuleCard
                key={module.title}
                {...module}
                delay={index * 0.1}
              />
            ))}
          </div>
        </div>
      </section>

      <FeatureSection />
      <Testimonials />

      {/* Agency/Consultancy Value Prop */}
      <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-indigo-600/10" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">More Than Just Software. <br /> A Strategic Partnership.</h2>
            <p className="text-xl text-slate-400">We don't just sell you a tool and walk away. We work alongside your team to engineer digital solutions that solve your specific business challenges.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 bg-white/5 border border-white/10 rounded-2xl backdrop-blur-sm">
              <div className="w-12 h-12 bg-indigo-500 rounded-lg flex items-center justify-center mb-6">
                <Users className="text-white" size={24} />
              </div>
              <h3 className="text-xl font-bold mb-3">Expert Consultants</h3>
              <p className="text-slate-400">Our team consists of senior engineers and industry analysts who understand the nuances of your sector.</p>
            </div>
            <div className="p-8 bg-white/5 border border-white/10 rounded-2xl backdrop-blur-sm">
              <div className="w-12 h-12 bg-violet-500 rounded-lg flex items-center justify-center mb-6">
                <Settings className="text-white" size={24} />
              </div>
              <h3 className="text-xl font-bold mb-3">Tailored Implementation</h3>
              <p className="text-slate-400">No two businesses are alike. We customize every module to align perfectly with your existing operational workflows.</p>
            </div>
            <div className="p-8 bg-white/5 border border-white/10 rounded-2xl backdrop-blur-sm">
              <div className="w-12 h-12 bg-fuchsia-500 rounded-lg flex items-center justify-center mb-6">
                <Headphones className="text-white" size={24} />
              </div>
              <h3 className="text-xl font-bold mb-3">24/7 Dedicated Support</h3>
              <p className="text-slate-400">Your success is our priority. Get a dedicated account manager and round-the-clock technical support.</p>
            </div>
          </div>
        </div>
      </section>

      <CTA />
    </div>
  );
}
