import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

const Privacy = () => {
    return (
        <div className="min-h-screen bg-background text-foreground py-20 px-5">
            <div className="container-narrow max-w-4xl">
                <Button asChild variant="ghost" className="mb-10 text-muted-foreground hover:text-foreground">
                    <Link to="/" className="flex items-center gap-2">
                        <ArrowLeft className="w-4 h-4" />
                        Back to Home
                    </Link>
                </Button>

                <h1 className="text-4xl md:text-5xl font-bold font-display text-accent mb-8">Privacy Policy</h1>

                <div className="space-y-8 text-muted-foreground text-lg leading-relaxed">
                    <section>
                        <h2 className="text-2xl font-bold text-foreground mb-4 font-display">Introduction</h2>
                        <p>At GWZ AGENCY, we respect your privacy and are committed to protecting your personal data. This privacy policy informs you about how we handle your personal data when you visit our website.</p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-foreground mb-4 font-display">Data We Collect</h2>
                        <p>We may collect, use, store and transfer different kinds of personal data about you, including Identity Data (name, username), Contact Data (email, phone number), and Technical Data (IP address, browser type).</p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-foreground mb-4 font-display">How We Use Your Data</h2>
                        <p>We use your data only to provide our services, manage our relationship with you, and improve our website performance.</p>
                    </section>

                    <p className="text-sm italic">Last updated: {new Date().toLocaleDateString()}</p>
                </div>
            </div>
        </div>
    );
};

export default Privacy;
