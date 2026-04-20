import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

type RevealVariant = "fade-up" | "fade-down" | "fade-left" | "fade-right" | "zoom" | "blur";

interface Props {
  children: React.ReactNode;
  className?: string;
  variant?: RevealVariant;
  delay?: number;
  duration?: number;
  threshold?: number;
  once?: boolean;
}

const variantStyles: Record<RevealVariant, { hidden: string; visible: string }> = {
  "fade-up": {
    hidden: "opacity-0 translate-y-8",
    visible: "opacity-100 translate-y-0",
  },
  "fade-down": {
    hidden: "opacity-0 -translate-y-8",
    visible: "opacity-100 translate-y-0",
  },
  "fade-left": {
    hidden: "opacity-0 translate-x-8",
    visible: "opacity-100 translate-x-0",
  },
  "fade-right": {
    hidden: "opacity-0 -translate-x-8",
    visible: "opacity-100 translate-x-0",
  },
  zoom: {
    hidden: "opacity-0 scale-90",
    visible: "opacity-100 scale-100",
  },
  blur: {
    hidden: "opacity-0 blur-sm scale-[0.97]",
    visible: "opacity-100 blur-0 scale-100",
  },
};

export function RevealOnScroll({
  children,
  className,
  variant = "fade-up",
  delay = 0,
  duration = 700,
  threshold = 0.15,
  once = true,
}: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (once) observer.unobserve(el);
        } else if (!once) {
          setIsVisible(false);
        }
      },
      { threshold, rootMargin: "0px 0px -40px 0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold, once]);

  const styles = variantStyles[variant];

  return (
    <div
      ref={ref}
      className={cn(
        "transition-all will-change-[transform,opacity,filter]",
        isVisible ? styles.visible : styles.hidden,
        className
      )}
      style={{
        transitionDuration: `${duration}ms`,
        transitionDelay: `${delay}ms`,
        transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
      }}
    >
      {children}
    </div>
  );
}

/** Wrap each child in a staggered reveal */
export function StaggerReveal({
  children,
  className,
  variant = "fade-up",
  stagger = 100,
  duration = 700,
  threshold = 0.1,
}: {
  children: React.ReactNode[];
  className?: string;
  variant?: RevealVariant;
  stagger?: number;
  duration?: number;
  threshold?: number;
}) {
  return (
    <>
      {children.map((child, i) => (
        <RevealOnScroll
          key={i}
          variant={variant}
          delay={i * stagger}
          duration={duration}
          threshold={threshold}
          className={className}
        >
          {child}
        </RevealOnScroll>
      ))}
    </>
  );
}
