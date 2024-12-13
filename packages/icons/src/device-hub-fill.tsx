import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";

export const SvgDeviceHubFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M103-150v-120q0-19.75 13.625-33.375T150-317h123l166-166v-127q-38-15-62-47.151-24-32.152-24-72.849 0-52.833 37.118-89.917 37.117-37.083 90-37.083Q533-857 570-819.917q37 37.084 37 89.917 0 40.697-24 72.849Q559-625 521-610v127l167 166h122q19.75 0 33.375 13.625T857-270v120q0 19.75-13.625 33.375T810-103H690q-19.75 0-33.375-13.625T643-150v-92L480-405 317-242v92q0 19.75-13.625 33.375T270-103H150q-19.75 0-33.375-13.625T103-150" />
  </Svg>
);
