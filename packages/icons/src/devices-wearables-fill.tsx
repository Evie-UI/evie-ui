import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgDevicesWearablesFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M712.798-222Q772-222 814-263.298t42-100.5Q856-424 814.202-465.5t-101-41.5Q653-507 611.5-465.702t-41.5 101.5Q570-305 611.298-263.5t101.5 41.5M139-55q-39.75 0-67.375-27.125T44-149v-662q0-39.75 27.625-67.375T139-906h337q39.75 0 67.375 27.625T571-811v171q-29.794 15.372-53.397 36.686Q494-582 476-556v-165H139v482h297q17 43 47.5 79.5T554-98q-12 20-33 31.5T476-55zm492-47v-48q-68-26-108-84t-40-130q0-72 40-130.5T631-579v-48q0-19.75 13.625-33.375T678-674h70q19.75 0 33.375 13.625T795-627v48q68 26 108 84.5T943-364q0 72-40 130t-108 84v48q0 19.75-13.625 33.375T748-55h-70q-19.75 0-33.375-13.625T631-102" />
  </Svg>
);