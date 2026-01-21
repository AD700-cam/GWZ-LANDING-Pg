import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

const Terms = () => {
    return (
        <div className="min-h-screen bg-background text-foreground py-20 px-5">
            <div className="container-narrow max-w-4xl">
                <Button asChild variant="ghost" className="mb-10 text-muted-foreground hover:text-foreground">
                    <Link to="/" className="flex items-center gap-2">
                        <ArrowLeft className="w-4 h-4" />
                        Back to Home
                    </Link>
                </Button>

                <h1 className="text-4xl md:text-5xl font-bold font-display text-accent mb-8">Terms of Service</h1>

                <div className="space-y-8 text-muted-foreground text-lg leading-relaxed">
                    <section>
                        <h2 className="text-2xl font-bold text-foreground mb-4 font-display">Agreement to Terms</h2>
                        <p>By accessing our website at gwzagency.com, you are agreeing to be bound by these terms of service, all applicable laws and regulations.</p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-foreground mb-4 font-display">Use License</h2>
                        <p>Permission is granted to temporarily view the materials on GWZ AGENCY's website for personal, non-commercial transitory viewing only.</p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-foreground mb-4 font-display">Disclaimer</h2>
                        <p>The materials on GWZ AGENCY's website are provided on an 'as is' basis. GWZ AGENCY makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties.</p>
                    </section>

                    <p className="text-sm italic">Last updated: {new Date().toLocaleDateString()}</p>
                </div>
            </div>
        </div>
    );
};

export default Terms;
