import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";

export const SvgChatAppsScriptFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M586-149q-17 0-29-12t-12-29q0-17 12-29t29-12h109l-88-62q-14-10-17.5-26.5T595-350q10-14 26.5-17.5T652-362l90 62-38-102q-6-16 2-31.5t24-21.5q17-6 33 1.5t21 23.5l36 102 29-104q4-17 18-25t31-4q17 4 26 18t5 31l-70 263zM283-606h285q17 0 29-12t12-29q0-17-12-29t-29-12H283q-17 0-29 12t-12 29q0 17 12 29t29 12m0 164h165q17 0 29-12t12-29q0-17-12-29t-29-12H283q-17 0-29 12t-12 29q0 17 12 29t29 12m-66 179L114-160q-11 11-26 5.5T73-176v-587q0-39 27.5-66.5T167-857h516q39 0 66.5 27.5T777-763v210q-14-4-28.5-5.5T720-560q-98 0-169 72t-71 168q0 14 1.5 28.5T487-263z" />
  </Svg>
);
