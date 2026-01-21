import { useEffect, useRef } from "react";
import { Eye, Shield, MousePointerClick } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const steps = [
  {
    icon: Eye,
    title: "The 'Magnet' Protocol",
    description: "We position your brand where your high-value customers are already looking.",
  },
  {
    icon: Shield,
    title: "Authority Infrastructure",
    description: "We build a digital presence that screams 'Expert' so they choose you over cheaper options.",
  },
  {
    icon: MousePointerClick,
    title: "Conversion Engine",
    description: "A seamless system that turns 'interested browsers' into 'paid bookings' automatically.",
  },
];

export const SolutionSection = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".solution-header",
        { opacity: 0, y: 60 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".solution-header",
            start: "top 85%",
          },
        }
      );

      gsap.fromTo(
        ".solution-card",
        { opacity: 0, y: 60, scale: 0.95 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          stagger: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".solution-cards",
            start: "top 80%",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="services" ref={sectionRef} className="section-padding bg-secondary/30 relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[120px]" />

      <div className="container-narrow relative z-10">
        <div className="solution-header text-center mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Our 3-Step{" "}
            <span className="text-gradient">Customer Acquisition</span> System
          </h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
            We focus only on what actually brings customers — visibility, trust, and conversion.
          </p>
        </div>

        <div className="solution-cards grid md:grid-cols-3 gap-6 lg:gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className="solution-card group relative p-8 rounded-2xl bg-card border border-border hover-glow overflow-hidden"
            >
              {/* Accent border on hover */}
              <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-accent p-[1px] rounded-2xl`}>
                <div className="w-full h-full bg-card rounded-2xl" />
              </div>

              {/* Step number */}
              <div className="absolute top-6 right-6 text-6xl font-bold text-muted/30 font-display">
                {index + 1}
              </div>

              <div className="relative z-10">
                <div className={`w-14 h-14 rounded-xl bg-accent p-[1px] mb-6`}>
                  <div className="w-full h-full rounded-xl bg-card flex items-center justify-center group-hover:bg-transparent transition-colors duration-300">
                    <step.icon className="w-7 h-7 text-accent group-hover:text-accent-foreground transition-colors duration-300" />
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-foreground mb-3 font-display">
                  {step.title}
                </h3>

                <p className="text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
