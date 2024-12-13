import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";

export const SvgFolderSupervised = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M587-135v-19q0-41 42-64.5T746.5-242q75.5 0 118 23.5T907-154v19zm160.08-174Q716-309 695-329.92q-21-20.921-21-51.5 0-30.58 20.92-52.08 20.921-21.5 51.5-21.5 30.58 0 52.08 21.42 21.5 21.421 21.5 51.5Q820-351 798.58-330q-21.421 21-51.5 21M149-229v-502 229-13zm0 94q-39.05 0-66.525-27.975Q55-190.95 55-229v-502q0-38.463 27.475-66.731Q109.95-826 149-826h222q18.689 0 36.344 8 17.656 8 30.744 21.088L481.454-754H811q38.463 0 66.731 27.975Q906-698.05 906-660v199q-21-15-45-25.5t-50-15.571V-660H442l-71-71H149v502h342q1 24 7 48t17 46z" />
  </Svg>
);
