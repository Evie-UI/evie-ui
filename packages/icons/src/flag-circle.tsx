import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgFlagCircle = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M386-440h87l28 53q6 12 17 19.5t25 7.5h130q20 0 33.5-13.5T720-407v-146q0-20-13.5-33.5T673-600h-66l-28-53q-6-12-17-19.5t-25-7.5H367q-20 0-33.5 13.5T320-633v361q0 13 10 22.5t24 9.5q14 0 23-10t9-24zm171 14-40-80H386v-108h137l40 80h91v108zM480-55q-88 0-165.5-33T179-179q-58-58-91-135.5T55-480q0-89 33-166.5t91-135q58-57.5 135.5-91T480-906q89 0 166.5 33.5t135 91q57.5 57.5 91 135T906-480q0 88-33.5 165.5t-91 135.5q-57.5 58-135 91T480-55m0-94q138 0 234.5-96.5T811-480q0-138-96.5-234.5T480-811q-138 0-234.5 96.5T149-480q0 138 96.5 234.5T480-149m0-331" />
  </Svg>
);
