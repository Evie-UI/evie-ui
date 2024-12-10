import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgFilterFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="m523-430-49-63q-7-10-18.5-9.5T437-492l-46 59q-9 13-2.5 26t21.5 13h296q14 0 20.5-13t-1.5-26l-80-107q-7-10-18.5-10T608-540zM286-192q-39 0-66.5-27.5T192-286v-542q0-39 27.5-67t66.5-28h542q39 0 67 28t28 67v542q0 39-28 66.5T828-192zM132-37q-39 0-67-28t-28-67v-589q0-20 13.5-33.5T85-768q20 0 33.5 13.5T132-721v589h589q20 0 33.5 13.5T768-85q0 21-13.5 34.5T721-37z" />
  </Svg>
);