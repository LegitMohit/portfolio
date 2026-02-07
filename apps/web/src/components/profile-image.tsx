"use client";

import Image from "next/image";
import { useState } from "react";
import { Skeleton } from "@/components/ui/skeleton";
import { cn } from "@/lib/utils";

interface ProfileImageProps {
    className?: string;
    size?: number;
    priority?: boolean;
    variant?: "circle" | "rounded";
}

export function ProfileImage({
    className,
    size = 400,
    priority = false,
    variant = "circle"
}: ProfileImageProps) {
    const [isLoading, setIsLoading] = useState(true);

    return (
        <div className={cn(
            "relative overflow-hidden bg-muted flex items-center justify-center",
            variant === "circle" ? "rounded-full" : "rounded-3xl",
            className
        )}>
            {isLoading && (
                <Skeleton className="absolute inset-0 z-10" />
            )}
            <Image
                src="/MohitSharmaProfileImage.jpg"
                alt="Mohit Sharma"
                width={size}
                height={size}
                priority={priority}
                onLoad={() => setIsLoading(false)}
                className={cn(
                    "object-cover w-full h-full transition-opacity duration-500",
                    isLoading ? "opacity-0" : "opacity-100"
                )}
            />
        </div>
    );
}
