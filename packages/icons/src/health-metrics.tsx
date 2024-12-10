import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgHealthMetrics = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M340-61q-39.8 0-66.9-27.1Q246-115.2 246-155v-91h-91q-39.8 0-66.9-27.1Q61-300.2 61-340v-280q0-40.213 27.1-67.606Q115.2-715 155-715h91v-90q0-40.213 27.1-67.606Q300.2-900 340-900h280q40.213 0 67.606 27.394Q715-845.213 715-805v90h90q40.213 0 67.606 27.394Q900-660.213 900-620v280q0 39.8-27.394 66.9Q845.213-246 805-246h-90v91q0 39.8-27.394 66.9Q660.213-61 620-61zM148-515h212q9.576 0 18.894 4.611Q388.212-505.778 393-498l35 54 54-156q5.083-12 15.251-20 10.167-8 23.28-8 8.969 0 18.404 5.167Q548.37-617.667 553-609l61 94h199v-113H675q-19.75 0-33.375-13.625T628-675v-138H333v138q0 19.75-14.188 33.375Q304.625-628 285-628H148zm0 79v103h137q19.625 0 33.812 14.188Q333-304.625 333-285v137h295v-137q0-19.625 13.625-33.812Q655.25-333 675-333h138v-103H600q-10 0-18.5-5T568-454l-36-53-55 156q-4.974 12-15.354 20-10.379 8-22.646 8-10 0-18.5-5T408-342l-62-94zm-87 0h87v103h137q19.625 0 33.812 14.188Q333-304.625 333-285v137h295v-137q0-19.625 13.625-33.812Q655.25-333 675-333h138v-103h87v-79h-87v-113H675q-19.75 0-33.375-13.625T628-675v-138H333v138q0 19.75-14.188 33.375Q304.625-628 285-628H148v113H61z" />
  </Svg>
);