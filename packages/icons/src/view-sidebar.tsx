import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";

export const SvgViewSidebar = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M149-135q-38.775 0-66.388-27.612Q55-190.225 55-229v-502q0-39.188 27.612-67.094Q110.225-826 149-826h662q39.188 0 67.094 27.906Q906-770.188 906-731v502q0 38.775-27.906 66.388Q850.188-135 811-135zm525-465h137v-131H674zm0 180h137v-120H674zM149-229h465v-502H149zm525 0h137v-131H674z" />
  </Svg>
);