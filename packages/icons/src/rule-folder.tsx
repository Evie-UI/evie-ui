import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgRuleFolder = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="m311-438-24-24q-11-11-25.618-10.92-14.618.08-25.973 11Q225-451 225-437q0 14 11 25l42 42q14.455 14 33.727 14Q331-356 345-370l115-116q11-10.567 11-25.989 0-15.423-11.053-25.717Q448.895-548 434.447-548 420-548 409-537zm327-63-31-31q-11.507-12-25.746-12-14.239 0-25.747 12Q544-521 544-507t12 25l32 31-32 32q-12 11.411-12 25t12 25q11.267 11 25.133 11Q595-358 607-369l31-31 31 31q11.267 11 25.133 11Q708-358 719.5-369t11.5-25q0-14-11-25l-32-32 32-31q11-11 11-25t-11.343-25q-11.344-12-25.329-12-13.985 0-25.328 12zM149-135q-39.05 0-66.525-27.975Q55-190.95 55-229v-502q0-38.463 27.475-66.731Q109.95-826 149-826h222q18.689 0 36.344 8 17.656 8 30.744 21.088L481.454-754H811q38.463 0 66.731 27.975Q906-698.05 906-660v431q0 38.05-28.269 66.025Q849.463-135 811-135zm0-94h662v-431H442l-71-71H149zm0 0v-502z" />
  </Svg>
);