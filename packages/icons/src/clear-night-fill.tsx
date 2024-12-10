import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgClearNightFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M523.705-25Q437-25 360.919-58.1q-76.082-33.1-132.9-89.919-56.819-56.818-89.919-132.9Q105-357 105-443.702q0-155.744 100.5-272.521Q306-833 458-860q-12 101 14.5 198T572-493q71 72 168.5 98.5T939-375q-26 151-142.773 250.5T523.705-25" />
  </Svg>
);