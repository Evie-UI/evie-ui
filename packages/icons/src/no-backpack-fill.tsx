import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgNoBackpackFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="m662-395 179 178v-456q0-58-38-96t-90-48v-41q0-20-13.5-34T666-906h-37q-20 0-33.5 14T582-858v32H378v-32q0-20-13.5-34T331-906h-39q-19 0-32 13t-13 32v20q-6 1-12 3l-12 4 357 357h55q12 0 19.5 8t7.5 19zM816-55l-98-99h97l8 8v20q-8 32-33 51.5T732-55H228q-39 0-66-27t-27-66v-516q0-36 13-67t39-54l8 8v103L54-817q-11-11-11-24.5T55-866q10-11 25-11t25 11l762 761q11 11 10.5 25.5T867-55q-11 11-25.5 11T816-55M464-407l-72-70h-72q-10 0-16 7.5t-6 27.5q0 15 10 25t25 10z" />
  </Svg>
);
