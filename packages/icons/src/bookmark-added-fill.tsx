import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";

export const SvgBookmarkAddedFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="m480-212-174 74q-47 20-89-8t-42-79v-551q0-40 27-67.5t67-27.5h330q-24 27-38.5 61.5T546-739q0 68 41.5 119T691-553q24 7 46.5 7t48.5-7v328q0 51-42.5 79t-89.5 8zm249-512 119-119q11-13 28-13t29 13q13 12 12.5 29T905-785L763-640q-15 14-34.5 14T695-640l-59-60q-14-13-14-29.5t14-28.5q12-13 29-13t29 13z" />
  </Svg>
);
