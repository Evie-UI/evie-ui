import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgRingVolumeFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M481-696q-18 0-30-12t-12-30v-127q0-18 12-29.5t30-11.5q18 0 29.5 12t11.5 30v127q0 18-11.5 29.5T481-696m200 87q-13-12-12-30t13-30l90-88q12-12 29-12t29 12q12 12 11.5 29.5T829-699l-88 89q-12 12-29.5 12.5T681-609m-399-1q-12 13-29 13t-29-13l-90-88q-13-13-13.5-30t13.5-30q12-12 29.5-11t29.5 13l89 90q12 11 12 27.5T282-610M134-114l-93-93q-16-16-16-42t16-42q87-93 195.5-141T480-480q135 0 244.5 47T920-291q15 16 15 42t-15 42l-94 93q-11 12-35 12.5T751-113l-104-77q-10-7-14.5-17t-4.5-21v-146q-38-14-74.5-19t-73.5-5q-37 0-73.5 5T332-374v146q0 11-4.5 21T314-190l-105 77q-16 12-39 12t-36-13" />
  </Svg>
);