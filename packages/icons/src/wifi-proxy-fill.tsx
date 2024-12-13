import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgWifiProxyFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M447-101 55-537q-11-11-16-26t-5-29q0-18 7-34.5T62-656q94-73 195.5-115T480-813q121 0 222.5 42T898-656q14 13 21 29.5t7 34.5q0 14-5 29t-15 26l-73 75q-31-7-57.5-7t-56.5 8q-68 19-115.5 72.5T545-264q-3 30 1 58t16 56l-45 45q-6 10-15 14.5T483-86q-10 1-19.5-2.5T447-101m233-12q-20 0-33.5-13.5T633-160v-200q0-20 13.5-34t33.5-14h90q20 0 34 14t14 34v62h62q20 0 34 14t14 34v90q0 20-14 33.5T880-113zm28-75h35v-35h-35zm0-110h35v-35h-35zm110 110h35v-35h-35z" />
  </Svg>
);
