import { Code2, GraduationCap, Briefcase } from "lucide-react";
import { ProfileImage } from "./profile-image";

export function AboutMe() {
    const stats = [
        {
            icon: <Code2 className="w-6 h-6" />,
            title: "Languages",
            description: "TypeScript, React Js, Next Js, Express Js, MongoDB, PostgreSQL",
        },
        {
            icon: <GraduationCap className="w-6 h-6" />,
            title: "Education",
            description: "Bachelor of Computer Applications",
        },
        {
            icon: <Briefcase className="w-6 h-6" />,
            title: "Projects",
            description: "Built more than 5 projects",
        },
    ];

    const tools = [
        { name: "VS Code", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" }, { name: "MongoDB", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
        { name: "Figma", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" },
        { name: "Git", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
    ];

    return (
        <section id="about" className="py-10 md:py-24 px-6 max-w-6xl mx-auto">
            <div className="flex flex-col items-center text-center mb-16">
                <span className="text-muted-foreground font-medium mb-2">Introduction</span>
                <h2 className="text-4xl md:text-5xl font-serif">About me</h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
                {/* Left: Image */}
                <div className="lg:col-span-4 flex justify-center">
                    <ProfileImage
                        variant="rounded"
                        className="w-full max-w-[320px] aspect-[4/5] shadow-2xl"
                        size={600}
                    />
                </div>

                {/* Right: Content */}
                <div className="lg:col-span-8 flex flex-col gap-8">
                    <p className="text-lg text-muted-foreground leading-relaxed text-justify">
                        I am an experienced full stack developer with one year of hands-on professional experience delivering scalable web solutions. I have worked with government organizations, contributing to projects that enhanced efficiency and supported organizational growth.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        {stats.map((stat, index) => (
                            <div
                                key={index}
                                className="p-6 rounded-2xl border border-border bg-card hover:shadow-md transition-shadow flex flex-col gap-3"
                            >
                                <div className="text-primary">{stat.icon}</div>
                                <h3 className="font-semibold text-lg">{stat.title}</h3>
                                <p className="text-sm text-muted-foreground mb-1">{stat.description}</p>
                            </div>
                        ))}
                    </div>

                    <div className="space-y-4 pt-4">
                        <h4 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">Tools I use</h4>
                        <div className="flex flex-wrap gap-4">
                            {tools.map((tool, index) => (
                                <div
                                    key={index}
                                    className="w-12 h-12 rounded-xl border border-border flex items-center justify-center bg-background p-2.5 hover:scale-110 transition-transform shadow-sm"
                                    title={tool.name}
                                >
                                    {/* eslint-disable-next-line @next/next/no-img-element */}
                                    <img src={tool.src} alt={tool.name} className="w-full h-full object-contain filter dark:invert-0" />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
