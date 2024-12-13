import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgFolderSupervisedFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M587-135v-19q0-41 42-64.5T746.5-242q75.5 0 118 23.5T907-154v19zm160-174q-31 0-52-21t-21-51.5q0-30.5 21-52t51.5-21.5q30.5 0 52 21.5T820-382q0 31-21.5 52T747-309M149-135q-39.05 0-66.525-27.975Q55-190.95 55-229v-502q0-38.463 27.475-66.731Q109.95-826 149-826h222q18.244 0 36.122 8T438-797l43.454 43H811q38.463 0 66.731 27.975Q906-698.05 906-660v199q-35-26-74.675-40-39.674-14-83.325-14-109 0-184 75.5T487-258q-1 32 6 63.5t22 59.5z" />
  </Svg>
);
