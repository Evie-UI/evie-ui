import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgLineEndArrow = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M498-219q-24 15-48.5 1.691Q425-230.617 425-260v-173H110q-19.75 0-33.375-13.675Q63-460.351 63-480.175 63-500 76.625-513.5 90.25-527 110-527h315v-174q0-28.383 24.5-41.692Q474-756 498-741l347 222q22 13.786 22 38.893T845-441zm22-125 211-136-211-136zm0-136" />
  </Svg>
);
