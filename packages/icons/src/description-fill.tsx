import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgDescriptionFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M355-248h251q14.9 0 24.95-10.57Q641-269.14 641-284.07T630.95-309Q620.9-319 606-319H354q-14.9 0-24.95 10.07-10.05 10.07-10.05 25t10.55 25.43Q340.1-248 355-248m0-170h251q14.9 0 24.95-10.57Q641-439.14 641-454.07T630.95-479Q620.9-489 606-489H354q-14.9 0-24.95 10.07-10.05 10.07-10.05 25t10.55 25.43Q340.1-418 355-418M229-55q-39.05 0-66.525-27.475Q135-109.95 135-149v-662q0-39.463 27.475-67.231Q189.95-906 229-906h323q19.311 0 37.156 8Q607-890 620-877l177 177q13 13 21 30.844 8 17.845 8 37.156v483q0 39.05-27.769 66.525Q770.463-55 731-55zm313-617q0 19.75 13.625 33.375T589-625h142L542-811z" />
  </Svg>
);