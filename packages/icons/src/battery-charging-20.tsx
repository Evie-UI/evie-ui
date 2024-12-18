import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";

export const SvgBatteryCharging20 = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M297-55q-21 0-34.5-13.5T249-102v-692q0-20 13.5-34t34.5-14h86v-16q0-20 13.5-34t33.5-14h100q20 0 33.5 14t13.5 34v16h87q20 0 33.5 14t13.5 34v317q-24-3-48-1.5t-47 8.5v-277H344v508h98q0 56 23.5 103.5T529-55zm361-141h-55q-14 0-21-12.5t1-24.5l97-152q5-7 13.5-5t8.5 11v94h55q14 0 21 13t-1 25L680-94q-5 7-13.5 5t-8.5-11z" />
  </Svg>
);
