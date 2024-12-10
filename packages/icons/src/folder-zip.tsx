import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgFolderZip = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M626-486v-87h126v87zm0 86H499v-86h127zm0 86v-86h126v86zM442-660l-71-71H149v502h350v-85h127v85h185v-431H626v87H499v-87zM149-135q-39.05 0-66.525-27.975Q55-190.95 55-229v-502q0-38.463 27.475-66.731Q109.95-826 149-826h222q18.689 0 36.344 8 17.656 8 30.744 21.088L481.454-754H811q38.463 0 66.731 27.975Q906-698.05 906-660v431q0 38.05-28.269 66.025Q849.463-135 811-135zm0-94v-502z" />
  </Svg>
);