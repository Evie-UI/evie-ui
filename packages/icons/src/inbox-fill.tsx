import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgInboxFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M189-95q-39.05 0-66.525-27.475Q95-149.95 95-189v-582q0-39.463 27.475-67.231Q149.95-866 189-866h582q39.463 0 67.231 27.769Q866-810.463 866-771v582q0 39.05-27.769 66.525Q810.463-95 771-95zm291-203q33 0 61-15.5t45-44.5q7.229-12.6 21.571-17.8 14.343-5.2 30.717-5.2H771v-390H189v390h134q14.948 0 29.36 5.2 14.411 5.2 21.64 17.8 17 29 45 44.5t61 15.5" />
  </Svg>
);