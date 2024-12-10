import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgSpeedFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M418-340q25 25 62.5 23.5T536-344l167-246q12-17-2-31t-31-2L424-456q-26 19-28 55.5t22 60.5M192-135q-24 0-46.5-11.5T112-180q-28-51-42.5-106T55-399q0-88 33-165.5T178.5-700Q236-758 313-792t165-34q89 0 167 33.5T781.5-701q58.5 58 92 135.5T906-399q0 58-14 113.5T850-180q-14 21-35 33t-46 12z" />
  </Svg>
);
