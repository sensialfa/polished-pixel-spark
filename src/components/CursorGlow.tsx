import { useEffect, useRef } from "react";

export function CursorGlow() {
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const glow = glowRef.current;
    if (!glow) return;

    let x = -200;
    let y = -200;
    let targetX = -200;
    let targetY = -200;
    let raf: number;

    const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

    const animate = () => {
      x = lerp(x, targetX, 0.15);
      y = lerp(y, targetY, 0.15);
      glow.style.transform = `translate(${x - 150}px, ${y - 150}px)`;
      raf = requestAnimationFrame(animate);
    };

    const onMove = (e: MouseEvent | TouchEvent) => {
      const point = "touches" in e ? e.touches[0] : e;
      if (!point) return;
      targetX = point.clientX;
      targetY = point.clientY;
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    window.addEventListener("touchmove", onMove, { passive: true });
    raf = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("touchmove", onMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div
      ref={glowRef}
      className="pointer-events-none fixed left-0 top-0 z-[9999] h-[300px] w-[300px] rounded-full opacity-20"
      style={{
        background:
          "radial-gradient(circle, hsl(var(--electric) / 0.5) 0%, hsl(var(--electric) / 0.15) 40%, transparent 70%)",
        willChange: "transform",
      }}
    />
  );
}
