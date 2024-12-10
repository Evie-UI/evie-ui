import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgNfcFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M684-229q20 0 33.5-13.5T731-276v-408q0-20-13.5-33.5T684-731H510q-26 0-43 22.5T450-660v128q-15 9-22.5 22t-7.5 30q0 26 17 43t43 17q26 0 43-17t17-43q0-17-8-30t-22-22v-128h150v360H300v-360h83q13 0 21.5-9.5T413-696q0-15-10-25t-25-10H276q-20 0-33.5 13.5T229-684v408q0 20 13.5 33.5T276-229zM189-95q-39 0-66.5-27.5T95-189v-582q0-39 27.5-67t66.5-28h582q39 0 67 28t28 67v582q0 39-28 66.5T771-95z" />
  </Svg>
);