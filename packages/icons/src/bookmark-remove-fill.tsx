import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgBookmarkRemoveFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M648-697q-17.725 0-29.862-12Q606-721 606-738.509t12.138-29.5Q630.275-780 648-780h180q17.725 0 29.862 11.991Q870-756.018 870-738.509T857.862-709Q845.725-697 828-697zM480-212l-174 74q-47 20-89-8.106-42-28.105-42-78.894v-551q0-40.463 26.975-67.731Q228.95-871 269-871h330q-24 27-38.5 61.278T546-739q0 67.604 41.5 118.802Q629-569 691-553q24 7 46.5 7t48.5-7v328q0 50.789-42.5 78.894Q701-118 654-138z" />
  </Svg>
);
