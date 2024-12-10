import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";

export const SvgStressManagementFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M480-294q70 0 156-23.5T895-422v-20q0-59-46.5-94.5T745-555q-16 5-35 12t-48 18q-60 26-100.5 35.5T480-480q-44 0-84.5-10T292-526q-24-9-42-16t-33-12q-57-18-104.5 17T65-442v16q137 72 239.5 102T480-294m0 244q150 0 261.5-85.5T885-354q-141 69-234.5 94.5T480-234q-79 0-181-28.5T74-356q28 138 137.5 222T480-50m0-510q-72 0-122.5-50.5T307-734q0-72 50.5-122.5T480-907q72 0 123 50.5T654-734q0 73-51 123.5T480-560" />
  </Svg>
);
