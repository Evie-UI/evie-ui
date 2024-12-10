import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";

export const SvgFiberPin = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M250-446h100q22 0 36-14.375T400-496v-57q0-21.25-14-35.625T350-603H223q-9 0-16 7t-7 16v197.591q0 11.011 7.116 18.21 7.117 7.199 18 7.199 9.884 0 17.384-7.083Q250-371.167 250-382zm218.384-157Q458-603 451-595.917q-7 7.084-7 17.917v196q0 10.833 7.116 17.917 7.117 7.083 17.5 7.083 10.384 0 17.884-7.083Q494-371.167 494-382v-196q0-10.833-7.616-17.917-7.617-7.083-18-7.083M591-535l108 166q4 6 9.526 9 5.527 3 12.158 3h13.263Q745-357 752-364.083q7-7.084 7-18.917v-198q0-9-6.5-15.5t-15.583-6.5q-9.082 0-16.135 6.5-7.053 6.5-7.053 15.5v149L600.865-593.25Q598-598 592.688-600.5q-5.313-2.5-10.86-2.5h-10.345Q561-603 553.5-596.72T546-580v201q0 9 7 15.5t16 6.5q9 0 15.5-7t6.5-16zm-341 39v-57h100v57zM149-135q-39.05 0-66.525-27.475Q55-189.95 55-229v-502q0-39.463 27.475-67.231Q109.95-826 149-826h662q39.463 0 67.231 27.769Q906-770.463 906-731v502q0 39.05-27.769 66.525Q850.463-135 811-135zm0-94h662v-502H149zm0 0v-502z" />
  </Svg>
);