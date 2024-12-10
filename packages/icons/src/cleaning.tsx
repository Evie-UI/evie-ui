import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";

export const SvgCleaning = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M403-809v-22h-28q-12.75 0-21.375-9.07t-8.625-27q0-14.905 10.35-24.917Q365.7-902 381-902h228q21.375 0 33.688 12.662Q655-876.675 655-856v21q0 4.917-1 10.458-1 5.542-3 9.542l-40 85H478v-34l-59.855 64.789Q415-696 391.6-691q-14.743 0-22.171-11.5Q362-714 369-728zM389-34q-39.8 0-66.9-27.394Q295-88.787 295-129v-207q0-11.421 2.611-23.671T307-382l144-259q13.056-22.419 35.331-35.709Q508.605-690 534-690h84q19.625 0 33.812 14.188Q666-661.625 666-642v513q0 40.213-27.394 67.606Q611.213-34 571-34zm0-95h182v-466h-37L389-336.673zm0 0h182z" />
  </Svg>
);