import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgChipsFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M288-441h384q16.3 0 28.65-12Q713-465 713-482t-12.35-29Q688.3-523 672-523H288q-16.3 0-28.65 12Q247-499 247-482t12.35 29q12.35 12 28.65 12M189-95q-39.05 0-66.525-27.475Q95-149.95 95-189v-582q0-39.463 27.475-67.231Q149.95-866 189-866h582q39.463 0 67.231 27.769Q866-810.463 866-771v582q0 39.05-27.769 66.525Q810.463-95 771-95z" />
  </Svg>
);