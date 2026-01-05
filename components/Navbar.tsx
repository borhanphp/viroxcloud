"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { clsx } from "clsx";

const navLinks = [
    {
        name: "Solutions",
        href: "/solutions",
        dropdown: [
            { name: "Enterprise ERP", href: "/erp" },
            { name: "CRM Solutions", href: "/crm" },
            { name: "HR Management", href: "/hrm" },
            { name: "Supply Chain", href: "/inventory" },
        ]
    },
    { name: "Services", href: "/services" },
    { name: "Industries", href: "/industries" },
    { name: "Company", href: "/about" },
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    // Handle scroll effect for glassmorphism intensity
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav
            className={clsx(
                "fixed top-0 w-full z-50 transition-all duration-300 border-b",
                scrolled
                    ? "bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-slate-200 dark:border-white/10 py-3 shadow-sm"
                    : "bg-white/60 dark:bg-slate-900/60 backdrop-blur-sm border-transparent py-5"
            )}
        >
            <div className="container mx-auto px-6 flex items-center justify-between">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-2 group">
                    <div className="w-10 h-10 bg-gradient-to-br from-indigo-600 to-violet-600 rounded-xl flex items-center justify-center text-white font-bold text-xl shadow-lg shadow-indigo-500/20 group-hover:scale-105 transition-transform duration-300">
                        V
                    </div>
                    <span className="text-2xl font-bold text-slate-900 dark:text-white tracking-tight">
                        ViroxCloud
                    </span>
                </Link>

                {/* Desktop Navigation */}
                <div className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="text-sm font-semibold text-slate-600 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-white transition-colors relative group"
                        >
                            {link.name}
                        </Link>
                    ))}
                    <Link
                        href="#contact"
                        className="px-6 py-2.5 bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-semibold rounded-full hover:shadow-lg hover:shadow-indigo-500/20 active:scale-95 transition-all duration-300"
                    >
                        Get Started
                    </Link>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-slate-900 dark:text-white p-2"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X /> : <Menu />}
                </button>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="absolute top-full left-0 w-full bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-white/10 shadow-xl md:hidden flex flex-col p-6 gap-4"
                    >
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                onClick={() => setIsOpen(false)}
                                className="text-lg font-medium text-slate-900 dark:text-white flex items-center justify-between group py-2"
                            >
                                {link.name}
                                <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-indigo-600" />
                            </Link>
                        ))}
                        <div className="h-px bg-slate-100 dark:bg-white/5 my-2" />
                        <Link
                            href="/contact"
                            onClick={() => setIsOpen(false)}
                            className="px-6 py-2.5 rounded-full bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-500 hover:to-violet-500 text-white font-medium text-sm transition-all shadow-lg hover:shadow-indigo-500/30 ring-1 ring-white/10"
                        >
                            Get Started
                        </Link>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}
