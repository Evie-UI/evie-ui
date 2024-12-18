import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgPersonBookFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M480-316q-73 0-135.553 21.788Q281.895-272.425 229-234v85h502v-85q-53-38-115.5-60T480-316M229-55q-39.05 0-66.525-27.475Q135-109.95 135-149v-662q0-39.463 27.475-67.231Q189.95-906 229-906h502q39.463 0 67.231 27.769Q826-850.463 826-811v662q0 39.05-27.769 66.525Q770.463-55 731-55zm252.879-311Q543-366 584.5-407.379q41.5-41.379 41.5-102.5T584.621-612q-41.379-41-102.5-41T379.5-612.121q-41.5 40.879-41.5 102T379.379-407.5q41.379 41.5 102.5 41.5" />
  </Svg>
);
