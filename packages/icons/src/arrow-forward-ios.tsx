import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgArrowForwardIos = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M567-482 264-785q-16-16-16.5-39.5T263-864q17-17 41-17t40 17l318 316q14 14 20.5 31t6.5 35q0 18-6.5 35T662-416L344-98q-17 17-40 16.5T264-99q-16-17-16.5-40t16.5-40z" />
  </Svg>
);