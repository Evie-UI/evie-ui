import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgCallFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M797-95q-122 0-247-58T319-317Q212-424 153.5-549.5T95-796q0-29 20-49.5t49-20.5h140q31 0 50.5 16.5T381-802l27 110q4 26-1.5 46T385-612l-104 95q22 36 47 68t57 62q33 35 66.5 61t68.5 44l100-101q17-18 38-24t45 0l99 23q31 9 47.5 29t16.5 50v141q0 29-20.5 49T797-95" />
  </Svg>
);
