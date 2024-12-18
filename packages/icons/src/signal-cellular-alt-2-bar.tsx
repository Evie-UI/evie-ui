import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";

export const SvgSignalCellularAlt2Bar = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M248.882-135q-27.965 0-47.424-19.542Q182-174.083 182-202v-81q0-28.333 19.679-48.167Q221.358-351 249.471-351q28.112 0 47.821 19.833Q317-311.333 317-283v81q0 27.917-19.868 47.458Q277.265-135 248.882-135m254.647 0q-28.112 0-47.321-19.542Q437-174.083 437-202v-281q0-28.333 19.473-48.167Q475.946-551 503.765-551q27.818 0 47.527 19.833Q571-511.333 571-483v281q0 27.917-19.679 47.458Q531.642-135 503.529-135" />
  </Svg>
);
