import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background p-5 text-center">
      <div className="max-w-md">
        <h1 className="text-8xl font-bold font-display text-accent mb-4">404</h1>
        <h2 className="text-2xl font-bold mb-4">Page Lost in Orbit</h2>
        <p className="text-muted-foreground mb-8 text-lg">
          The page you're looking for doesn't exist or has been moved to a new destination.
        </p>
        <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 px-8 py-6 rounded-xl font-semibold">
          <Link to="/">Back to Home Base</Link>
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
