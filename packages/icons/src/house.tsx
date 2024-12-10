import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgHouse = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M441-149H236q-19.75 0-33.375-13.625T189-196v-273h-77q-16.333 0-22.167-15Q84-499 96-510l353-317q13.651-11 31.326-11Q498-838 511-827l158 138v-79q0-9 7.2-16t16.8-7h55q9 0 16 7t7 16v174l93 84q12 11 6.167 26-5.834 15-22.167 15h-77v273q0 19.75-13.625 33.375T724-149H519v-234h-78zm-170-82h88v-235h242v235h88v-325L480-745 271-555.707zm88-235h242zm30-85h182q0-36-26.857-60.5t-64-24.5Q443-636 416-611.658 389-587.315 389-551" />
  </Svg>
);