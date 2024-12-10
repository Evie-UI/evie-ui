import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgChatBubbleFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="m215-215-79 79q-23 23-52 11.312Q55-136.375 55-168v-643q0-39.463 27.475-67.231Q109.95-906 149-906h662q39.463 0 67.231 27.769Q906-850.463 906-811v502q0 39.05-27.769 66.525Q850.463-215 811-215z" />
  </Svg>
);