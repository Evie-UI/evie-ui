import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgLabPanel = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M115-105q-39.8 0-66.9-27.394Q21-159.788 21-200v-201q0-31.45 19.125-56.725Q59.25-483 88-491h20v-130.275Q86-628 71-647.879 56-667.759 56-692v-97q0-28.525 20.856-49.763Q97.713-860 127-860h258q28.875 0 49.438 21.15Q455-817.7 455-788v97q0 24.241-15 43.621-15 19.379-37 26.165V-495h154v-126q-22-7-37-26.879-15-19.88-15-44.121v-97q0-28.525 20.856-49.763Q546.713-860 576-860h258q28.875 0 49.438 21.237Q904-817.525 904-789v97q0 24.241-15 44.121-15 19.879-37 26.604V-491h20q28.75 8 48.375 33.275T940-401v201q0 40.212-27.394 67.606Q885.213-105 845-105zm470-595h240v-80H585zm-449 0h240v-80H136zm501 205h136v-126H637zm-449 0h136v-126H188zm-80 303h745v-216H108zm28-508v-80zm449 0v-80zM108-192v-216z" />
  </Svg>
);