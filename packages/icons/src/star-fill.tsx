import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";

export const SvgStarFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M480-201 292-87q-14 8-28 7t-25-9q-11-8-16-20.5t-2-28.5l50-214-166-145q-12-10-15.5-23.5T90-547q3-13 14.5-22t27.5-10l219-19 85-203q6-15 18.5-22t25.5-7q13 0 25.5 7t18.5 22l85 203 220 19q15 1 26.5 10t14.5 22q4 13 .5 26.5T855-497L689-352l50 214q3 16-2 28.5T721-89q-11 8-25 9t-28-7z" />
  </Svg>
);