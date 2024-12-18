import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgSplitscreenLeftFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M174-95q-39.05 0-66.525-27.475Q80-149.95 80-189v-582q0-39.463 27.475-67.231Q134.95-866 174-866h188q38 0 66 27.769 28 27.768 28 67.231v582q0 39.05-28 66.525Q400-95 362-95zm425 0q-39.463 0-67.231-27.475Q504-149.95 504-189v-582q0-39.463 27.769-67.231Q559.537-866 599-866h187q39.463 0 67.231 27.769Q881-810.463 881-771v582q0 39.05-27.769 66.525Q825.463-95 786-95zm187-676H599v582h187zm-187 12h187v570H599z" />
  </Svg>
);
