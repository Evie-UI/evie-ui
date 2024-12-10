import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgFinanceChipFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M463-313h44v-33q31-3 52-24t21-50q0-26-19-46t-53-36v-55q6 2 11 7.5t9 13.5l49-22q-8-22-26-36t-43-20v-34h-45v33q-32 2-52.5 21T390-546q0 26 18 45.5t55 36.5v64q-11-5-19-14.5T432-436l-49 20q9 28 29.5 47t50.5 24zm45-88v-42q7 4 11.5 9t4.5 12q0 9-4.5 14t-11.5 7m-45-121q-8-4-13-8.5t-5-11.5q0-8 5-12.5t13-6.5zM320-175q-127 0-216-89T15-480q0-127 89-216t216-89h320q127 0 216 89t89 216q0 127-89 216t-216 89z" />
  </Svg>
);