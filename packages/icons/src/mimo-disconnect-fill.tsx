import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgMimoDisconnectFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M131-860v101l-94-94q-11-10-10.5-24.5T38-903q11-11 25-11t25 11l768 766q11 11 10 25.5T854-86q-11 11-25 11t-24-11L665-226l-13 11 46 45q7 7 10 15.5t3 17.5v13q0 18-11.5 29.5T671-83H289q-17 0-28.5-11.5T249-124v-14q0-9 3-17t10-15l45-45H149q-39-8-66.5-37T55-320v-451q0-38 26.5-63.5T131-860m717 631L209-866h603q38 0 66.5 28.5T907-771v462q0 29-17 51t-42 29" />
  </Svg>
);