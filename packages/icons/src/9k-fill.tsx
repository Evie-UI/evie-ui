import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";

export const Svg9KFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M389-410h-95q-11 0-18 7t-7 18q0 11 7 18t18 7h112q14 0 23.5-9.5T439-393v-173q0-14-9.5-24T406-600H302q-14 0-23.5 10t-9.5 24v70q0 14 9.5 23.5T302-463h87zm-70-86v-70h70v70zm251 46 77 82q2 2 17 8 16 0 22.5-15t-4.5-26l-74-79 74-80q11-11 4.5-25.5T664-600q-5 0-9 2t-8 6l-77 82v-65q0-11-7-18t-18-7q-11 0-18 7t-7 18v190q0 11 7 18t18 7q11 0 18-7t7-18zM189-95q-39.05 0-66.525-27.475Q95-149.95 95-189v-582q0-39.463 27.475-67.231Q149.95-866 189-866h582q39.463 0 67.231 27.769Q866-810.463 866-771v582q0 39.05-27.769 66.525Q810.463-95 771-95z" />
  </Svg>
);