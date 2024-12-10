import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";

export const SvgFavorite = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M479.035-118q-17.734 0-34.315-5.869-16.582-5.869-29.988-19.381L361-194Q238-306 146.5-413.5T55-643q0-101.264 66.923-169.132Q188.845-880 289-880q50 0 99 21.5t91 73.5q47-52 93-73.5t97-21.5q101.382 0 169.191 67.868T906-643q0 122-93 229.5T598-193l-54 50q-13.25 13.381-30.09 19.19-16.84 5.81-34.875 5.81M448-679q-23-45-68-76t-90.733-31q-61.829 0-101.048 39.857T149-642.571q0 56.023 37.587 117.935 37.588 61.912 89.905 120.12 52.317 58.208 109.103 108.935 56.786 50.726 93.597 84.581 37.192-34 93.701-85.136 56.508-51.136 109.307-109.5Q735-464 773.5-525.459 812-586.917 812-643.214 812-706 771.639-746t-102.152-40Q622-786 577.5-755.5 533-725 509-679q-5.296 10-13.648 14.5T477.5-660q-9.5 0-17.111-4.5Q452.778-669 448-679m32 180" />
  </Svg>
);