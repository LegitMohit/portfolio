"use client";
import Link from "next/link";
import { ModeToggle } from "./mode-toggle";
import { Button } from "./ui/button";
import { ArrowUpRight } from "lucide-react";

export default function Header() {
  const links = [
    { to: "/", label: "Home" },
    { to: "#about", label: "About me" },
    { to: "#services", label: "Services" },
    { to: "#work", label: "My Work" },
    { to: "#contact", label: "Contact me" },
  ] as const;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 md:px-12">
      {/* Logo */}
      <div className="text-2xl font-bold tracking-tight">
        Mohit Sharma
      </div>

      {/* Navigation - Centered Pill */}
      <nav className="hidden md:flex items-center gap-1 bg-background/60 backdrop-blur-xl px-4 py-2 rounded-full border border-border shadow-sm">
        {links.map(({ to, label }) => (
          <Link
            key={label}
            href={to}
            className="px-4 py-1.5 text-sm font-medium transition-colors hover:text-primary rounded-full hover:bg-muted"
          >
            {label}
          </Link>
        ))}
      </nav>

      {/* Right Actions */}
      <div className="flex items-center gap-3">
        <ModeToggle />
        <Button variant="outline" className="rounded-full px-6 flex items-center gap-2 group border-2">
          Contact
          <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </Button>
      </div>
    </header>
  );
}
