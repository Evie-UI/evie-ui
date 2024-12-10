import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";

export const SvgCloseSmallFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M480-413 360.326-294q-14.064 14-32.663 14-18.599 0-33.663-14.5-14-13.5-14-32.5t14-33l119-120-119-118.672q-14-13.82-14-32.542T294-665q14-14 33-14t33 14l120 119 118.672-119q13.065-14 32.664-14 19.6 0 33.664 14 13 14 13 33t-13 33L546-480l119 119.674q14 14.064 14 33.163 0 19.099-14 33.163-14 13-33 13t-33-13z" />
  </Svg>
);