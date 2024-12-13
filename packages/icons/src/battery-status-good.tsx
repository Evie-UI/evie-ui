import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgBatteryStatusGood = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="m638-236 107-108q14-14 33.5-14t33.5 13.579q14 14.579 14 34T812-277L671-136q-14.467 14-33.733 14Q618-122 604-136l-57-57q-14-14.364-14-33.682t14.286-33.231q13.285-13.087 33-13.587Q600-274 614-260zM297-55q-20.75 0-34.375-13.625T249-102v-692q0-19.625 13.625-33.812Q276.25-842 297-842h86v-16q0-19.625 13.625-33.812Q410.25-906 430-906h100q19.75 0 33.375 14.188Q577-877.625 577-858v16h87q19.75 0 33.375 14.188Q711-813.625 711-794v318q-24-4-48-2.5t-47 8.5v-277H344v598h119q11 28 27 51.5T529-55z" />
  </Svg>
);
