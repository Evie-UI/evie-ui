import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgMarkChatReadFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="m706-260 144-144q14-14 33.5-13.5T917-403q14 14 13.5 33T916-337L740-160q-14 14-33.5 14T673-160l-92-92q-15-14-14-33t14-33q14-14 33-13.5t33 13.5zm-491 45-79 79q-23 23-52 11.5T55-168v-643q0-39 27.5-67t66.5-28h662q39 0 67 28t28 67v236q0 21-14 34.5T858-527H567q-39 0-66.5 27.5T473-433v171q0 20-13.5 33.5T426-215z" />
  </Svg>
);