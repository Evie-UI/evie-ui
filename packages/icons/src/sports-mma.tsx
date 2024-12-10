import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgSportsMma = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M310-72q-19 0-29.5-11T270-112v-118h432v118q0 18-11 29t-29 11zm483-573v127q0 7-1 9l-33 157q-6 24-23.5 38.5T694-299H267q-25 0-42.5-14.5T201-352l-32.875-156.904Q167-511.196 167-518.143V-771q0-40 26.769-67.5T262-866h344q40 0 67.5 27.5T701-771v98q5-12 15-18t25-6q22.45 0 37.225 14.5Q793-668 793-645M289-393h382l28-138v-28h-93v-212H262v240zm115-166h60q28 0 47.5-19.5T531-626q0-28-19.5-47.5T464-693h-60q-28 0-47.5 19.5T337-626q0 28 19.5 47.5T404-559" />
  </Svg>
);