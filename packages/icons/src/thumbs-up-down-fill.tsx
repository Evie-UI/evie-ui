import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgThumbsUpDownFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M83-376q-34 0-58.5-24T0-459v-246q0-16 6-30.5T25-764l158-158q7-7 16-11t18-4q20 0 35 16.5t11 39.5l-23 125h186q26 0 44 18t18 44v51q0 9-1.5 18t-3.5 14l-80 184q-13 30-34 40.5T311-376zm451 171q-26 0-44-17.5T472-266v-51q0-9 1.5-18t3.5-14l80-185q13-29 34-39.5t58-10.5h228q34 0 58.5 24t24.5 58v246q0 17-6 31.5T936-197L777-38q-7 7-16 11t-17 4q-21 0-36-16.5T697-80l24-125z" />
  </Svg>
);