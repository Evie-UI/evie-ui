import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgCookieFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M480-63q-86 0-162-33t-132.5-89.5Q129-242 96-318T63-480q0-93 35-169t92.5-130.5Q248-834 322-865t153-34q40 0 66 19t30 58q7 55 41.5 90t89.5 45q25 3 41 19.5t23 45.5q8 24 23.5 44.5T826-545q41 20 57 45.5t12 68.5q-10 76-45 143t-89.5 117q-54.5 50-126 79T480-63m-60-495q26 0 44-18t18-44q0-26-18-44t-44-18q-26 0-44 18t-18 44q0 26 18 44t44 18m-80 200q26 0 44-18t18-44q0-26-18-44t-44-18q-26 0-44 18t-18 44q0 26 18 44t44 18m260 38q17 0 28.5-11.5T640-360q0-17-11.5-28.5T600-400q-17 0-28.5 11.5T560-360q0 17 11.5 28.5T600-320" />
  </Svg>
);