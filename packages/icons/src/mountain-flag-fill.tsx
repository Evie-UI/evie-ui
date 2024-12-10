import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgMountainFlagFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="m259-471 39-78q12-24 34.5-38.5T382-602h55v-256q0-20 13.5-34t33.5-14h204q12 0 18.5 11.5T708-871l-19 38q-2 5-2 11t2 11l19 38q5 12-1.5 23T688-739H524v137h49q28 0 51 14.5t35 37.5l39 81-142 95-76-40-78 38zM206-55q-52 0-80-44.5t-4-92.5l106-213 170 113 82-40 82 41 170-112 106 212q23 48-4.5 92T753-55z" />
  </Svg>
);