import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgToolsPliersWireStripperFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M260 16q-21-46-31.5-100T217-209q0-86 19.5-158.5T301-501v-224l128-215h31v226q-9 5-14.5 14t-5.5 20q0 17 11.5 28.5T480-640q17 0 28.5-11.5T520-680q0-11-5-20t-15-14v-226h31l129 215v224q45 61 64 131.5T743-223q0 67-12 129.5T700 16q-47-19-77-57.5T592-126q-1-28 8-57t9-73q0-62-29-116t-100-86q-70 32-99.5 86T351-255q0 42 8.5 71t8.5 57q0 48-30.5 88T260 16" />
  </Svg>
);