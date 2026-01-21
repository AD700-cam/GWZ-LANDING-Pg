import { useEffect, useState } from "react";
import { gsap } from "gsap";

const Preloader = () => {
    const [complete, setComplete] = useState(false);

    useEffect(() => {
        const tl = gsap.timeline({
            onComplete: () => setComplete(true),
        });

        tl.to(".preloader-text", {
            opacity: 1,
            y: 0,
            duration: 0.4,
            ease: "power4.out",
            stagger: 0.03,
        })
            .to(".preloader-text", {
                opacity: 0,
                y: -10,
                duration: 0.2,
                ease: "power4.in",
                delay: 0.1,
                stagger: 0.01,
            })
            .to(".preloader-bg", {
                yPercent: -100,
                duration: 0.6,
                ease: "expo.inOut",
            });

        return () => {
            tl.kill();
        };
    }, []);

    if (complete) return null;

    return (
        <div className="preloader-bg fixed inset-0 z-[10000] bg-background flex flex-col items-center justify-center overflow-hidden">
            <div className="flex gap-2 overflow-hidden">
                {["G", "W", "Z", " ", "A", "G", "E", "N", "C", "Y"].map((char, i) => (
                    <span
                        key={i}
                        className="preloader-text opacity-0 translate-y-20 text-4xl md:text-6xl font-bold font-display text-accent inline-block"
                    >
                        {char === " " ? "\u00A0" : char}
                    </span>
                ))}
            </div>
            <div className="absolute bottom-10 left-10 overflow-hidden">
                <div className="preloader-text opacity-0 translate-y-10 text-xs tracking-widest text-muted-foreground uppercase">
                    Guaranteed Results Protocol v2.5
                </div>
            </div>
        </div>
    );
};

export default Preloader;
