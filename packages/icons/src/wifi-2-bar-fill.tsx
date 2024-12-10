import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgWifi2BarFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M480-127q-36 0-63-27t-27-63q0-36 27-63t63-27q36 0 63 27t27 63q0 36-27 63t-63 27m0-320q-47 0-93 16t-95 54q-20 13-43.5 13.5T209-380q-17-16-16-39t18-37q63-52 128.5-78T480-560q75 0 140.5 25.5T749-457q17 14 18 37t-15 39q-17 17-40 17.5T669-376q-49-39-95-55t-94-16" />
  </Svg>
);