import Link from "next/link";

export function Footer() {
    return (
        <footer className="w-full py-12 px-6">
            <div className="text-center mb-12">
                <p className="text-[40px] md:text-[60px] font-serif font-bold uppercase tracking-tighter leading-none mb-2">
                    MOHIT SHARMA
                </p>
                <p className="text-lg md:text-xl text-muted-foreground font-medium tracking-tight">
                    msharma7744@gmail.com
                </p>
            </div>

            <div className="max-w-6xl mx-auto">

                <div className="w-full h-px bg-border/40 mb-12" />
                <div className="flex flex-col md:flex-row justify-between items-center gap-8">
                    <div className="text-muted-foreground text-sm font-medium">
                        © {new Date().getFullYear()} Mohit Sharma. All rights reserved.
                    </div>

                    <nav className="flex items-center gap-8">
                        <Link
                            href="https://github.com/LegitMohit"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sm font-medium hover:text-primary transition-colors"
                        >
                            GitHub
                        </Link>
                        <Link
                            href="https://www.linkedin.com/in/mohit-sharma-a98a95218/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sm font-medium hover:text-primary transition-colors"
                        >
                            LinkedIn
                        </Link>
                        <Link
                            href="https://twitter.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sm font-medium hover:text-primary transition-colors"
                        >
                            Twitter
                        </Link>
                    </nav>
                </div>
            </div>
        </footer>
    );
}
