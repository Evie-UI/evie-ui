import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgDisabledByDefaultFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="m480-430 119 119q11 11 25 11t26-11q11-12 11-25.5T650-362L530-480l120-119q10-11 10.5-25T650-650q-12-11-25.5-11T599-650L480-530 361-650q-11-10-24.5-10.5T311-650q-11 12-11 25.5t11 25.5l119 119-119 119q-11 11-11 24.5t11 25.5q12 11 25.5 11t25.5-11zM189-95q-39 0-66.5-27.5T95-189v-582q0-39 27.5-67t66.5-28h582q39 0 67 28t28 67v582q0 39-28 66.5T771-95z" />
  </Svg>
);