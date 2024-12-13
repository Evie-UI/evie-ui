import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";

export const SvgSignalCellularNodataFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M168-55q-22 0-34.5-14.5T121-102q0-8 3.5-17t11.5-17l689-689q8-8 17-11.5t17-3.5q18 0 32.5 13t14.5 35v386q-31-19-59-28t-66-9q-97 0-165 68t-68 165q0 44 17 84t47 71zm562-37q-14 13-33 13t-33-14q-15-14-15-33t15-34l50-50-51-51q-14-15-14-33.5t15-33.5q15-14 33.5-14t33.5 14l50 51 51-51q15-14 34-13.5t33 14.5q14 14 13.5 33T899-261l-51 51 51 51q13 14 13 33t-14 33q-14 14-33 14t-33-13l-51-51z" />
  </Svg>
);
