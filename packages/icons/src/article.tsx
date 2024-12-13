import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";

export const SvgArticle = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M189-95q-39.05 0-66.525-27.475Q95-149.95 95-189v-582q0-39.463 27.475-67.231Q149.95-866 189-866h582q39.463 0 67.231 27.769Q866-810.463 866-771v582q0 39.05-27.769 66.525Q810.463-95 771-95zm0-94h582v-582H189zm0-582v582zm123 487h215q11.75 0 20.875-8.675 9.125-8.676 9.125-21.5Q557-326 547.875-335T527-344H312q-12.75 0-21.375 9.175-8.625 9.176-8.625 21.5 0 12.325 8.625 20.825T312-284m0-166h337q11.75 0 20.875-8.675 9.125-8.676 9.125-21.5 0-12.825-9.125-21.325T649-510H312q-12.75 0-21.375 8.675-8.625 8.676-8.625 21.5 0 12.825 8.625 21.325T312-450m.333-167H649q11.75 0 20.875-8.675 9.125-8.676 9.125-21.5Q679-659 669.875-668T649-677H312.333q-12.891 0-21.612 9.175-8.721 9.176-8.721 21.5 0 12.325 8.721 20.825t21.612 8.5" />
  </Svg>
);
