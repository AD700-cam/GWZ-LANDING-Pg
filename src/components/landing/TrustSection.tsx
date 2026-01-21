import { useEffect, useRef } from "react";
import { TrendingUp, Users, Target, Award } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const stats = [
  { icon: Users, value: "150+", label: "Local Businesses Served" },
  { icon: Target, value: "89%", label: "Client Retention Rate" },
  { icon: TrendingUp, value: "3x", label: "Average Lead Increase" },
  { icon: Award, value: "5+", label: "Years of Experience" },
];

export const TrustSection = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".trust-header",
        { opacity: 0, y: 60 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".trust-header",
            start: "top 85%",
          },
        }
      );

      gsap.fromTo(
        ".stat-card",
        { opacity: 0, scale: 0.8, y: 40 },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.1,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: ".stats-grid",
            start: "top 80%",
          },
        }
      );

      // Animate numbers counting up
      sectionRef.current?.querySelectorAll(".stat-value").forEach((el) => {
        const value = el.textContent || "";
        const numMatch = value.match(/(\d+)/);
        if (numMatch) {
          const num = parseInt(numMatch[1]);
          const suffix = value.replace(/\d+/, "");
          
          gsap.fromTo(
            { val: 0 },
            { val: num },
            {
              val: num,
              duration: 2,
              ease: "power2.out",
              scrollTrigger: {
                trigger: el,
                start: "top 85%",
              },
              onUpdate: function () {
                el.textContent = Math.round(this.targets()[0].val) + suffix;
              },
            }
          );
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="section-padding bg-secondary/30 relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[hsl(320_85%_55%/0.05)] rounded-full blur-[100px]" />
      
      <div className="container-narrow relative z-10">
        <div className="trust-header text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Trusted by Businesses Focused on{" "}
            <span className="text-gradient">Long-Term Growth</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Results-driven strategies designed for real businesses — not shortcuts or vanity metrics.
          </p>
        </div>

        <div className="stats-grid grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="stat-card p-6 rounded-2xl bg-card border border-border hover-glow text-center"
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent/20 to-[hsl(260_85%_65%/0.2)] flex items-center justify-center mx-auto mb-4">
                <stat.icon className="w-6 h-6 text-accent" />
              </div>
              <div className="stat-value text-3xl md:text-4xl font-bold text-foreground mb-1 font-display">
                {stat.value}
              </div>
              <div className="text-sm text-muted-foreground">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
