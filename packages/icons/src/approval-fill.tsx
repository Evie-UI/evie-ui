import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";

export const SvgApprovalFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M229-55q-40 0-67-27t-27-67v-166q0-38 27.5-66t66.5-28h502q39 0 67 28t28 66v166q0 40-27.5 67T731-55zm43-175h417q18 0 30-12t12-30q0-18-12-30.5T689-315H272q-19 0-31 12.5T229-272q0 18 12 30t31 12m174-218L286-643q-14-16-19.5-35t-2.5-40q12-80 72.5-134T480-906q83 0 143.5 54T696-718q3 21-2.5 40T674-643L515-448q-15 16-35 16t-34-16" />
  </Svg>
);