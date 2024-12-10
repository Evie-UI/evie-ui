import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgRegularExpression = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M20-481q0-75 27.5-143T122-750q13-16 32.5-17t33.5 13q14 14 13.5 34T189-683q-35 45-54.5 95.5T115-481q0 55 20 105t54 95q12 17 12.5 38T188-208q-14 14-34 13t-32-17q-47-58-74.5-126.5T20-481m360 248q-28 0-47.5-19.5T313-300q0-28 19.5-47.5T380-367q28 0 47.5 19.5T447-300q0 28-19.5 47.5T380-233m179-207q-17 0-28.5-11.5T519-480v-32l-26 16q-14 9-30 5t-24-19q-9-14-4.5-30t19.5-24l26-16-27-16q-14-7-18.5-23.5T438-650q8-14 24.5-18.5T493-664l26 16v-32q0-17 11.5-28.5T559-720q17 0 28.5 11.5T599-680v32l27-16q13-9 29-5t24 19q9 14 4.5 30T665-596l-26 16 27 16q13 7 17.5 23.5T680-511q-8 15-24.5 19.5T625-496l-26-16v32q0 17-11.5 28.5T559-440m381-41q0 75-27.5 143.5T838-211q-13 15-32.5 16T772-208q-14-14-14-34.5t12-37.5q34-45 55-95t21-106q0-56-21-107.5T770-684q-13-16-12.5-36t14.5-34q14-14 34-13t32 17q47 58 74.5 126T940-481" />
  </Svg>
);