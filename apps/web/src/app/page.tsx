import { Button } from "@/components/ui/button";
import { ArrowRight, Download } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center pt-32 pb-20 px-6 max-w-5xl mx-auto">
      {/* Hero Content */}
      <div className="flex flex-col items-center text-center space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-1000">

        {/* Avatar */}
        <div className="relative w-28 h-28 md:w-32 md:h-32 mb-2">
          <div className="absolute inset-0 bg-primary/20 blur-2xl rounded-full -z-10" />
          <Image
            src="/mohitSharmaProfileImage.jpg"
            alt="Mohit Sharma"
            width={128}
            height={128}
            className="rounded-full border-4 border-background shadow-xl object-cover"
          />
        </div>

        {/* Greeting */}
        <div className="space-y-4">
          <h3 className="text-lg md:text-xl font-medium text-muted-foreground flex items-center justify-center gap-2">
            Hi! I&apos;m Mohit Sharma
          </h3>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif tracking-tight leading-[1.1]">
            fullstack software developer <br />
            <span className="italic">based in India.</span>
          </h1>
        </div>

        {/* Bio */}
        <p className="max-w-2xl text-lg md:text-xl text-muted-foreground leading-relaxed">
          Full Stack Developer experienced in building scalable, high-performance applications using Next.js, Node.js, and PostgreSQL. Skilled in responsive UI design, secure API development, and efficient database architecture, with a strong focus on clean, maintainable code and performance. 
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center gap-4 pt-4">
          <Button size="lg" className="rounded-full px-8 h-14 text-base font-medium flex items-center gap-2">
            contact me <ArrowRight className="w-4 h-4" />
          </Button>
          <Button variant="outline" size="lg" className="rounded-full px-8 h-14 text-base font-medium flex items-center gap-2 bg-background/50 border-2">
            my resume <Download className="w-4 h-4" />
          </Button>
        </div>
      </div>

      {/* Stats/Socials Placeholder or extra section could go here */}
    </main>
  );
}
