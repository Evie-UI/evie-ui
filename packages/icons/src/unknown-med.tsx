import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgUnknownMed = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M117-433q-27.917 0-47.458-19.576Q50-472.152 50-500.118q0-27.965 19.542-47.424Q89.083-567 117-567h256q27.917 0 47.458 19.576Q440-527.848 440-499.882q0 27.965-19.542 47.424Q400.917-433 373-433zm470 0q-27.917 0-47.458-19.576Q520-472.152 520-500.118q0-27.965 19.542-47.424Q559.083-567 587-567h256q27.917 0 47.458 19.576Q910-527.848 910-499.882q0 27.965-19.542 47.424Q870.917-433 843-433z" />
  </Svg>
);