import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";

export const SvgWeight = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M240-200h481l-57.745-401H297zm240-495q22.5 0 37.75-15.25T533-748q0-22.5-15.237-37.25Q502.525-800 480-800q-22.5 0-37.25 15.094T428-747.5q0 21.562 14.75 37.031Q457.5-695 480-695m127 0h57q35.108 0 62.054 23Q753-649 757-614l57 401q6 43-21.988 75.5T721-105H240q-43.464 0-71.732-32.5T146-213l57-401q4-35 30.946-58T297-695h57q-7-12-10-24.983-3-12.984-3-28.017 0-57.083 40.5-98.042Q422-887 480-887t99 40.958q41 40.959 41 98.042 0 15.167-3.5 28.083Q613-707 607-695M240-200h481z" />
  </Svg>
);
