import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgWifiCallingFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M797-95q-122 0-247-58T319-317Q212-424 153.5-549.5T95-796q0-29 20-49.5t49-20.5h140q31 0 50.5 16.5T381-802l27 110q4 26-1.5 46T385-612l-104 95q22 36 47 68t57 62q33 35 66.5 61t68.5 44l100-101q17-18 38-24t45 0l99 23q31 9 47.5 29t16.5 50v141q0 29-20.5 49T797-95M670-591 517-746q-17-17-9.5-33.5T531-806q43-25 85-37t88-12q49 0 93 12t85 37q15 9 21 26t-9 32L738-591q-15 14-34.5 14T670-591" />
  </Svg>
);
