"use client";

import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { ArrowRight, Phone } from "lucide-react";

const PHONE_NUMBER = "918010382879";
const Message = "Hi%20Mohit,%0A%0AI%20came%20across%20your%20portfolio%20and%20found%20your%20work%20interesting.%0AI%27d%20love%20to%20connect%20with%20you%20regarding%20a%20potential%20opportunity%20%2F%20collaboration.";

const whatsappUrl = `https://wa.me/${PHONE_NUMBER}?text=${Message}`;
const telUrl = `tel:${PHONE_NUMBER}`;

export function WhatsAppButton({ className }: { className?: string }) {
    const { theme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    const iconFilter = mounted && theme === "dark" ? { filter: "invert(1) brightness(2)" } : { filter: "brightness(0)" };

    return (
        <Link
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
                buttonVariants({ size: "lg" }),
                "rounded-full px-8 h-14 text-base font-medium flex items-center gap-2",
                className
            )}
        >
            Contact me <ArrowRight className="w-4 h-4" />
        </Link>
    );
}

export function CallButton({ className }: { className?: string }) {
    return (
        <Link
            href={telUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
                buttonVariants({ variant: "outline", size: "lg" }),
                "rounded-full px-8 h-14 text-base font-medium flex items-center gap-2 bg-background/50 border-2",
                className
            )}
        >
            Call me <Phone className="w-4 h-4" />
        </Link>
    );
}