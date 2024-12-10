import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgVpnKeyFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M280-217q-108.667 0-185.833-77.235Q17-371.471 17-480.235 17-589 94.167-666 171.333-743 280-743q96 0 159.5 52T529-570h337q33 0 55 22t22 55v26q0 25.65-15.5 47.325Q912-398 883-392h-46v92q0 31-20.5 51T765-229h-6q-31 0-51-20t-20-51v-90H529q-26 69-89.5 121T280-217m-.248-184Q314-401 336.5-423.752t22.5-56Q359-514 336.748-536.5t-56.5-22.5Q247-559 224-536.748t-23 56.5Q201-447 223.752-424t56 23" />
  </Svg>
);