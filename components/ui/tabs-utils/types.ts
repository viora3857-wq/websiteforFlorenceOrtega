export type SketchFillStyle = "hachure" | "solid" | "zigzag" | "cross-hatch" | "dots" | "dashed" | "zigzag-line";

/** Props compartilhadas pelos componentes "sketch" (traço à mão). */
export interface SketchProps {
  roughness?: number;
  seed?: number;
  sketchColor?: string;
  bowing?: number;
  fillStyle?: SketchFillStyle;
  strokeWidth?: number;
}
