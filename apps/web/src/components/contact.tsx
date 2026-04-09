"use client";
import { WhatsAppButton, CallButton } from "./contact-buttons";

export function Contact() {

    return (
        <section id="contact" className="py-10 md:py-24 px-6 max-w-6xl mx-auto">
            <div className="flex flex-col items-center text-center mb-16 px-4 animate-in fade-in slide-in-from-bottom-4 duration-700 fill-mode-both">
                <span className="text-muted-foreground font-medium mb-2 tracking-wider">
                    Connect with me
                </span>
                <h2 className="text-4xl md:text-5xl font-serif">Get in touch</h2>
                <p className="mt-4 text-muted-foreground max-w-2xl text-lg leading-relaxed">
                    Let's connect and build something great together — reach out via WhatsApp or give me a call!
                </p>
            </div>

            <div className="flex justify-center gap-4 mb-16 animate-in fade-in slide-in-from-bottom-6 duration-700 fill-mode-both">
                <WhatsAppButton />
                <CallButton />
            </div>
        </section>
    );
}