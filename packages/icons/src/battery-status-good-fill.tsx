import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgBatteryStatusGoodFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="m638-236 107-108q14-14 33.5-14t33.5 14.053q14 14.052 14 33.5Q826-291 812-277L671-136q-14.067 14-33.533 14Q618-122 604-136l-57-57q-14-14-14-33.5t14-33.5q14-13 33.5-13.5T614-260zM249-102v-692q0-19.75 13.625-33.875T297-842h86v-16q0-19.75 13.625-33.875T430-906h100q19.75 0 33.375 14.125T577-858v16h87q19.75 0 33.375 14.125T711-794v318q-9-1-18.071-1.536-9.072-.535-17.143-.607Q580-476 511.5-407.5T443-239q0 54 22.5 101.5T529-55H297q-20.75 0-34.375-13.625T249-102" />
  </Svg>
);
