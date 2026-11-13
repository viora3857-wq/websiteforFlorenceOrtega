"use client";

import { useMemo, useRef, useState } from "react";
import rough from "roughjs";
import { useIsomorphicLayoutEffect } from "./use-isomorphic-layout-effect";
import type { SketchProps } from "./types";

export interface RoughSvgProps extends SketchProps {
  shape: "line" | "rectangle" | "ellipse";
  /** Margem interna em px. */
  inset?: number;
}

/** Desenha uma forma estilo "à mão" ocupando 100% do container. */
export function RoughSvg({
  shape,
  inset = 0,
  roughness = 1,
  seed = 1,
  sketchColor = "currentColor",
  bowing = 1,
  fillStyle,
  strokeWidth = 1.5,
}: RoughSvgProps) {
  const ref = useRef<SVGSVGElement>(null);
  const [size, setSize] = useState({ w: 0, h: 0 });

  useIsomorphicLayoutEffect(() => {
    const el = ref.current;
    if (!el) return;
    const measure = () => {
      const r = el.getBoundingClientRect();
      setSize((s) => (s.w === r.width && s.h === r.height ? s : { w: r.width, h: r.height }));
    };
    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  const paths = useMemo(() => {
    const { w, h } = size;
    if (w <= 0 || h <= 0) return [];
    const gen = rough.generator();
    const opts = { roughness, seed, stroke: sketchColor, bowing, strokeWidth, fillStyle };
    const iw = Math.max(1, w - inset * 2);
    const ih = Math.max(1, h - inset * 2);
    const d =
      shape === "line"
        ? gen.line(inset, h / 2, w - inset, h / 2, opts)
        : shape === "ellipse"
          ? gen.ellipse(w / 2, h / 2, iw, ih, opts)
          : gen.rectangle(inset, inset, iw, ih, opts);
    return gen.toPaths(d);
  }, [size, shape, inset, roughness, seed, sketchColor, bowing, strokeWidth, fillStyle]);

  return (
    <svg
      ref={ref}
      aria-hidden="true"
      width="100%"
      height="100%"
      style={{ display: "block", overflow: "visible" }}
    >
      {paths.map((p, i) => (
        <path
          key={i}
          d={p.d}
          stroke={p.stroke}
          strokeWidth={p.strokeWidth}
          fill={p.fill ?? "none"}
          strokeLinecap="round"
        />
      ))}
    </svg>
  );
}
