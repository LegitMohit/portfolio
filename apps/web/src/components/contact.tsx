"use client";

import React, { useRef, useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { ArrowRight } from "lucide-react";
import { toast } from "sonner";

export function Contact() {
    const form = useRef<HTMLFormElement>(null);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const sendEmail = (e: React.FormEvent) => {
        e.preventDefault();

        if (!form.current) return;

        setIsSubmitting(true);

        const SERVICE_ID = "service_r40tgkp";
        const TEMPLATE_ID = "template_bni1gpz";
        const PUBLIC_KEY = "Uu1742a_QZ_VymGTm";

        emailjs
            .sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY)
            .then(
                () => {
                    toast.success("Message sent successfully!");
                    form.current?.reset();
                },
                (error: any) => {
                    console.error("FAILED...", error.text || error);
                    toast.error("Failed to send message. Please try again later.");
                }
            )
            .finally(() => {
                setIsSubmitting(false);
            });
    };

    return (
        <section id="contact" className="py-24 px-6 max-w-6xl mx-auto">
            <div className="flex flex-col items-center text-center mb-16 px-4 animate-in fade-in slide-in-from-bottom-4 duration-700 fill-mode-both">
                <span className="text-muted-foreground font-medium mb-2 tracking-wider">
                    Connect with me
                </span>
                <h2 className="text-4xl md:text-5xl font-serif">Get in touch</h2>
                <p className="mt-4 text-muted-foreground max-w-2xl text-lg leading-relaxed">
                    I'd love to hear from you! If you have any questions, comments, or
                    feedback, please use the form below.
                </p>
            </div>

            <div className="max-w-3xl mx-auto">
                <form
                    ref={form}
                    onSubmit={sendEmail}
                    className="flex flex-col gap-6 animate-in fade-in slide-in-from-bottom-6 duration-1000 fill-mode-both"
                >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-1">
                            <Input
                                type="text"
                                name="user_name"
                                placeholder="Enter your name"
                                required
                                className="h-14 px-4 text-base rounded-xl border-border/50 focus:border-primary transition-all bg-card"
                            />
                        </div>
                        <div className="space-y-1">
                            <Input
                                type="email"
                                name="user_email"
                                placeholder="Enter your email"
                                required
                                className="h-14 px-4 text-base rounded-xl border-border/50 focus:border-primary transition-all bg-card"
                            />
                        </div>
                    </div>
                    <div className="space-y-1">
                        <Textarea
                            name="message"
                            placeholder="Enter your message"
                            required
                            className="min-h-[200px] p-4 text-base rounded-xl border-border/50 focus:border-primary transition-all bg-card resize-none"
                        />
                    </div>

                    <div className="flex justify-center mt-6">
                        <Button
                            type="submit"
                            disabled={isSubmitting}
                            className="rounded-full px-4 py-2 h-auto text-lg bg-zinc-900 text-white hover:bg-zinc-800 dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-zinc-200 transition-all group shadow-lg hover:shadow-xl active:scale-95"
                        >
                            {isSubmitting ? "Mailing..." : "Send mail"}
                            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </Button>
                    </div>
                </form>
            </div>
        </section>
    );
}
