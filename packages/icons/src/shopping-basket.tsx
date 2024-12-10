import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgShoppingBasket = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M225-95q-32 0-58-19t-34-49L20-566q-6-23 7.953-41.5Q41.907-626 66-626h194l173-258q8-11 19.842-18 11.842-7 26-7T505-902q12 7 20 18l172 258h198q24.093 0 38.047 18.5Q947-589 941-566L829-164q-8 31-33.5 50T738-95zm-2-94h514l96-342H128zm257.053-105Q508-294 527-313.053q19-19.053 19-47T526.947-407q-19.053-19-47-19T433-406.947q-19 19.053-19 47T433.053-313q19.053 19 47 19M371-626h216L478-781zm110 266" />
  </Svg>
);