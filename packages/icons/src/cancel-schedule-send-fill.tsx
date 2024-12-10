import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgCancelScheduleSendFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="m701-229 50 49q8 8 19 7.5t19-8.5q8-8 8-19.75T789-220l-50-48 53-54q8-6.5 8-18.25T792-360q-8-8-19.75-8T754-360l-52 51-52-51q-8-8-18.5-8t-18.5 8q-8 8-8 19.25t8 18.75l50 51-50 51q-9 8.182-9 20.091T613-180q8 8 19.25 8t18.75-8zm-592 22v-177l336-96-336-98v-175q0-25.133 21-38.567Q151-805 176-796l667 285q-35.5-6-70.5-7.5T701-520q-96 0-167.5 63.5T452-297q0 3 .5 7t1.5 8L175-165q-24 10-45-3.433-21-13.434-21-38.567M700.894-80Q622-80 566.5-135T511-269.187q0-79.188 55.606-135Q622.212-460 701.106-460T835.5-404.187q55.5 55.812 55.5 135Q891-190 835.394-135q-55.606 55-134.5 55" />
  </Svg>
);