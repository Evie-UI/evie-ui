import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgTextRotateVerticalFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="m592-431-28 82q-5 12-14.5 19.5T527-322q-21 0-33-17.5t-5-37.5l135-360q4-11 14.5-18t21.5-7h29q11 0 21 7t15 18l134 358q7 21-5 39t-34 18q-15 0-26.5-8.5T778-353l-27-78zm15-60h130l-63-189h-4zM175-303v-509q0-17 12-29t30-12q18 0 29.5 12t11.5 29v509l24-22q13-12 29.5-12t29.5 13q12 12 11.5 29T340-266l-90 90q-14 14-33.5 14T183-176l-90-90q-13-12-12.5-29T94-325q12-12 28.5-12t29.5 12z" />
  </Svg>
);
