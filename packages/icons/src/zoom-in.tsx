import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgZoomIn = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M340-556h-47q-12.75 0-21.375-8.675-8.625-8.676-8.625-21.5 0-12.825 8.625-21.325T293-616h47v-47q0-11.75 8.675-20.875 8.676-9.125 21.5-9.125 12.825 0 21.325 9.125T400-663v47h47q11.75 0 20.875 8.675 9.125 8.676 9.125 21.5 0 12.825-9.125 21.325T447-556h-47v46.702q0 13.048-8.675 21.673-8.676 8.625-21.5 8.625-12.825 0-21.325-8.625t-8.5-21.673zm32 244q-115.162 0-195.081-80Q97-472 97-585t80-193q80-80 193.5-80t193 80Q643-698 643-584.85q0 44.85-12.5 83.35Q618-463 593-429l236 234q14 14.556 14 34.278T829.5-127q-15.033 15-34.989 15-19.955 0-33.511-15L526-361q-29 22.923-68.459 35.962Q418.082-312 372-312m-.647-94q74.897 0 126.272-52.25T549-585q0-74.5-51.522-126.75T371.353-764q-75.436 0-127.895 52.25Q191-659.5 191-585t52.311 126.75Q295.623-406 371.353-406" />
  </Svg>
);