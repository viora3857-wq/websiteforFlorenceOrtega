import type { MutableRefObject, Ref } from "react";
export { cn } from "@/lib/utils";

export function assignRef<T>(ref: Ref<T> | undefined, value: T | null) {
  if (!ref) return;
  if (typeof ref === "function") ref(value);
  else (ref as MutableRefObject<T | null>).current = value;
}

/** Deriva um seed estável a partir de um seed base + string (FNV-1a). */
export function deriveSeed(base: number, key: string): number {
  let h = 2166136261 ^ base;
  for (let i = 0; i < key.length; i++) {
    h ^= key.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return (Math.abs(h) % 2147483646) + 1;
}

/** Herda a fonte do site para manter a tipografia consistente. */
export const doodleUiFontFamily = "inherit";

export function doodleUiFontWeight(weight: number): number {
  return weight;
}
