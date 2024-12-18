import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgTeamDashboard = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M189-95q-38.775 0-66.388-27.612Q95-150.225 95-189v-582q0-39.188 27.612-67.094Q150.225-866 189-866h582q39.188 0 67.094 27.906Q866-810.188 866-771v582q0 38.775-27.906 66.388Q810.188-95 771-95zm221-94v-261H189v261zm60 0h301v-261H470zM189-510h582v-261H189z" />
  </Svg>
);
