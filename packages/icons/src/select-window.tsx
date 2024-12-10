import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgSelectWindow = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M140-57q-39.05 0-66.525-27.475Q46-111.95 46-151v-365q0-39.05 27.475-66.525Q100.95-610 140-610h92v-199q0-39.05 27.475-66.525Q286.95-903 326-903h494q39.463 0 67.231 27.475Q915-848.05 915-809v365q0 39.05-27.769 66.525Q859.463-350 820-350h-91v199q0 39.05-27.475 66.525Q674.05-57 635-57zm0-94h495v-316H140zm589-293h91v-316H326v150h306q40.787 0 68.894 28.106Q729-553.787 729-513z" />
  </Svg>
);