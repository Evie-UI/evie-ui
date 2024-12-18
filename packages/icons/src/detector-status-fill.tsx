import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";

export const SvgDetectorStatusFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="m438-198 135-136q14.067-14.231 34.033-14.615Q627-349 641-334.632q14 14.369 14 34Q655-281 641-267L472-98q-14.364 15-34.182 15T404-98l-85-85q-14-14.091-13.5-33.545Q306-236 320-250.304 334-264 353-264t33 14zM297-647l18 60h331.12L663-647zm18 155q-33.5 0-59.25-20.125T222-565l-22-82h-41q-39.8 0-66.9-27.1Q65-701.2 65-741v-155h831v155q0 40.05-27.394 67.025Q841.213-647 801-647h-41l-23 83q-7.647 32.385-34.195 52.192Q676.257-492 643-492z" />
  </Svg>
);
