import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgMultilineChartFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M882-296q0 20-13.5 33.5T835-249q-21 0-33.5-13.5T787-296q-4-51-20-97t-40-88L615-356q-28 31-68.5 32T477-352l-97-98-220 220q-13 14-32 13.5T95-231q-13-14-13.5-33T95-297l218-218q27-27 66-27.5t67 27.5l98 98 129-146q-60-65-132.5-100T383-698q-72 0-137.5 26T127-599q-7 6-15 10t-18 4q-20 0-33.5-14T47-633q0-11 4.5-20T64-668q64-58 145-91.5T383-793q102 0 193.5 43.5T736-631l65-73q14-14 33.5-15t34.5 14q12 13 12.5 30.5T870-643l-78 90q31 43 60.5 124T882-296" />
  </Svg>
);