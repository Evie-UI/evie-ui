import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgFoundation = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M189-196v-77h-39q-19.75 0-33.375-13.675Q103-300.351 103-320.175 103-340 116.625-353.5 130.25-367 150-367h39v-102h-77q-16.5 0-22.25-15T96-510l353-317q13.186-11 31.093-11T511-827l354 317q11 11 5.25 26T849-469h-78v102h39q19.75 0 33.375 13.675Q857-339.649 857-319.825 857-300 843.375-286.5 829.75-273 810-273h-39v77q0 19.75-13.675 33.375Q743.649-149 723.825-149 704-149 690.5-162.625 677-176.25 677-196v-77H527v77q0 19.75-13.675 33.375Q499.649-149 479.825-149 460-149 446.5-162.625 433-176.25 433-196v-77H283v77q0 19.75-13.675 33.375Q255.649-149 235.825-149 216-149 202.5-162.625 189-176.25 189-196m94-171h150v-319L283-552zm244 0h150v-185L527-686z" />
  </Svg>
);