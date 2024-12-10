import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgSportsHockey = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M34-200v-45q0-24 17-40.5T92-302h25v159H92q-24 0-41-16.5T34-200m127 57v-159h166l52-106 72 128-52 106q-7 15-21 23t-31 8zm765-57q0 24-17 40.5T869-143h-26v-159h26q23 0 40 16.5t17 40.5zm-127 57H614q-17 0-31.5-8T561-174L286-732q-16-29 1.5-57t51.5-28q17 0 30.5 9t21.5 23l91 185 88-184q8-15 21.5-24t31.5-9q33 0 50.5 28t2.5 57L551-470l82 168h166z" />
  </Svg>
);