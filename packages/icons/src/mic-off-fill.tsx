import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgMicOffFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="m733-350-61-61q13-14 19.5-32.5T701-481q3-17 15-29.5t30-12.5q17 0 28.5 12.5T783-481q-5 36-17 69.5T733-350M593-488 345-736v-69q10-37 44-64.5t79-27.5q54 0 92 37.5t38 91.5v245q0 6-1 18.5t-4 16.5M427-116v-98q-107-12-184-85.5T152-481q-3-17 8.5-29.5T190-523q18 0 30 12.5t16 30.5q16 83 82.5 135.5T468-292q45 0 85.5-16.5T627-353l60 60q-36 34-81 53.5T509-214v98q0 18-12 30t-29 12q-18 0-29.5-12T427-116m378 32L55-833q-9-9-9.5-22.5T55-879q9-9 22.5-9t23.5 9l749 750q9 9 9.5 22T850-84q-9 9-22.5 9T805-84" />
  </Svg>
);