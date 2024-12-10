import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgBookFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M229-55q-39.05 0-66.525-27.475Q135-109.95 135-149v-662q0-39.463 27.475-67.231Q189.95-906 229-906h502q39.463 0 67.231 27.769Q826-850.463 826-811v662q0 39.05-27.769 66.525Q770.463-55 731-55zm259-756v226q0 13 11.733 20 11.734 7 23.267 0l38-22q10.71-6 23.855-6T609-587l38 22q11.226 7 23.113 0Q682-572 682-585v-226z" />
  </Svg>
);