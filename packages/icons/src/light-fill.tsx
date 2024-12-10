import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgLightFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M480-95q-67 0-118-42.5T302-245H189q-39.05 0-66.525-27.475Q95-299.95 95-339q0-154.776 96-263.888Q287-712 433-728v-98q0-20 13.5-33.5T480-873q20 0 33.5 13.5T527-826v98q146 16 242.5 125.112T866-339q0 39.05-27.769 66.525Q810.463-245 771-245H659q-10 65-61 107.5T480-95M189-339h582q0-124-84.328-210.5-84.329-86.5-206.5-86.5Q358-636 273.5-549.743T189-339" />
  </Svg>
);