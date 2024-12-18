import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";

export const SvgRemove = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M222-433q-19.75 0-33.375-13.675Q175-460.351 175-480.175 175-500 188.625-513.5 202.25-527 222-527h516q19.75 0 33.875 13.675Q786-499.649 786-479.825 786-460 771.875-446.5 757.75-433 738-433z" />
  </Svg>
);
