import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgEditOffFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M608-429 431-607l237-237q9-9 22.5-15t27.5-6q13 0 26 5.5t25 14.5l77 74q10 12 15 25.5t5 27.5q0 14-5.5 27.5T846-667zM783-72 516-338 302-123q-14 13-31.5 20.5T234-95h-91q-20 0-33.5-13.5T96-142v-90q0-19 7.5-36.5T124-300l215-215L71-783q-10-10-11-25t10-26q11-10 25-10t25 10l713 714q10 10 10.5 24T834-72q-11 11-25.5 11T783-72m-60-608 40-39-42-43-41 40z" />
  </Svg>
);
