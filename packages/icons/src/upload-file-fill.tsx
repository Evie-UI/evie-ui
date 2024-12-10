import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";

export const SvgUploadFileFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M452.397-413v175.303q0 12.871 8.301 21.284Q469-208 482-208t21.5-8.412q8.5-8.412 8.5-21.283V-413l63 63q2 2 14-3t23-9q11-4 15-2.946 4 1.053-10 15.16 9-7.785 8-20.5Q624-383 616-392l-102-98q-7.4-6.909-16.2-10.955Q489-505 480-505t-17.8 4.045Q453.4-496.909 446-490L346-390q-10 10-9.962 22.136.039 12.137 9.962 19.864 8.727 9.917 20.864 8.958Q379-340 388-348zM229-55q-39.05 0-66.525-27.475Q135-109.95 135-149v-662q0-39.463 27.475-67.231Q189.95-906 229-906h323q18.867 0 36.933 8Q607-890 620-877l177 177q13 13 21 31.067 8 18.066 8 36.933v483q0 39.05-27.769 66.525Q770.463-55 731-55zm313-617q0 20 13.5 33.5T589-625h142L542-811z" />
  </Svg>
);