import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgStarRateHalfFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M480-671v324l137 104-55-173 126-82H537zm1 422L324-130q-14 10-29 9t-27-9q-12-8-17-22t-1-30l60-195-153-111q-14-10-18.5-24t.5-28q5-13 15.5-23t29.5-10h189l62-204q4-17 17-25.5t28-8.5q15 0 28 8.5t18 25.5l61 204h190q18 0 28.5 10t15.5 23q5 14 .5 28T803-488L650-377l60 194q4 17-1 30.5T692-131q-12 9-26.5 10T637-131z" />
  </Svg>
);