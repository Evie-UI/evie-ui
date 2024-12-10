import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgNavigation = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M480-209 199-81q-14.75 7-28.875 3T146-90.887q-9-9.887-12.5-23.717Q130-128.434 137-143l300-684q5.646-14 17.802-21 12.156-7 25.177-7 13.021 0 25.194 7 12.173 7 17.827 21l300 684q7 14.566 3.5 28.396T814-90.887Q804-82 789.875-78T761-81zm-203-11 203-90 203 90-203-473zm203-90" />
  </Svg>
);