import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";

export const SvgExtensionOffFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M180-95q-36 0-60.5-24.5T95-180v-190q35-4 59.5-30.5T179-463q0-36-24.5-62.5T95-557v-189q0-18 6.5-33t18.5-27l686 686q-12 12-27 18.5T746-95H557q-5-35-31.5-59.5T463-179q-36 0-62.5 24.5T370-95zm652-147L242-832h93q19-44 53-71.5t77-27.5q43 0 77 27.5t53 71.5h151q34 0 60 26t26 60v151q44 19 70 55t26 79q0 43-26 75.5T832-334zM817-55 54-817q-10-10-10-24.5T55-867q11-11 25.5-11t25.5 11l761 762q10 10 10.5 24.5T867-55q-11 11-25 11t-25-11" />
  </Svg>
);