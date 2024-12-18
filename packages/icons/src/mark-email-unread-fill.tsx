import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgMarkEmailUnreadFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M760-633q-53.5 0-90.25-36.75T633-760q0-53.5 36.75-90.25T760-887q53.5 0 90.25 36.75T887-760q0 53.5-36.75 90.25T760-633M149-135q-39.05 0-66.525-27.475Q55-189.95 55-229v-502q0-39.463 27.475-67.231Q109.95-826 149-826h415q-9 24-11 47.5t2 47.5q4.82 37 21.91 68.5T621-608l-141 95-279-186q-17-11-34.5-1.75T149-670q0 8.25 4 15.625T164-643l290 195q12 9 26 9t26-9l180-121q17 8.5 35.5 12.25T760-553q42 0 79-15t67-44v383q0 39.05-27.769 66.525Q850.463-135 811-135z" />
  </Svg>
);
