"use client";

import { useEffect } from "react";
import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { usePathname } from "next/navigation";

gsap.registerPlugin(ScrollTrigger);

export function MotionProvider() {
  const pathname = usePathname();

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.15,
      smoothWheel: true,
      wheelMultiplier: 0.9,
      touchMultiplier: 1.2,
    });

    let frame = 0;
    const raf = (time: number) => {
      lenis.raf(time);
      frame = requestAnimationFrame(raf);
    };

    frame = requestAnimationFrame(raf);
    lenis.on("scroll", ScrollTrigger.update);

    return () => {
      cancelAnimationFrame(frame);
      lenis.destroy();
    };
  }, []);

  useEffect(() => {
    ScrollTrigger.refresh();

    const reveals = gsap.utils.toArray<HTMLElement>("[data-reveal]");
    reveals.forEach((el, i) => {
      gsap.fromTo(
        el,
        { y: 42, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.1,
          delay: i * 0.06,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 92%",
          },
        }
      );
    });

    const fades = gsap.utils.toArray<HTMLElement>("[data-fade]");
    fades.forEach((el, i) => {
      gsap.fromTo(
        el,
        { opacity: 0 },
        {
          opacity: 1,
          duration: 1.2,
          delay: i * 0.08,
          ease: "power2.out",
          scrollTrigger: {
            trigger: el,
            start: "top 92%",
          },
        }
      );
    });

    const parallaxes = gsap.utils.toArray<HTMLElement>("[data-parallax]");
    parallaxes.forEach((el) => {
      gsap.to(el, {
        yPercent: -18,
        ease: "none",
        scrollTrigger: {
          trigger: el,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });
    });

    const glows = gsap.utils.toArray<HTMLElement>(".keyvisual-glow");
    glows.forEach((el) => {
      gsap.fromTo(
        el,
        { opacity: 0.72, scale: 0.985 },
        {
          opacity: 1,
          scale: 1,
          duration: 1.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 86%",
          },
        }
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      gsap.killTweensOf("[data-reveal]");
      gsap.killTweensOf("[data-fade]");
      gsap.killTweensOf("[data-parallax]");
      gsap.killTweensOf(".keyvisual-glow");
    };
  }, [pathname]);

  return null;
}
