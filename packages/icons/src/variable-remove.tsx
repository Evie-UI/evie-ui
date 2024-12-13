import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgVariableRemove = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M625-255H142q-20 0-33.5-13.5T95-302v-356q0-19.875 13.5-33.938Q122-706 142-706h676q19.875 0 33.938 14.062Q866-677.875 866-658v163h-95v-116H189v262h436zm-436-94v-262zm623 88-55 55q-11 11-24.5 10.5t-23.457-10.457Q698-217 698-230t11-24l55-55-55-54q-11-11-11-24t11-24q11-11 24-11t24 11l55 54 54-54q11-11 24.5-10.5t23.457 10.457Q925-400 925-387t-11 24l-55 54 55 55q11 11 10.5 24.5t-10.457 23.457Q903-195 890-195t-24-11z" />
  </Svg>
);
