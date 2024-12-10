import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgPhotoCameraBackFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M149-95q-39 0-66.5-27.5T55-189v-495q0-38 27.5-66.5T149-779h125l56-60q13-14 30-20.5t36-6.5h169q18 0 35 6.5t30 20.5l57 60h124q38 0 66.5 28.5T906-684v495q0 39-28.5 66.5T811-95zm133-159h403q14 0 21-12.5t-3-25.5L590-440q-8-9-19-9t-19 10L445-298l-73-90q-8-9-19-9t-19 9l-71 96q-9 13-2.5 25.5T282-254" />
  </Svg>
);