import { useId, useMemo } from "react";
import { deriveSeed } from "./utils";

/** Usa o seed informado ou gera um estável (igual no SSR e no cliente). */
export function useResolvedSeed(seed?: number): number {
  const id = useId();
  return useMemo(() => seed ?? deriveSeed(7, id), [seed, id]);
}
