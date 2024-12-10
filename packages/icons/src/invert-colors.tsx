import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgInvertColors = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M479.77-95Q338-95 236.5-193.079 135-291.157 135-433.728 135-505 161.5-567.5 188-630 237-677l193-190q10-11 23.5-16t26.5-5q13 0 26.5 5t23.5 16l193 190q49.064 46.613 76.032 109.347Q826-504.919 826-434q0 141.684-101.73 240.342Q622.541-95 479.77-95m.23-94v-594L301-606q-35 35-53.5 78T229-434q0 103.644 73.5 174.322T480-189" />
  </Svg>
);