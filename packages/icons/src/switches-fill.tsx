import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgSwitchesFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M264-272q-86.545 0-146.772-59.472Q57-390.945 57-479q0-88.055 59.228-147.527Q175.455-686 264.449-686q51.065 0 93.308 22Q400-642 427-601h354q51.083 0 86.542 35.458Q903-530.083 903-479t-35.458 86.542Q832.083-357 781-357H427q-27.209 41-69.105 63Q316-272 264-272m202-168h314.886q16.714 0 27.914-11.2Q820-462.4 820-479t-11.2-27.8Q797.6-518 780.886-518H466q4 8 4.5 19t.5 20q0 9-.5 20t-4.5 19" />
  </Svg>
);