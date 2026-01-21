import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

export const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        { name: "Services", href: "#services" },
        { name: "FAQ", href: "#faq" },
    ];

    return (
        <nav
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
                isScrolled
                    ? "bg-background/80 backdrop-blur-md border-b border-border/50 py-3"
                    : "bg-transparent py-5"
            )}
        >
            <div className="container-narrow flex items-center justify-between">
                {/* Logo */}
                <a href="https://gwzagency.com/" className="flex items-center gap-2 z-50">
                    <img
                        src="/logo.png"
                        alt="GWZ Agency Logo"
                        className="h-8 md:h-12 w-auto object-contain bg-white/5 p-1.5 rounded-xl border border-white/10 backdrop-blur-md shadow-sm transition-all duration-300 md:hover:scale-[1.8] md:origin-left hover:bg-white/10 hover:shadow-[0_0_15px_-3px_theme(colors.accent.DEFAULT)] active:scale-95"
                    />
                </a>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center gap-8">
                    <div className="flex items-center gap-6">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                            >
                                {link.name}
                            </a>
                        ))}
                    </div>
                    <Button
                        asChild
                        className="bg-accent text-accent-foreground hover:bg-accent/90"
                    >
                        <a href="https://wa.me/916361032112?text=Hi%2C%20I%27d%20like%20a%20free%20growth%20plan" target="_blank" rel="noopener noreferrer">
                            Get Started
                        </a>
                    </Button>
                </div>

                {/* Mobile Menu Toggle */}
                <button
                    className="md:hidden z-50 text-foreground"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
                    aria-expanded={isMobileMenuOpen}
                >
                    {isMobileMenuOpen ? <X /> : <Menu />}
                </button>

                {/* Mobile Menu Overlay */}
                <div
                    className={cn(
                        "fixed inset-0 bg-background z-40 flex flex-col items-center justify-center gap-8 transition-transform duration-300 md:hidden",
                        isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
                    )}
                >
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="text-2xl font-semibold text-foreground"
                        >
                            {link.name}
                        </a>
                    ))}
                    <Button
                        asChild
                        size="lg"
                        className="mt-4 bg-accent text-accent-foreground hover:bg-accent/90"
                    >
                        <a href="https://wa.me/916361032112?text=Hi%2C%20I%27d%20like%20a%20free%20growth%20plan" target="_blank" rel="noopener noreferrer">
                            Get Started
                        </a>
                    </Button>
                </div>
            </div>
        </nav>
    );
};
