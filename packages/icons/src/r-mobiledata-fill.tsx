import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgRMobiledataFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M127-689v78.59q0 16.56-10.4 26.485Q106.199-574 90.825-574 74.6-574 64.8-583.925 55-593.85 55-610.198V-858q0-19.625 13.625-33.812Q82.25-906 102-906h151q39.462 0 67.231 27.769Q348-850.463 348-811v56q0 19-11.792 37-11.791 18-45.208 23l29 63q10 20.588-2.357 39.294Q305.286-574 282.935-574q-12.59 0-23.371-6.955Q248.783-587.909 244-599l-39-90zm0-72h149v-73H127z" />
  </Svg>
);