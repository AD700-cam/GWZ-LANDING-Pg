import { useEffect, useRef } from "react";
import { MapPin, Shield, X, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { gsap } from "gsap";

const trustIndicators = [
  { icon: MapPin, text: "Local business focused" },
  { icon: Shield, text: "Transparent process" },
  { icon: X, text: "Cancel anytime" },
];

export const HeroSection = () => {
  const whatsappLink = "https://wa.me/916361032112?text=Hi%2C%20I%27d%20like%20a%20free%20growth%20plan";
  const heroRef = useRef<HTMLElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!heroRef.current) return;

    const tl = gsap.timeline({ defaults: { ease: "power4.out" } });

    // Animate background orbs
    gsap.to(bgRef.current?.querySelectorAll(".orb") || [], {
      y: "random(-20, 20)",
      x: "random(-20, 20)",
      duration: 4,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
      stagger: 0.5,
    });

    // Hero content animation
    tl.fromTo(
      ".hero-badge",
      { opacity: 0, y: 30, scale: 0.9 },
      { opacity: 1, y: 0, scale: 1, duration: 0.8 }
    )
      .fromTo(
        ".hero-headline",
        { opacity: 0, y: 80 },
        { opacity: 1, y: 0, duration: 1.2 },
        "-=0.4"
      )
      .fromTo(
        ".hero-headline .text-gradient",
        { backgroundPosition: "200% center" },
        { backgroundPosition: "0% center", duration: 1.5 },
        "-=0.8"
      )
      .fromTo(
        ".hero-subheadline",
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 0.8 },
        "-=0.8"
      )
      .fromTo(
        ".hero-trust-item",
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.5, stagger: 0.1 },
        "-=0.4"
      )
      .fromTo(
        ".hero-cta",
        { opacity: 0, y: 30, scale: 0.9 },
        { opacity: 1, y: 0, scale: 1, duration: 0.6, stagger: 0.15 },
        "-=0.3"
      );

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <section ref={heroRef} className="relative min-h-[100vh] flex items-center overflow-hidden bg-background">
      {/* Animated Background */}
      <div ref={bgRef} className="absolute inset-0">
        <div className="orb absolute top-20 right-20 w-[500px] h-[500px] rounded-full bg-accent/10 blur-[120px]" />
        <div className="orb absolute bottom-20 left-20 w-[400px] h-[400px] rounded-full bg-accent/5 blur-[100px]" />
        <div className="orb absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-accent/5 blur-[150px]" />
        {/* Grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(hsl(var(--border)/0.3)_1px,transparent_1px),linear-gradient(90deg,hsl(var(--border)/0.3)_1px,transparent_1px)] bg-[size:60px_60px] [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_70%)]" />
      </div>

      <div className="container-narrow section-padding relative z-10 w-full">
        <div className="max-w-4xl">

          {/* Badge */}
          <div className="hero-badge inline-flex items-center gap-2 px-4 py-2 rounded-full border border-accent/30 bg-accent/10 text-accent text-sm font-medium mb-8">
            <Sparkles className="w-4 h-4" />
            <span>Guaranteed Results or You Don't Pay</span>
          </div>

          {/* Headline */}
          <h1 className="hero-headline text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-extrabold text-foreground leading-[1.1] md:leading-[1.05] mb-6">
            Stop Chasing Clients. <br className="hidden md:block" />
            <span className="text-gradient bg-[length:200%_auto]">Let Them Come To You.</span>
          </h1>

          {/* Subheadline */}
          <p className="hero-subheadline text-base md:text-lg lg:text-xl text-muted-foreground leading-relaxed mb-8 max-w-2xl">
            We build automated growth engines that flood your business with qualified leads every single day. No guesswork. No wasted ad spend. Just predictable revenue.
          </p>

          {/* Trust Indicators */}
          <div className="flex flex-wrap gap-4 md:gap-6 mb-10">
            {trustIndicators.map((item, index) => (
              <div
                key={index}
                className="hero-trust-item flex items-center gap-2 text-muted-foreground"
              >
                <div className="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center">
                  <item.icon className="w-4 h-4 text-accent" />
                </div>
                <span className="text-sm font-medium">{item.text}</span>
              </div>
            ))}
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              asChild
              size="lg"
              className="hero-cta bg-accent text-accent-foreground hover:bg-accent/90 glow-effect text-base font-semibold px-8 py-6 rounded-xl"
            >
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                Claim Your Free Growth Plan
              </a>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="hero-cta border-border text-foreground hover:bg-secondary hover:border-accent/50 text-base font-medium px-8 py-6 rounded-xl"
            >
              <a href="#results">See Our Results</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
