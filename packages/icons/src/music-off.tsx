import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgMusicOff = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M773-74 74-772q-11-11-11.5-25.5T74-823q11-12 25-12t26 12l699 699q11 11 11.5 24.5T824-74q-11 11-25.5 11T773-74M563-485l-94-94v-242q0-20 13.5-34t33.5-14h191q20 0 34 14t14 34v75q0 20-14 33.5T707-699H563zM396-92q-70 0-118.5-48.5T229-259q0-70 48.5-118.5T396-426q23 0 41.5 5.5T469-405v-74l94 94v126q0 70-48.5 118.5T396-92" />
  </Svg>
);
