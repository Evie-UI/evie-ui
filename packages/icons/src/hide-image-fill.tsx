import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";

export const SvgHideImageFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M866-223 223-866h548q39 0 67 28t28 67zM189-95q-39 0-66.5-27.5T95-189v-562l-45-45q-11-11-11.5-25.5T50-847q11-12 25-12t26 12l747 747q11 11 11.5 24.5T848-50q-11 11-25.5 11T797-50l-46-45zm391-173-91-91-43 53-85-100q-8-9-19-8t-17 10l-74 98q-9 13-3 25.5t21 12.5z" />
  </Svg>
);
