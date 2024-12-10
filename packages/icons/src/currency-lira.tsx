import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgCurrencyLira = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M353-142v-167l-57 35q-24 14-48.5 1.5T223-313q0-12 5.5-23t16.5-18l108-67v-81l-60 36q-24 15-47 1.5T223-507q0-11 5.5-21.5T245-545l108-69v-204q0-20 13.5-34t33.5-14q20 0 33.5 14t13.5 34v145l99-61q24-14 47.5-1t23.5 42q0 11-5.5 21.5T596-655l-149 94v81l99-62q24-14 47.5-.5T617-501q0 12-5.5 22.5T596-462l-149 93v178h19q67-6 113.5-49.5T639-350q3-18 18-28.5t33-10.5q19 0 32.5 10.5T734-351q-15 111-95 183.5T450-95h-50q-20 0-33.5-13.5T353-142" />
  </Svg>
);