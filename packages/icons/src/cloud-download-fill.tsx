import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgCloudDownloadFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M253-135q-97 0-166.5-68T17-369q0-84 51-150.5T201-600q22-91 89-151t155-71v372l-52-53q-11-11-25-11.5T343-504q-11 11-11 25.5t11 25.5l104 106q14 14 34 14t34-14l106-106q10-11 10-25.5T621-504q-12-11-26.5-11T569-503l-52 53v-372q103 13 174.5 91.5T770-543v24q75 7 124 60.5T943-327q0 80-56 136t-136 56z" />
  </Svg>
);