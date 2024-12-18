import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";

export const SvgDetectorOffline = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="m480-153-56 56q-15 15-33 14.5t-33-15Q343-112 343-131t15-33l55-56-56-56q-14-14-14-33t15-33.5q15-14.5 33.5-14.5t33.5 15l55 56 56-56q15-15 33.5-15t33.5 15q14 14 14 33t-14 33l-56 56 56 56q14 15 14 33.5T603-98q-15 15-33.5 15T536-98zM159-801v60h642v-60zm138 154 18 60h331.12L663-647zm18 155q-33.5 0-59.25-20.125T222-565l-22-82h-41q-39.8 0-66.9-27.1Q65-701.2 65-741v-155h831v155q0 40.05-27.394 67.025Q841.213-647 801-647h-41l-23 83q-7.647 32.385-34.195 52.192Q676.257-492 643-492zM159-801v60z" />
  </Svg>
);
