import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgFollowTheSignsFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M379.54-765q-34.54 0-59.04-25.46t-24.5-60Q296-885 320.5-910t59.04-25q34.54 0 60 25.119Q465-884.763 465-850q0 34.35-25.46 59.675Q414.08-765 379.54-765M95-29l117-584-85 38v136H43v-192l203-84q36-15 71.923-6.593Q353.845-713.186 374-684l44.415 66Q449-571 495-546q46 25 100 25v82q-66 0-121-26t-101-82l-36 129 92 81v308h-82v-247l-90-80-78 327zm579 0v-570H513v-333h408v333H759v570zm55-625 112-111-112-112-44 44 37 37H587v62h135l-37 37z" />
  </Svg>
);