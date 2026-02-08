"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "./ui/button";
import { ArrowUpRight, Menu, X, Sun, Moon } from "lucide-react";
import { cn } from "@/lib/utils";
import { useTheme } from "next-themes";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Avoid hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMenuOpen]);

  const links = [
    { to: "/", label: "Home" },
    { to: "#about", label: "About me" },
    { to: "#services", label: "Services" },
    { to: "#contact", label: "Contact me" },
  ] as const;

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-4 py-4 md:px-12 backdrop-blur-md bg-background/50 border-b border-border/40 rounded-b-[20px] md:rounded-none md:bg-transparent md:backdrop-blur-none md:border-none">
        {/* Logo */}
        <Link href="/" className="text-xl md:text-2xl font-bold tracking-tight">
          Mohit_Sharma
        </Link>

        {/* Desktop Navigation - Centered Pill */}
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
        <div className="flex items-center gap-2 md:gap-3">
          <Button
            variant="outline"
            className="hidden md:flex rounded-full px-5 items-center gap-2 border-2"
            onClick={toggleTheme}
          >
            {mounted && (theme === "dark" ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />)}
            Toggle theme
          </Button>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-2 md:hidden hover:bg-muted rounded-full transition-colors"
            aria-label="Toggle Menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* Mobile Navigation Overlay */}
      <div
        className={cn(
          "fixed inset-0 z-40 bg-background/95 backdrop-blur-2xl md:hidden transition-all duration-300 ease-in-out flex flex-col items-center justify-center gap-8",
          isMenuOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-full pointer-events-none"
        )}
      >
        <nav className="flex flex-col items-center gap-6">
          {links.map(({ to, label }) => (
            <Link
              key={label}
              href={to}
              onClick={() => setIsMenuOpen(false)}
              className="text-2xl font-serif tracking-wide hover:text-primary transition-colors"
            >
              {label}
            </Link>
          ))}

          <div className="flex flex-col items-center gap-4 mt-4">
            <Button
              variant="outline"
              size="lg"
              className="rounded-full px-8 h-12 text-lg flex items-center gap-2 border-2"
              onClick={toggleTheme}
            >
              {mounted && (theme === "dark" ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />)}
              Toggle theme
            </Button>
          </div>
        </nav>
      </div>
    </>
  );
}


