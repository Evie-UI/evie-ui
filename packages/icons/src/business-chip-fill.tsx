import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgBusinessChipFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M360-320h240q17 0 28.5-11.5T640-360v-160q0-17-11.5-28.5T600-560h-40v-38q0-17.25-12.375-29.625T518-640h-75q-18.25 0-30.625 12.375T400-598v38h-40q-17 0-28.5 11.5T320-520v160q0 17 11.5 28.5T360-320m83-240v-38h75v38zM320-175q-126.789 0-215.895-89.149Q15-353.297 15-480.149 15-607 104.105-696 193.211-785 320-785h320q126.789 0 215.895 89.149Q945-606.703 945-479.851 945-353 855.895-264 766.789-175 640-175z" />
  </Svg>
);