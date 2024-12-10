import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgRestaurantMenuFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M479-408 200-129q-15 14-34 14t-32-14q-15-14-15-33t15-33l391-392q-20-54-3-107.5t58-96.5q43-42 116-59.5T818-819q50 50 31.5 122T786-579q-38 40-90.5 57.5T592-522l-47 48 279 279q14 14 14 33t-14 33q-15 14-33.5 14T758-129zm-203-56L161-579q-54-54-57-115t30-121q12-17 33-19t37 14l215 213z" />
  </Svg>
);