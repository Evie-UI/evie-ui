import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgAirplayFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="m305-155 141-142q14-14 34-14t34 14l142 142q16 17 7 39t-32 22H330q-24 0-33-22t8-39m-160-19q-37 0-63.5-27.5T55-269v-502q0-39 27.5-67t66.5-28h662q39 0 67 28t28 67v502q0 40-27 67.5T816-174h-99L545-345q-28-28-66-28t-66 28L242-174z" />
  </Svg>
);
