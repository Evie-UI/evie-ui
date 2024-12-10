import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgMimoDisconnect = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="m130-860 87 89h-68v450h421L40-850q-11-10-11-24.5T40-900q11-11 25.467-11Q79.933-911 91-900l761 768q8 9 8.5 21t-7 22Q844-77 830-76.5T806-86L674-215h-22l46 45q7 7.286 10 15.686 3 8.401 3 17.314v13q0 17.425-11.5 29.213Q688-83 671-83H289q-17 0-28.5-11.787Q249-106.575 249-124v-14q0-8.565 3-16.64 3-8.074 10-15.36l45-45H149q-39-9-66.5-38.181Q55-282.362 55-321v-450q0-38 26-63.5t49-25.5m714 629-90-90h57v-450H304l-95-95h602q38.463 0 66.731 28.269Q906-809.463 906-771v450q0 29.091-19 55.545Q868-239 844-231M360-530" />
  </Svg>
);