import { useEffect, useRef } from "react";
import { MessageCircle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const FinalCTASection = () => {
  const whatsappLink = "https://wa.me/916361032112?text=Hi%2C%20I%27d%20like%20a%20free%20growth%20plan";
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".cta-content",
        { opacity: 0, y: 60, scale: 0.95 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".cta-content",
            start: "top 85%",
          },
        }
      );

      // Animate floating orbs
      gsap.to(".cta-orb", {
        y: "random(-30, 30)",
        x: "random(-30, 30)",
        duration: 5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        stagger: 0.5,
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="section-padding bg-background relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0">
        <div className="cta-orb absolute top-20 right-20 w-[400px] h-[400px] rounded-full bg-accent/10 blur-[100px]" />
        <div className="cta-orb absolute bottom-20 left-20 w-[300px] h-[300px] rounded-full bg-accent/5 blur-[80px]" />
        <div className="cta-orb absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-accent/5 blur-[120px]" />
      </div>

      <div className="container-narrow relative z-10">
        <div className="cta-content text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 font-display">
            Ready to Get More Customers —{" "}
            <span className="text-gradient">Without Confusion?</span>
          </h2>

          <p className="text-lg text-muted-foreground mb-10">
            Let's discuss your business and create a growth plan tailored to your goals.
          </p>

          <Button
            asChild
            size="lg"
            className="bg-accent text-accent-foreground hover:bg-accent/90 glow-effect text-lg font-semibold px-10 py-7 rounded-xl group"
          >
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3"
            >
              <MessageCircle className="w-5 h-5" />
              Book Your Free Strategy Call
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};
