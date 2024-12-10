import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgQuietTimeActiveFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M815-225 226-815q32-34 70-60.5t75-40.5q30-14 57.5 2t30.5 49q1 80 28.5 155.5T574-576q56 58 131.5 85.5T862-460q27 3 47.5 27.5T920-385q-18 49-44.5 89T815-225M801-39 697-142q-40 18-83 27.5t-90 9.5q-87 0-163-33t-133-90q-57-57-90-133t-33-163q0-47 9.5-90t27.5-82L39-799q-11-11-11-25.5T39-850q11-11 26-11t26 11L851-88q11 11 10.5 25.5T851-38q-11 11-25.5 10.5T801-39" />
  </Svg>
);