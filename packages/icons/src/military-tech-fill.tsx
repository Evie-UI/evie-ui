import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgMilitaryTechFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="m480-139-84 62q-14 10-27.5 0t-9.5-26l32-104-84-63q-14-10-9-26t22-16h105l25-95-136-81q-24-14-37.5-37T263-576v-255q0-40 27.5-67.5T357-926h246q39 0 66.5 27.5T697-831v255q0 28-13.5 51T646-488l-137 81 26 95h104q17 0 22 16t-9 26l-84 63 32 104q4 16-9.5 25.5T563-78zm-26-704v338l30 16 30-16v-338z" />
  </Svg>
);