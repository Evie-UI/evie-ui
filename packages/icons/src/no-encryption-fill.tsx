import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgNoEncryptionFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M826-255 420-662h167v-73q0-46-33-78t-79-32q-47 0-79 31.5T364-737v19l-76-76q13-65 64.5-105.5T475-940q86 0 146 59t60 144v75h50q40 0 67.5 27.5T826-567zM229-57q-40 0-67-27.5T135-151v-416q0-31 19-57t45-29L12-841Q1-851 .5-865T12-890q11-11 25-11t25 11L912-41q10 11 10 25T911 9q-11 11-25 11.5T861 10l-81-82q-7 6-20.5 10.5T731-57zm201-366q-11 10-16.5 24t-5.5 30q0 31 21.5 52.5T483-295q16 0 29-5.5t24-15.5z" />
  </Svg>
);
