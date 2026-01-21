import { useEffect, useRef } from "react";
import { Shield } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const faqs = [
  {
    question: "How soon can I see results?",
    answer: "Visibility starts immediately once we implement your strategy. Lead generation timelines depend on your market and chosen package, but most clients see measurable improvements within the first 30-60 days.",
  },
  {
    question: "Is there a contract?",
    answer: "We operate on a month-to-month basis unless otherwise agreed. We believe in earning your business every month, not locking you in.",
  },
  {
    question: "Who is this not for?",
    answer: "This isn't for anyone looking for overnight results or magic tricks. We work with business owners who understand that sustainable growth takes strategy, consistency, and patience.",
  },
];

export const FAQSection = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".risk-box",
        { opacity: 0, y: 40, scale: 0.95 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".risk-box",
            start: "top 85%",
          },
        }
      );

      gsap.fromTo(
        ".faq-header",
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".faq-header",
            start: "top 85%",
          },
        }
      );

      gsap.fromTo(
        ".faq-item",
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".faq-container",
            start: "top 80%",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="faq" ref={sectionRef} className="section-padding bg-secondary/30 relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-accent/5 rounded-full blur-[100px]" />

      <div className="container-narrow relative z-10">
        {/* Risk Reversal Box */}
        <div className="max-w-2xl mx-auto mb-16">
          <div className="risk-box flex items-center gap-4 p-6 md:p-8 rounded-2xl gradient-border bg-card">
            <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
              <Shield className="w-6 h-6 text-accent" />
            </div>
            <p className="text-xl md:text-2xl font-bold text-foreground font-display">
              No Long-Term Contracts. No False Promises.
            </p>
          </div>
        </div>

        <div className="faq-header text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground font-display">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="faq-container max-w-2xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="faq-item bg-card rounded-xl px-6 border border-border hover-glow"
              >
                <AccordionTrigger className="text-left text-lg font-semibold text-foreground hover:no-underline py-5">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pb-5">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};
