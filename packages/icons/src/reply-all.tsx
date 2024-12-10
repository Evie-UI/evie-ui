import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgReplyAll = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="m189-524 160 160q13 14 13 33t-14 33q-14 14-34 14t-33-14L88-490q-7-7-11-16t-4-18q0-9 4-18t11-16l194-193q14-14 33-14t34 14q14 14 14 33.5T349-684zm275 47 113 113q13 14 13 33t-14 33q-13 14-33 14t-34-14L317-490q-7-7-11-16t-4-18q0-9 4-18t11-16l193-193q14-14 34-14t33 14q14 14 14 33.5T577-685L464-571h225q92 0 154 62t62 153v134q0 20-14 33.5T857-175q-20 0-33.5-13.5T810-222v-134q0-54-33.5-87.5T689-477z" />
  </Svg>
);