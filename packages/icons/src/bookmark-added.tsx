import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgBookmarkAdded = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="m480-212-174 74q-47 20-89-7.939T175-225v-551q0-39.463 27.475-67.231Q229.95-871 269-871h277v95H269v551l211-88.237L691-225v-322h95v322q0 51.122-42.5 79.061Q701-118 654-138zm0-564H269h277zm249 52 119-119q11.067-13 28.033-13Q893-856 905-842.947q13 12.052 12.5 29Q917-797 905-785L763-640q-15.364 14-34.636 14-19.273 0-33.364-14l-59-60q-14-13-14-29.658t13.609-28.5Q648-771 664.967-771q16.966 0 29.033 13z" />
  </Svg>
);
