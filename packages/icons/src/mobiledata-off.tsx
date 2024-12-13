import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";

export const SvgMobiledataOff = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="m389-245 33-33q13-12 31.5-12t33.5 15q14 14 13.5 33.5T486-208L376-98q-7 7-16 11t-18 4q-9 0-17.5-4T309-98L198-208q-13-14-12.5-34t16.5-36q13-13 31-12.5t30 12.5l32 33v-307L50-797q-11-11-11.5-25T50-847q11-12 24.5-12t25.5 12l748 747q11 11 11.5 24.5T848-50q-11 11-25 11t-25-11L389-458zm265-136-94-94v-240l-31 31q-14 14-31.5 13T465-686q-15-14-15-33.5t15-34.5l108-109q7-7 16-11t18-4q9 0 17.5 4t15.5 11l110 110q14 14 14 33t-16 35q-14 14-31.5 14T685-685l-31-30z" />
  </Svg>
);
