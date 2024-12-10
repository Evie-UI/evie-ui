import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";

export const SvgUTurnRightFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M267.825-124Q248-124 234.5-137.625 221-151.25 221-171v-434q0-108.5 75.75-184.75T482-866q108.5 0 184.75 76.25T743-605v172l57-57q14-14 32.5-14t33.5 14q14 14 14 33t-14 33L729-288q-7 7-15.633 11-8.634 4-18.5 4Q686-273 677-277t-15-11L525-424q-14-14-14-32.5t15-33.5q14-14 31.5-14.5T590-491l58 58v-172q0-68.775-48.659-117.388Q550.681-771 481.841-771 412-771 363.5-722.388 315-673.775 315-605v434q0 19.75-13.675 33.375Q287.649-124 267.825-124" />
  </Svg>
);