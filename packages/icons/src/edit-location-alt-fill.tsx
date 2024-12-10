import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgEditLocationAltFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M480-79q-13 0-26.5-4.5T430-97q-48-40-100-90.5t-95.5-109Q191-355 163-420.5T135-555q0-160 104.5-255.5T480-906q43 0 83 10t78 29L425-651q-14 14-21.5 31.5T396-583v39q0 29 21 50t50 21h39q19 0 36.5-8t31.5-21l216-215q16 36 26 76.5t10 85.5q0 110-75 221T531-97q-11 9-24.5 13.5T480-79m256-727 28 29-230 230q-7 7-15 10.5t-17 3.5h-11q-14 0-24.5-11T456-569v-10q0-9 3.5-17t10.5-15l230-230zm69-11-65-65 36-36q9-9 22.5-8t22.5 10l18 18q10 10 10 23t-10 24z" />
  </Svg>
);