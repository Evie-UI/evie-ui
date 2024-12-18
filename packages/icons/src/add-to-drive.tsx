import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgAddToDrive = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M204-75q-16 0-36-11.5T141-112L32-301q-8-13-8.5-36.5T32-374l277-475q8-13 28-25t36-12h215q16 0 36 12t29 25l212 367q-19-7-39-11t-42-4q-9 0-17.5 2t-15.5 4L576-791H386L122-338l97 169h354q10 28 27.5 52T642-75zm77-193-33-59 191-334h82l122 212q-20 15-37 34.5T577-373l-97-169-102 179h194q-10 23-16 46.5t-6 48.5zM737-95v-120H617v-94h120v-120h94v120h120v94H831v120z" />
  </Svg>
);
