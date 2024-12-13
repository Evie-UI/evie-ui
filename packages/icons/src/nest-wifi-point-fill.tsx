import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";

export const SvgNestWifiPointFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M352.103-95q-106.724 0-181.913-75.19Q95-245.379 95-352.103v-256.138q0-106.725 75.19-182.242Q245.379-866 352.103-866h256.138q106.725 0 182.242 75.517T866-608.241v256.138q0 106.724-75.517 181.913Q714.966-95 608.241-95zm11.426-94q0-14 8.136-22 8.135-8 22.335-8 14 0 22 8t8 22h112q0-14 8-22t22-8q14 0 22 8t8 22q46 0 78.5-14.5T732-249h-51q0 14-8 22t-22 8q-13 0-21.5-8t-8.5-22H510q0 14-8 22t-22 8q-14 0-22-8t-8-22H339q0 14-8.5 22t-22 8q-13.5 0-21.5-8t-8-22h-50q23 30 56 45t78.529 15" />
  </Svg>
);
