import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";

export const SvgBedtime = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M524.444-25q-87.211 0-163.521-33.188-76.31-33.188-132.893-89.712-56.583-56.523-89.807-132.752Q105-356.881 105-444q0-128 72.5-233T369-833q29-14 57 2.5t30 48.5q1 81 29.5 156.5T572-493q57 58 132.5 86.5T860-376q29 2 47.5 28t7.5 52Q869-173 762-99T524.444-25M524-120q87 0 159.5-47T805-287q-84-12-162-46t-137.5-94q-60.5-59-94-136T365-723q-72 48-118.5 120T200-444q0 135.833 94.083 229.917Q388.167-120 524-120m-19-307" />
  </Svg>
);