import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgCrossword = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M391-311v177h178v-177zm-80-80v-178H134v178zm80 0h178v-178H391zm257 0h178v-178H648zm0-257h178v-178H648zM311-311H149q-39.8 0-66.9-27.394Q55-365.788 55-406v-148q0-38.75 27.1-66.375T149-648h420v-163q0-40.213 27.1-67.606Q623.2-906 663-906h148q40.213 0 67.606 27.394Q906-851.213 906-811v405q0 40.212-27.394 67.606Q851.213-311 811-311H648v162q0 39.8-27.625 66.9Q592.75-55 554-55H406q-40.212 0-67.606-27.1Q311-109.2 311-149z" />
  </Svg>
);
