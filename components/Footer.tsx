import Link from "next/link";
import { Facebook, Twitter, Linkedin, Instagram, ArrowRight } from "lucide-react";

const footerLinks = {
    Product: [
        { name: "Features", href: "/features" },
        { name: "Pricing", href: "/pricing" },
        { name: "Integrations", href: "/integrations" },
        { name: "Changelog", href: "/changelog" }
    ],
    Company: [
        { name: "About Us", href: "/about" },
        { name: "Careers", href: "/careers" },
        { name: "Blog", href: "/blog" },
        { name: "Contact", href: "/contact" }
    ],
    Resources: [
        { name: "Documentation", href: "/docs" },
        { name: "Community", href: "/community" },
        { name: "Help Center", href: "/help" },
        { name: "API Reference", href: "/api-docs" }
    ],
    Legal: [
        { name: "Privacy Policy", href: "/legal/privacy" },
        { name: "Terms of Service", href: "/legal/terms" },
        { name: "Cookie Policy", href: "/legal/cookies" },
        { name: "Security", href: "/legal/security" }
    ],
};

export default function Footer() {
    return (
        <footer className="bg-[#0B0F19] text-gray-400 py-20 border-t border-white/5 relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-[100px] pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12 mb-16">
                    {/* Brand Column */}
                    <div className="lg:col-span-2">
                        <Link href="/" className="flex items-center gap-2 mb-6">
                            <div className="w-8 h-8 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center text-white font-bold">
                                V
                            </div>
                            <span className="text-xl font-bold text-white">ViroxCloud</span>
                        </Link>
                        <p className="mb-6 text-sm leading-relaxed max-w-sm">
                            Empowering improved efficiency and streamlined operations for modern enterprises. Join the revolution of automated business management.
                        </p>
                        <div className="flex gap-4">
                            {[Facebook, Twitter, Linkedin, Instagram].map((Icon, i) => (
                                <a
                                    key={i}
                                    href="#"
                                    className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary hover:text-white transition-all duration-300"
                                >
                                    <Icon size={18} />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Links Columns */}
                    {Object.entries(footerLinks).map(([category, links]) => (
                        <div key={category}>
                            <h3 className="text-white font-semibold mb-6">{category}</h3>
                            <ul className="space-y-4">
                                {links.map((link) => (
                                    <li key={link.name}>
                                        <Link href={link.href} className="text-sm hover:text-white transition-colors">
                                            {link.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                {/* Newsletter & Bottom */}
                <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
                    <p className="text-sm">
                        &copy; {new Date().getFullYear()} ViroxCloud Inc. All rights reserved.
                    </p>

                    <div className="flex items-center gap-2 bg-white/5 p-1 rounded-full pl-4 border border-white/10 focus-within:border-primary/50 transition-colors w-full md:w-auto">
                        <input
                            type="email"
                            placeholder="Subscribe to newsletter"
                            className="bg-transparent border-none focus:ring-0 text-sm text-white placeholder-gray-500 w-full outline-none"
                        />
                        <button className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white hover:bg-primary/90 transition-colors">
                            <ArrowRight size={14} />
                        </button>
                    </div>
                </div>
            </div>
        </footer>
    );
}
