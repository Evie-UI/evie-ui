import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";

export const SvgHowToRegFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M397-495q-77 0-126-49t-49-126q0-77 49-126t126-49q77 0 126.5 49T573-670q0 77-49.5 126T397-495M146-122q-40 0-67-27.5T52-216v-27q0-40 21.5-75t60.5-53q72-32 137.5-47T397-433q29 0 73 5.5t78 14.5l-49 51q-41 42-41.5 100t41.5 99l41 41zm499-100 189-188q10-11 24-11t25 11q11 11 11 25t-11 25L679-156q-14 14-33.5 14T612-156l-91-91q-11-11-11-24.5t12-24.5q10-11 24-11t25 11z" />
  </Svg>
);
