import { ArrowRight, Layout, Smartphone, Palette, Image } from "lucide-react";

export function Services() {
    const services = [
        {
            title: "Web development",
            description: "Skilled in building and maintaining web applications from architecture to deployment. Experienced in developing responsive frontend features, integrating APIs, and optimizing performance using modern frameworks.",
            icon: <Layout className="w-5 h-5 text-white" />,
        },
        {
            title: "UI/UX design",
            description: "Adept at translating wireframes into accessible, visually consistent interfaces. Collaborates effectively with designers to bridge design and implementation across all screen sizes.",
            icon: <Palette className="w-5 h-5 text-white" />,
        },
        {
            title: "Backend Services",
            description: "Experienced in building RESTful APIs, backend systems, and database-driven architectures. Proficient in server-side frameworks, authentication, and cloud deployments with clean, maintainable code.",
            icon: <Image className="w-5 h-5 text-white" />,
        },
        {
            title: "Testing & Quality Assurance",
            description: "Committed to quality through unit, integration, and end-to-end testing. Comfortable in Agile workflows and code reviews to consistently deliver well-validated software.",
            icon: <Smartphone className="w-5 h-5 text-white" />,
        }
    ];

    return (
        <section id="services" className="py-10 md:py-24 px-6 max-w-6xl mx-auto">
            <div className="flex flex-col items-center text-center mb-16 px-4 animate-in fade-in slide-in-from-bottom-4 duration-700 fill-mode-both">
                <span className="text-muted-foreground font-medium mb-2 tracking-wider">What I offer</span>
                <h2 className="text-4xl md:text-5xl font-serif">My Services</h2>
               
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
