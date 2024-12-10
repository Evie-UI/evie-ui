import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";

export const SvgDataThresholdingFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M189-95q-39.025 0-66.513-27.487Q95-149.975 95-189v-582q0-39.438 27.487-67.219Q149.975-866 189-866h582q39.438 0 67.219 27.781Q866-810.438 866-771v582q0 39.025-27.781 66.513Q810.438-95 771-95zm233-431 56 56q14.727 15 34.364 15Q532-455 546-470l159-159q10-11.756 10-25.378T705-679q-11-11-25.5-11T654-680L512-537l-56-57q-14.727-14-34.364-14Q402-608 388-594L256.167-462.25Q244-450 244-436.256q0 13.745 12 25.256 10 11 24.5 10.5T306-411zM273-309l-84 84v36h35l120-120zm153 0L306-189h71l120-120zm159 0L465-189h71l120-120zm158 0L623-189h71l77-77v-43z" />
  </Svg>
);