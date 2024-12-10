import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgNavigationFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M480-209 199-81q-14.75 7-28.891 3.077Q155.968-81.846 146-90.887q-9.154-9.887-12.577-23.717Q130-128.434 137-143l300-684q5.97-14 18.207-21 12.238-7 24.772-7 12.535 0 24.789 7 12.254 7 18.232 21l300 684q7 14.566 3.577 28.396T814-90.887q-9.968 9.04-24.109 12.964Q775.75-74 761-81z" />
  </Svg>
);