import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgWaterEcFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M480-55q-148 0-246.5-101T135-408q0-54 21.5-110.5t61-115Q257-692 312-752t121-120q11-9 22.5-13t24.5-4q13 0 24.5 4t22.5 13q66 60 121 120t94.5 118.5Q782-575 804-518.5T826-408q0 151-99 252T480-55m-30-355v118q0 18 16.5 23.5T493-278l104-156q8-12 1-24t-21-12h-67v-119q0-17-16.5-22.5T467-602L363-447q-8 13-1 25t22 12z" />
  </Svg>
);