"use client";

import { Download } from "lucide-react";
import { ProfileImage } from "./profile-image";
import { WhatsAppButton } from "./contact-buttons";

export function HomeSection() {
    return (
        <section className="flex flex-col items-center text-center space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-1000">
            {/* Avatar */}
            

            {/* Greeting */}
            <div className="space-y-4">
                <h3 className="text-lg md:text-xl font-medium text-muted-foreground flex items-center justify-center gap-2">
                    Hi! I&apos;m Mohit Sharma
                </h3>

                <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif tracking-tight leading-[1.1]">
                    fullstack software developer <br />
                </h1>
            </div>

            {/* Bio */}
            <p className="max-w-2xl text-lg md:text-xl text-muted-foreground leading-relaxed text-justify">
                Full Stack Developer experienced in building scalable, AI-driven and high-performance applications using FastAPI, Next.js, Node.js, and PostgreSQL. Skilled in responsive UI design, secure API development, and efficient database architecture, with a strong focus on clean, maintainable code and performance.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center gap-4 pt-4">
                <WhatsAppButton />
                <a
                    href="/resume/mohitSharmaResume.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-full px-8 h-14 text-base font-medium flex items-center gap-2 bg-background/50 border-2 hover:bg-muted/50 transition-colors"
                >
                    My resume <Download className="w-4 h-4" />
                </a>
            </div>
        </section>
    );
}