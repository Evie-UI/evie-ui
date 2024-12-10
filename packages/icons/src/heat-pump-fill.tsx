import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgHeatPumpFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M452-265v-148L348-308q21 20 48 30.5t56 12.5m56 1q29-3 55.5-14.5T613-308L508-413zm144.456-84Q671-370 682.5-396.478 694-422.957 696-452H548zM548-508h149q-1-30.015-13.5-56.507Q671-591 652.456-613zm-40-40 105-104q-22-18-48.478-30.5Q538.043-695 508-695zm-27.895 90Q489-458 496-464.605q7-6.606 7-15.5Q503-489 496.193-496t-16-7q-9.193 0-15.693 6.807t-6.5 16q0 9.193 6.605 15.693 6.606 6.5 15.5 6.5M452-548v-148q-30.043 0-56.522 13Q369-670 348-652.456zm-188 40h149L308-614q-19 22-30 49.5T264-508m44 160 105-104H265q2 29.043 12.5 55.522Q288-370 308-348M189-95q-39.05 0-66.525-27.475Q95-149.95 95-189v-582q0-39.463 27.475-67.231Q149.95-866 189-866h582q39.463 0 67.231 27.769Q866-810.463 866-771v582q0 39.05-27.769 66.525Q810.463-95 771-95z" />
  </Svg>
);