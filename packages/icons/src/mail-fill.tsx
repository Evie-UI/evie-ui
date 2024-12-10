import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgMailFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M149-135q-39.05 0-66.525-27.475Q55-189.95 55-229v-502q0-39.463 27.475-67.231Q109.95-826 149-826h662q39.463 0 67.231 27.769Q906-770.463 906-731v502q0 39.05-27.769 66.525Q850.463-135 811-135zm331-305q7 0 13-2t13.139-6.05L797-643q5-2.5 9.5-9.75t4.5-16.515q0-17.368-16.5-28.551Q778-709 761-697L480-513 200-697q-17-11-34-2t-17 28.841q0 8.864 5 16.011 5 7.148 10.189 11.213l289.693 194.886Q461-444 467-442t13 2" />
  </Svg>
);