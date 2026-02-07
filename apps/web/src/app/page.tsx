import { HomeSection } from "@/components/home-section";
import { AboutMe } from "@/components/about-me";

export default function Home() {
  return (
    <div className="flex flex-col">
      <main className="flex min-h-screen flex-col items-center pt-32 pb-20 px-6 max-w-5xl mx-auto">
        <HomeSection />
      </main>

      <AboutMe />
    </div>
  );
}
