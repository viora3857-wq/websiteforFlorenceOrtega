import { useEffect, useState, type RefObject } from "react";
import { useIsomorphicLayoutEffect } from "./use-isomorphic-layout-effect";

export const DRAW_IN_MARK_MS = 420;

function prefersReducedMotion() {
  return typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

/** Resolve se a animação deve rodar (respeita prefers-reduced-motion). */
export function useAnimate(animate?: boolean): boolean {
  const [reduced, setReduced] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduced(mq.matches);
    const on = () => setReduced(mq.matches);
    mq.addEventListener("change", on);
    return () => mq.removeEventListener("change", on);
  }, []);
  return (animate ?? true) && !reduced;
}

/** Anima o "desenho" dos paths SVG dentro de ref via stroke-dashoffset. */
export function useDrawIn(
  ref: RefObject<HTMLElement | null>,
  durationMs: number,
  enabled: boolean,
  key?: unknown,
) {
  useIsomorphicLayoutEffect(() => {
    const el = ref.current;
    if (!el || !enabled || prefersReducedMotion()) return;
    let raf = 0;
    const run = () => {
      const paths = el.querySelectorAll<SVGPathElement>("path");
      if (!paths.length) {
        raf = requestAnimationFrame(run);
        return;
      }
      paths.forEach((p) => {
        const len = p.getTotalLength();
        p.style.transition = "none";
        p.style.strokeDasharray = `${len}`;
        p.style.strokeDashoffset = `${len}`;
        p.getBoundingClientRect();
        p.style.transition = `stroke-dashoffset ${durationMs}ms cubic-bezier(0.65, 0, 0.35, 1)`;
        p.style.strokeDashoffset = "0";
      });
    };
    raf = requestAnimationFrame(run);
    return () => cancelAnimationFrame(raf);
  }, [enabled, key, durationMs]);
}
