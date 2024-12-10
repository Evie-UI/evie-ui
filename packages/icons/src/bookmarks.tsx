import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";

export const SvgBookmarks = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M403-154 215-74q-47 21-89.5-7.606Q83-110.21 83-162v-532q0-39.463 27.769-67.231Q138.538-789 178-789h450q39.05 0 67.025 27.769Q723-733.463 723-694v533q0 52.278-42 80.139Q639-53 592-74zm0-104 225 98v-534H178v534zm379 105v-696H270v-94h512q39.463 0 67.231 27.475Q877-888.05 877-849v696zM403-694H178h450z" />
  </Svg>
);