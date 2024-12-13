import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgNoPhotographyFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="m820-50-45-45H149q-40 0-67-27t-27-67v-495q0-40 27-67.5t67-27.5h36v95L47-823q-10-10-10.5-24.5T47-873q11-11 25.5-11T98-873l773 772q10 11 10 25.5T870-50q-10 10-24.5 10T820-50m86-118L653-419q3-39-8-76.5T606-561q-29-28-66.5-39.5T462-609L285-787l45-52q13-14 29.5-20.5T396-866h169q18 0 35 6.5t30 20.5l57 60h124q40 0 67.5 27.5T906-684zm-423-91q26 0 51.5-7t48.5-22L332-539q-15 23-22 48.5t-7 51.5q0 75 52.5 127.5T483-259m-4-80q-40 0-68-28t-28-68q0-19 7-37t21-32l137 137q-14 14-32 21t-37 7" />
  </Svg>
);
