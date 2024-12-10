import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgMoveUp = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M309-134q-124 0-211.5-85.5T10-428q0-116 83.5-194.5T292-697l-52-52q-13-12-13-30t13-31q13-12 29-12t29 13l122 121q13 15 13.5 34T420-621L298-499q-12 12-29.5 12T239-499q-13-13-13.5-29.5T238-558l63-63q-85-1-146.5 54.5T93-428q0 90 62.5 151T309-216h84q17 0 29 12t12 29q0 17-12 29t-29 12zm252-386q-20 0-33.5-13.5T514-567v-211q0-20 13.5-34t33.5-14h298q20 0 33.5 14t13.5 34v211q0 20-13.5 33.5T859-520zm0 385q-20 0-33.5-13.5T514-182v-211q0-20 13.5-33.5T561-440h298q20 0 33.5 13.5T906-393v211q0 20-13.5 33.5T859-135zm48-94h203v-117H609z" />
  </Svg>
);