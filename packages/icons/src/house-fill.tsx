import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgHouseFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M389-149H236q-19.75 0-33.375-13.625T189-196v-273h-77q-16.5 0-22.25-15T96-510l353-317q13.186-11 31.093-11T511-827l158 138v-79q0-9 7-16t17-7h55q9 0 16 7t7 16v174l93 84q12 11 6.25 26T848-469h-77v273q0 19.75-13.625 33.375T724-149H571v-187q0-19.75-13.625-33.375T524-383h-88q-19.75 0-33.375 13.625T389-336zm0-402h182q0-36-27-60.5T480-636q-37 0-64 24.342-27 24.343-27 60.658" />
  </Svg>
);
