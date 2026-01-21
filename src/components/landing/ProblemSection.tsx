import { useEffect, useRef } from "react";
import { AlertCircle } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const painPoints = [
  "You're amazing at what you do, but nobody knows you exist",
  "You're relying on 'word of mouth' (and it's drying up)",
  "You tried running ads, but just burned cash with zero results",
  "Your competitors are stealing your clients with worse service",
];


export const ProblemSection = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".problem-headline",
        { opacity: 0, y: 60 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".problem-headline",
            start: "top 85%",
          },
        }
      );

      gsap.fromTo(
        ".pain-point",
        { opacity: 0, x: -40 },
        {
          opacity: 1,
          x: 0,
          duration: 0.6,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".pain-points-container",
            start: "top 80%",
          },
        }
      );

      gsap.fromTo(
        ".bridge-box",
        { opacity: 0, y: 40, scale: 0.95 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".bridge-box",
            start: "top 85%",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="section-padding bg-background relative overflow-hidden">
      {/* Subtle background accent */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-accent/5 rounded-full blur-[100px]" />

      <div className="container-narrow relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="problem-headline text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-12">
            You're Not Struggling Because{" "}
            <span className="text-gradient">Your Business Is Bad</span>
          </h2>
        </div>

        <div className="pain-points-container max-w-2xl mx-auto mb-12">
          <ul className="space-y-4">
            {painPoints.map((point, index) => (
              <li
                key={index}
                className="pain-point flex items-start gap-4 p-5 rounded-xl bg-secondary/50 border border-border hover-glow"
              >
                <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <AlertCircle className="w-5 h-5 text-accent" />
                </div>
                <span className="text-foreground/90 text-lg leading-relaxed">{point}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="max-w-2xl mx-auto">
          <div className="bridge-box relative p-8 md:p-10 rounded-2xl gradient-border bg-card">
            <p className="text-lg md:text-xl font-medium leading-relaxed text-center text-foreground">
              "Most businesses don't fail at marketing — they fail because they don't have a{" "}
              <span className="text-gradient font-semibold">clear customer acquisition system.</span>"
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
