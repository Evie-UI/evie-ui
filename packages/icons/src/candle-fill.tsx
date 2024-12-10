import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgCandleFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M477-633q-51 0-87-36.5T355-757q0-50 28.5-88.5T449-917q6-5 14-8t15-3q7 0 14.5 3.5T506-916q34 35 64.5 72t30.5 87q0 51-36.5 87.5T477-633m343 341q19 0 33-13.5t14-33.5q0-19-14-32t-33-13q-20 0-33.5 13T773-339q0 20 13.5 33.5T820-292M716-55H244q-63 0-106-43.5T95-205v-40q0-20 13.5-33.5T142-292h203v-207q0-39 27.5-66.5T439-593h76q40 0 67.5 27.5T610-499v207h94q-5-10-7.5-22t-2.5-25q0-51 37-87.5t89-36.5q51 0 88.5 36.5T946-339q0 41-22.5 72T866-223v19q0 63-43.5 106T716-55" />
  </Svg>
);