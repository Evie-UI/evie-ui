import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";

export const SvgCrosswordFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M349-225v100q0 29.75 21.292 50.375Q391.583-54 421-54h118q29 0 49.5-20.625T609-125v-100q0-29-20.5-49.5T539-295H421q-29.417 0-50.708 20.5Q349-254 349-225m-55-196v-118q0-29-20.5-49.5T224-609h-99q-29.75 0-50.375 20.5T54-539v118q0 29 20.625 50T125-350h99q29 0 49.5-21t20.5-50m127 71h118q29 0 49.5-21t20.5-50v-118q0-29-20.5-49.5T539-609H421q-29.417 0-50.708 20.5Q349-568 349-539v118q0 29 21.292 50 21.291 21 50.708 21m314 0h100q29.417 0 50.208-21Q906-392 906-421v-118q0-29-20.792-49.5Q864.417-609 835-609H735q-29 0-50 20.5T664-539v118q0 29 21 50t50 21m0-314h100q29.417 0 50.208-21Q906-706 906-735v-100q0-29.417-20.792-50.208Q864.417-906 835-906H735q-29 0-50 20.792-21 20.791-21 50.208v100q0 29 21 50t50 21" />
  </Svg>
);