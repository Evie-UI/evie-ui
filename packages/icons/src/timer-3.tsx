import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgTimer3 = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M586-194H369q-19 0-31.5-13.735-12.5-13.736-12.5-32.5Q325-259 338.083-272.5 351.167-286 371-286h214v-148H411q-19 0-31.5-13.735-12.5-13.736-12.5-32.5Q367-499 380.083-512.5 393.167-526 413-526h172v-148H369q-19 0-31.5-13.735-12.5-13.736-12.5-32.5Q325-739 338.083-752.5 351.167-766 371-766h215q38.667 0 64.833 26.833Q677-712.333 677-674v125q0 25-12.25 45T630-478q22.5 6 34.75 24.542Q677-434.917 677-411v125q0 38.333-26.167 65.167Q624.667-194 586-194" />
  </Svg>
);
