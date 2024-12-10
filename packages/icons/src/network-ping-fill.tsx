import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgNetworkPingFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M158-200q-20 0-33.5-13.5T111-247q0-20 13.5-33.5T158-294h249L53-648q-14-14-13.5-33T53-714q14-14 33-14t33 14l360 359 243-242q-5-12-8-24t-3-25q0-48 33-81.5t81-33.5q47 0 80.5 33.5T939-646q0 48-33.5 81T825-532q-9 0-15.5-1t-14.5-3L554-294h248q20 0 34 13.5t14 33.5q0 20-14 33.5T802-200z" />
  </Svg>
);