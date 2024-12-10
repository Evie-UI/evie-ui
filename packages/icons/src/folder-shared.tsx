import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";

export const SvgFolderShared = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M149-135q-39.05 0-66.525-27.975Q55-190.95 55-229v-502q0-38.463 27.475-66.731Q109.95-826 149-826h222q18.689 0 36.344 8 17.656 8 30.744 21.088L481.454-754H811q38.463 0 66.731 27.975Q906-698.05 906-660v431q0 38.05-28.269 66.025Q849.463-135 811-135zm0-94h662v-431H442l-71-71H149zm0 0v-502zm290-63h320v-4q0-41-42.5-68T599-391q-75 0-117.5 27T439-296zm159.92-159q30.08 0 51.58-20.92 21.5-20.921 21.5-52 0-30.08-21.42-51.58-21.421-21.5-51.5-21.5-30.08 0-51.58 21.42-21.5 21.421-21.5 51.5Q526-493 547.42-472q21.421 21 51.5 21" />
  </Svg>
);