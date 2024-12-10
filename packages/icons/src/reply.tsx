import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgReply = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="m275-477 113 113q13 14 13 33t-13 33q-14 14-34 14t-33-14L128-490q-14-14-14-34t14-34l194-193q14-14 33.5-14t33.5 14q13 14 13 33.5T389-685L275-571h375q92 0 154 62t62 153v134q0 20-14 33.5T818-175q-20 0-33.5-13.5T771-222v-134q0-54-33.5-87.5T650-477z" />
  </Svg>
);
