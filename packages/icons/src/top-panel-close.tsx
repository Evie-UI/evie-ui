import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgTopPanelClose = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="m446-402-85 86q-11 11-4.958 26 6.041 15 21.958 15h204q15.917 0 21.958-15Q610-305 599-316l-85-86q-14.727-14-34.364-14Q460-416 446-402M189-95q-39.8 0-66.9-27.1Q95-149.2 95-189v-582q0-40.213 27.1-67.606Q149.2-866 189-866h582q40.213 0 67.606 27.394Q866-811.213 866-771v582q0 39.8-27.394 66.9Q811.213-95 771-95zm582-544v-132H189v132zm-582 94v356h582v-356zm0-94v-132z" />
  </Svg>
);
