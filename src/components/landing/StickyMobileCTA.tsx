import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export const StickyMobileCTA = () => {
  const whatsappLink = "https://wa.me/916361032112?text=Hi%2C%20I%27d%20like%20a%20free%20growth%20plan";

  return (
    <div className="fixed bottom-0 left-0 right-0 p-4 bg-background/80 backdrop-blur-xl border-t border-border md:hidden z-50">
      <Button
        asChild
        size="lg"
        className="w-full bg-accent text-accent-foreground hover:bg-accent/90 glow-effect font-semibold py-6 rounded-xl"
      >
        <a
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2"
        >
          <MessageCircle className="w-5 h-5" />
          Get a Free Growth Plan
        </a>
      </Button>
    </div>
  );
};
