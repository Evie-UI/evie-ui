import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";

export const SvgNestCamWiredStandFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M320-10q-24 0-40.5-16.5T263-67v-80q0-90 63.5-154T480-365q12 0 21.5 2t20.5 4l17-26-69-7q-104-10-173.5-86T227-658q0-105 69.5-181.5T471-925l179-18q42-4 72.5 23.5T753-850v382q0 44-30.5 71.5T649-374l-21-2-30 46q45 29 72 77t27 106v80q0 24-16.5 40.5T640-10z" />
  </Svg>
);