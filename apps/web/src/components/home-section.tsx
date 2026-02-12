"use client";

import { useState, useEffect } from "react";
import { Button, buttonVariants } from "@/components/ui/button";
import { ArrowRight, Download } from "lucide-react";
import { ProfileImage } from "./profile-image";
import Link from "next/link";
import { cn } from "@/lib/utils";

export function HomeSection() {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => {
            const userAgent = typeof navigator !== 'undefined' ? navigator.userAgent : '';
            setIsMobile(/Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent));
        };
        checkMobile();
    }, []);

    const gmailUrl = "https://mail.google.com/mail/?view=cm&fs=1&to=msharma7744@gmail.com&su=Regarding%20Opportunity%20%2F%20Collaboration%20%E2%80%93%20From%20Your%20Portfolio&body=Hi%20Mohit,%0A%0AI%20came%20across%20your%20portfolio%20and%20found%20your%20work%20interesting.%0AI%E2%80%99d%20love%20to%20connect%20with%20you%20regarding%20a%20potential%20opportunity%20%2F%20collaboration.%0A%0APlease%20let%20me%20know%20a%20good%20time%20to%20discuss%20further.%0A%0ALooking%20forward%20to%20hearing%20from%20you.%0A%0ABest%20regards,%0A%5BYour%20Name%5D";
    const mailtoUrl = "mailto:msharma7744@gmail.com?subject=Regarding%20Opportunity%20%2F%20Collaboration%20%E2%80%93%20From%20Your%20Portfolio&body=Hi%20Mohit,%0A%0AI%20came%20across%20your%20portfolio%20and%20found%20your%20work%20interesting.%0AI%E2%80%99d%20love%20to%20connect%20with%20you%20regarding%20a%20potential%20opportunity%20%2F%20collaboration.%0A%0ABest%20regards,%0A%5BYour%20Name%5D";

    return (
        <section className="flex flex-col items-center text-center space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-1000">
            {/* Avatar */}
            <div className="relative w-28 h-28 md:w-32 md:h-32 mb-2 flex items-center justify-center">
                <div className="absolute inset-0 bg-primary/20 blur-2xl rounded-full -z-10" />
                <ProfileImage
                    size={128}
                    variant="circle"
                    priority
                    className="border-4 border-background shadow-xl"
                />
            </div>

            {/* Greeting */}
            <div className="space-y-4">
                <h3 className="text-lg md:text-xl font-medium text-muted-foreground flex items-center justify-center gap-2">
                    Hi! I&apos;m Mohit Sharma
                </h3>

                <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif tracking-tight leading-[1.1]">
                    fullstack software developer <br />
                    <span className="italic">based in Nagpur.</span>
                </h1>
            </div>

            {/* Bio */}
            <p className="max-w-2xl text-lg md:text-xl text-muted-foreground leading-relaxed text-justify">
                Full Stack Developer experienced in building scalable, high-performance applications using Next.js, Node.js, and PostgreSQL. Skilled in responsive UI design, secure API development, and efficient database architecture, with a strong focus on clean, maintainable code and performance.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center gap-4 pt-4">
                <Link
                    href={isMobile ? mailtoUrl : gmailUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={cn(
                        buttonVariants({ size: "lg" }),
                        "rounded-full px-8 h-14 text-base font-medium flex items-center gap-2"
                    )}
                >
                    contact me <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                    href="https://drive.google.com/file/d/1nMchPNU0IJaVR5YhU0sQpHca_03oypr-/view?usp=sharing"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={cn(
                        buttonVariants({ variant: "outline", size: "lg" }),
                        "rounded-full px-8 h-14 text-base font-medium flex items-center gap-2 bg-background/50 border-2"
                    )}
                >
                    my resume <Download className="w-4 h-4" />
                </Link>
            </div>
        </section>
    );
}
