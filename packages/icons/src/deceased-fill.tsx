import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";

export const SvgDeceasedFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M433-67q-106 0-180-74t-74-179v-94q71 0 135.5 24.5T427-316v-115q-87-18-143.5-87.5T227-680v-149q0-31 27.5-43.5T305-865l74 63 65-78q14-17 36-17t37 17l65 78 73-63q23-20 51-7.5t28 43.5v149q0 92-57 161.5T534-431v115q47-49 111.5-73.5T781-414v94q0 105-74 179T528-67z" />
  </Svg>
);