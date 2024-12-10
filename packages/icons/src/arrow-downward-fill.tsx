import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgArrowDownwardFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M433-315v-463q0-19.875 13.5-33.938Q460-826 480-826t33.5 14.062Q527-797.875 527-778v463l198-198q14-14 33.673-14.58 19.672-.58 33.927 13.5Q807-500 806.5-480.182 806-460.364 792-446L514-168q-7.167 6.909-16.194 10.955Q488.778-153 479.889-153q-8.889 0-17.839-4.045Q453.1-161.091 446-168L168-447q-15-15.5-15-34.25T168.232-514q14.072-14 32.92-14Q220-528 234-514z" />
  </Svg>
);