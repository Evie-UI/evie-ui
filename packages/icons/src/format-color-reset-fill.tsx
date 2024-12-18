import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgFormatColorResetFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M781-268 306-743l124-124q10-10 23.5-15.5T480-888q13 0 26.5 5t23.5 16l192 190q49 49 76.5 111T826-433q0 42-12 85t-33 80M480-95q-142 0-243.5-99T135-435q0-61 16.5-111t53.5-95L50-796q-11-11-11.5-25.5T50-847q11-12 25-12t26 12l747 747q11 11 11 25t-11 25q-11 11-25.5 11T797-50L684-162q-40 32-92.5 49.5T480-95" />
  </Svg>
);
