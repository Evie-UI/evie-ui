import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgSaveAsFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M242-575h358v-143H242zM456-95H189q-39 0-66.5-27.5T95-189v-582q0-39 27.5-67t66.5-28h465q19 0 37 8t31 21l115 115q13 13 21 31t8 37v210q-23-13-47-17t-48 1q-20 2-38.5 10.5T698-425L570-297q7-14 10.5-29.5T584-358q0-43-30.5-73.5T480-462q-43 0-73.5 30.5T376-358q0 43 30.5 73.5T480-254q16 0 31-3.5t29-10.5l-57 57q-13 13-20 30t-7 37zm60 33v-78q0-9 3.5-17t10.5-15l211-211q11-11 24.5-16.5T794-405q14 0 28 6t25 17l37 37q11 11 16.5 24.5T906-293q0 15-6 29t-17 25L673-28q-7 7-15 10t-17 3h-78q-20 0-33.5-13.5T516-62m285-199 30-32-37-37-31 31z" />
  </Svg>
);
