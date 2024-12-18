import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgRoutineFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M458-457q53 53 116.5 89T713-314q-40 57-101 89t-131 32q-119 0-203-84t-84-203q0-70 32-131t89-101q18 75 54 138.5T458-457m285 88q-24-4-47.5-11T651-397q10-19 16-40t6-43q0-81-56-137t-137-56q-22 0-43 5.5T397-651q-10-22-16.5-44T370-742q26-12 53.5-18.5T481-767q119 0 203 84t84 203q0 30-6.5 57.5T743-369M433-857v-120h94v120zm0 874v-120h94V17zm347-729-67-68 85-85 67 67zM162-95l-67-67 85-86 67 68zm695-338v-94h120v94zm-874 0v-94h120v94zM798-95l-85-84 68-67 84 84zM180-713l-85-85 67-67 86 85z" />
  </Svg>
);
