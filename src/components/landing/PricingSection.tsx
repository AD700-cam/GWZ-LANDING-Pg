import { useEffect, useRef } from "react";
import { Check, Star, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const packages = [
  {
    name: "Starter",
    bestFor: "Small or new businesses",
    outcome: "Build a professional online presence",
    features: [
      "Professional setup",
      "Content foundation",
      "Visibility checklist",
    ],
    cta: "Start Small & Grow",
    popular: false,
    icon: Zap,
  },
  {
    name: "Growth",
    bestFor: "Businesses wanting consistent inquiries",
    outcome: "Generate regular customer leads",
    features: [
      "Everything in Starter",
      "Lead-focused content system",
      "Inquiry optimization",
    ],
    cta: "Get More Customers",
    popular: true,
    icon: Star,
  },
  {
    name: "Authority",
    bestFor: "Brands aiming for market leadership",
    outcome: "Become the go-to brand locally",
    features: [
      "Everything in Growth",
      "Authority positioning",
      "Priority optimization",
    ],
    cta: "Build Brand Authority",
    popular: false,
    icon: Star,
  },
];

export const PricingSection = () => {
  const whatsappBase = "https://wa.me/916361032112?text=";
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".pricing-header",
        { opacity: 0, y: 60 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".pricing-header",
            start: "top 85%",
          },
        }
      );

      gsap.fromTo(
        ".pricing-card",
        { opacity: 0, y: 80, rotateX: 10 },
        {
          opacity: 1,
          y: 0,
          rotateX: 0,
          duration: 0.8,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".pricing-cards",
            start: "top 80%",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="packages" className="section-padding bg-background relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent/5 rounded-full blur-[150px]" />

      <div className="container-narrow relative z-10">
        <div className="pricing-header text-center mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">
            Simple Packages.{" "}
            <span className="text-gradient">Clear Outcomes.</span> No Confusion.
          </h2>
        </div>

        <div className="pricing-cards grid md:grid-cols-3 gap-6 lg:gap-8" style={{ perspective: "1000px" }}>
          {packages.map((pkg, index) => (
            <div
              key={index}
              className={cn(
                "pricing-card relative flex flex-col p-6 sm:p-8 rounded-2xl transition-all duration-500",
                pkg.popular
                  ? "gradient-border bg-card glow-effect scale-[1.02] z-10"
                  : "bg-card border border-border hover-glow"
              )}
            >
              {/* Popular Badge */}
              {pkg.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-accent text-accent-foreground text-sm font-semibold shadow-lg">
                  <Star className="w-4 h-4 fill-current" />
                  Most Popular
                </div>
              )}

              <div className="mb-6">
                <h3 className="text-2xl font-bold mb-2 font-display text-foreground">
                  {pkg.name}
                </h3>
                <p className="text-sm mb-4 text-muted-foreground">
                  Best for: {pkg.bestFor}
                </p>
                <p className="text-lg font-medium text-gradient">
                  {pkg.outcome}
                </p>
              </div>

              <ul className="space-y-3 mb-8 flex-grow">
                {pkg.features.map((feature, fIndex) => (
                  <li key={fIndex} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-3 h-3 text-accent" />
                    </div>
                    <span className="text-foreground/80">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button
                asChild
                size="lg"
                className={cn(
                  "w-full font-semibold py-6 rounded-xl",
                  pkg.popular
                    ? "bg-accent text-accent-foreground hover:bg-accent/90 glow-effect"
                    : "bg-secondary text-foreground hover:bg-secondary/80 border border-border"
                )}
              >
                <a
                  href={`${whatsappBase}Hi%2C%20I%27m%20interested%20in%20the%20${pkg.name}%20Package`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {pkg.cta}
                </a>
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
