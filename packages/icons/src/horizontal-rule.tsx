import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgHorizontalRule = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M182-433q-19.75 0-33.375-13.675Q135-460.351 135-480.175 135-500 148.625-513.5 162.25-527 182-527h596q19.75 0 33.875 13.675Q826-499.649 826-479.825 826-460 811.875-446.5 797.75-433 778-433z" />
  </Svg>
);