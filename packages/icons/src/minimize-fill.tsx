import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";

export const SvgMinimizeFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M270-95q-19.75 0-33.375-13.675Q223-122.351 223-142.175 223-162 236.625-175.5 250.25-189 270-189h421q19.75 0 33.375 13.675Q738-161.649 738-141.825 738-122 724.375-108.5 710.75-95 691-95z" />
  </Svg>
);