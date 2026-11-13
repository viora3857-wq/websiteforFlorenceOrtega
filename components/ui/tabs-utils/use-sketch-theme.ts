/** Tema do traço: preto, para o site branco e minimalista. */
export const SKETCH_INK = "#141414";

export function useSketchTheme(sketchColor?: string) {
  return { ink: sketchColor ?? SKETCH_INK, accent: sketchColor ?? SKETCH_INK };
}
