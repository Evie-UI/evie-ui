import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";

export const SvgDangerous = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M359-95q-19 0-37-7.5T291-123L123-291q-13-13-20.5-31T95-359v-242q0-19 7.5-37t20.5-31l168-168q13-13 31-21t37-8h242q19 0 37 8t31 21l168 168q13 13 21 31t8 37v242q0 19-8 37t-21 31L669-123q-13 13-31 20.5T601-95zm0-94h242l170-170v-242L601-771H359L189-601v242zm121-241 95 95q10 11 24 10.5t26-11.5q11-11 11-25t-11-25l-95-94 95-95q11-10 11-24t-11-26q-12-11-25.5-11T575-625l-95 95-94-95q-11-11-25-11t-25 11q-11 12-11 25.5t11 24.5l94 95-95 94q-11 11-10.5 25t11.5 25q11 11 25 11t25-11zm0-50" />
  </Svg>
);