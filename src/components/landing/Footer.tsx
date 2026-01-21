import { MessageCircle, Mail, MapPin } from "lucide-react";

export const Footer = () => {
  const whatsappLink = "https://wa.me/916361032112";

  return (
    <footer className="bg-card border-t border-border py-12 px-5 md:px-8">
      <div className="container-narrow">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          {/* Brand */}
          <div className="text-center md:text-left">
            <a href="https://gwzagency.com/">
              <h3 className="text-2xl font-bold font-display mb-2 text-gradient">
                GWZ AGENCY
              </h3>
            </a>
            <p className="text-muted-foreground text-sm">
              Marketing systems for local businesses
            </p>
          </div>

          {/* Contact Links */}
          <div className="flex flex-wrap justify-center gap-6">
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-muted-foreground hover:text-accent transition-colors"
            >
              <MessageCircle className="w-4 h-4" />
              <span className="text-sm">WhatsApp</span>
            </a>
            <a
              href="mailto:hello@gwzagency.com"
              className="flex items-center gap-2 text-muted-foreground hover:text-accent transition-colors"
            >
              <Mail className="w-4 h-4" />
              <span className="text-sm">hello@gwzagency.com</span>
            </a>
            <div className="flex items-center gap-2 text-muted-foreground/60">
              <MapPin className="w-4 h-4" />
              <span className="text-sm">Available Worldwide</span>
            </div>
          </div>
        </div>

        <div className="mt-10 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground/60 text-sm">
            © {new Date().getFullYear()} GWZ AGENCY. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="/privacy" className="text-xs text-muted-foreground/60 hover:text-accent transition-colors">Privacy Policy</a>
            <a href="/terms" className="text-xs text-muted-foreground/60 hover:text-accent transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
