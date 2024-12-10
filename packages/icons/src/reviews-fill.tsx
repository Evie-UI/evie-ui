import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgReviewsFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M215-215 96-96q-11 11-26 5.5T55-112v-699q0-39 27.5-67t66.5-28h662q39 0 67 28t28 67v502q0 39-28 66.5T811-215zm265-239 70 43q13 8 25.5-1.5T585-438l-19-78 61-53q12-10 7-25t-20-16l-81-7-31-74q-6-14-22-14t-22 14l-31 74-81 7q-15 1-20 16t7 25l61 53-18 78q-4 16 8.5 25.5T410-411z" />
  </Svg>
);