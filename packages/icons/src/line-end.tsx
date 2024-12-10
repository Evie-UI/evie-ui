import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgLineEnd = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M773-373q-32.086 0-57.543-16.5T677-433H127q-20.75 0-34.375-13.675Q79-460.351 79-480.175 79-500 92.625-513.5 106.25-527 127-527h550q13-27 38.457-43.5T773-587q44.8 0 75.9 31.141 31.1 31.141 31.1 76T848.9-404q-31.1 31-75.9 31" />
  </Svg>
);