import { ArrowRight, Layout, Smartphone, Palette, Image } from "lucide-react";

export function Services() {
    const services = [
        {
            title: "Web development",
            description: "Web development is the process of building, programming, and maintaining websites. It involves creating functional and visually appealing digital experiences.",
            icon: <Layout className="w-5 h-5 text-white" />,
        },
        {
            title: "UI/UX design",
            description: "UI/UX design focuses on creating a seamless user experience. It involves understanding user needs and designing intuitive, engaging interfaces.",
            icon: <Palette className="w-5 h-5 text-white" />,
        },
        {
            title: "Backend Services",
            description: "Backend services are the server-side components of a web application that handle data storage, business logic, and API integrations.",
            icon: <Image className="w-5 h-5 text-white" />,
        },
        {
            title: "Testing & Quality Assurance",
            description: "Testing & Quality Assurance is the process of evaluating and verifying that a software application meets the specified requirements and quality standards.",
            icon: <Smartphone className="w-5 h-5 text-white" />,
        }
    ];

    return (
        <section id="services" className="py-24 px-6 max-w-6xl mx-auto">
            <div className="flex flex-col items-center text-center mb-16 px-4 animate-in fade-in slide-in-from-bottom-4 duration-700 fill-mode-both">
                <span className="text-muted-foreground font-medium mb-2 tracking-wider">What I offer</span>
                <h2 className="text-4xl md:text-5xl font-serif">My Services</h2>
                <p className="mt-4 text-muted-foreground max-w-2xl text-lg leading-relaxed text-justify">
                    Skilled in building and maintaining web applications, developing frontend and backend features, working with databases, fixing bugs, and deploying applications. Comfortable working with modern frameworks, APIs, and version control tools, and capable of collaborating with teams to deliver reliable, well-defined software solutions.
                </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {services.map((service, index) => (
                    <div
                        key={index}
                        className="p-8 rounded-2xl border border-border bg-card hover:border-primary/50 hover:shadow-xl transition-all duration-300 group flex flex-col h-full animate-in fade-in slide-in-from-bottom-4 duration-700 fill-mode-both"
                        style={{ animationDelay: `${index * 100}ms` }}
                    >
                        <div className="w-12 h-12 rounded-xl bg-pink-500/90 flex items-center justify-center mb-6 shadow-md group-hover:scale-110 transition-transform">
                            {service.icon}
                        </div>
                        <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                            {service.title}
                        </h3>
                        <p className="text-muted-foreground text-sm leading-relaxed mb-8 flex-grow">
                            {service.description}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
}
