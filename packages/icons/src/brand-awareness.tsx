import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgBrandAwareness = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M799-441h-97q-17 0-29-12t-12-29q0-17 12-29t29-12h97q18 0 30 12t12 29q0 17-12 29t-30 12M594-278q10-13 27-16t30 7l82 61q14 9 16 25.5t-8 29.5q-10 14-27 17.5t-31-7.5l-80-61q-14-10-16-26t7-30m138-456-82 61q-13 10-29.5 7.5T594-682q-9-13-7-29.5t16-26.5l82-62q13-10 29.5-6.5T740-790q10 14 8 30.5T732-734M255-335H127q-20 0-33.5-13.5T80-382v-196q0-20 13.5-34t33.5-14h128l154-154q23-23 52-11t29 43v535q0 32-29 44t-52-11zm140-291-100 95H174v102h121l100 96zM282-480" />
  </Svg>
);