import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";

export const SvgBook4 = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M240-55q-61.167 0-103.083-42Q95-139 95-199v-558q0-62.083 43.167-105.542Q181.333-906 243-906h321q40.213 0 67.606 27.394Q659-851.213 659-811v455q0 39.8-27.394 66.9Q604.213-262 564-262H240q-24.65 0-41.325 17.75Q182-226.5 182-201.5t16.696 42.25Q215.391-142 240.071-142H779v-640q0-18.05 12.763-31.025Q804.526-826 822.263-826 840-826 853-813.025T866-782v633q0 39.8-27.394 66.9Q811.213-55 771-55zm129-290h203v-474H369zm-87-.074V-819h-38.702Q217-819 199.5-800.75 182-782.5 182-757v428q12.31-8.143 26.539-12.109 14.228-3.965 31.892-3.965zM182-819v490z" />
  </Svg>
);