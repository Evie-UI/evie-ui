import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgHouseWithShieldFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M229-95q-39.8 0-66.9-27.1Q135-149.2 135-189v-377q0-22.281 9.547-41.875T172-641l251-189q24.68-19 56.84-19Q512-849 537-830l251 189q18.375 13.531 28.188 33.125Q826-588.281 826-566v377q0 39.8-27.394 66.9Q771.213-95 731-95zm119-350q0 57 30 104t80 68q5.895 2 11 3.5t11 1.5q5.895 0 11-1.5t11-3.5q51.085-19.986 81.043-66.993Q613-387 613-445v-41q0-20.006-10.818-36.54T573-549l-62-31q-14.61-7-30.805-7T449-580l-62 31q-18.364 9.926-28.682 26.46Q348-506.006 348-486z" />
  </Svg>
);