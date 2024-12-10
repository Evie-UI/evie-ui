import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgDetectorBatteryFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M326-152h388v-133H326zM206-65q-19 0-33-14t-14-33v-212q0-19.625 14-33.812Q187-372 206-372h548q19.2 0 33.1 14.188Q801-343.625 801-324v54h17.175q19.7 0 33.763 13.625Q866-242.75 866-223v10q-13 12.75-21.125 29.875T818-166h-17v54q0 19.75-13.625 33.375T754-65zm91-582 18 60h331.12L663-647zm18 155q-33.5 0-59.25-20.125T222-565l-22-82h-41q-39.8 0-66.9-27.1Q65-701.2 65-741v-155h831v155q0 40.05-27.394 67.025Q841.213-647 801-647h-41l-23 83q-7.647 32.385-34.195 52.192Q676.257-492 643-492z" />
  </Svg>
);