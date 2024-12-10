import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";

export const SvgRestartAltFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M396-106q-113-27-187-119t-74-213q0-66 26.5-126.5T237-668q11-16 32.5-16t36.5 15q12 12 12 29.5T305-608q-36 32-56 77t-20 93q0 87 52 152.5T414-200q16 6 26.5 19t10.5 29q0 25-17 38.5t-38 7.5m171 0q-22 7-39-7t-17-38q0-15 10.5-29t26.5-20q82-20 133-85.5T732-438q0-100-67.5-172T497-688h-23l40 40q9 10 9 25t-9 25q-11 11-26.5 11T462-598L352-707q-7-7-10.5-15.5T338-740q0-10 3.5-18t10.5-15l110-112q10-9 25.5-9t26.5 9q9 11 9 26.5t-9 25.5l-51 50h24q142 0 241 101.5T827-438q0 121-74 213T567-106" />
  </Svg>
);