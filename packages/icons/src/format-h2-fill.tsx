import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgFormatH2Fill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M143.825-258Q124-258 110.5-271.625 97-285.25 97-306v-349q0-19.75 13.675-33.375Q124.351-702 144.175-702q20.25 0 34.037 13.625Q192-674.75 192-655v128h136.263v-128q0-19.75 13.622-33.375Q355.508-702 375.254-702 395-702 409-688.375 423-674.75 423-655v349q0 20.75-13.963 34.375T374.825-258q-19.74 0-33.182-13.625Q328.2-285.25 328.2-306v-127H192v127q0 20.75-13.963 34.375T143.825-258M590-258q-19.75 0-33.375-13.625T543-306v-127q0-38.75 27.1-66.375T637-527h137v-80H590q-19.75 0-33.375-13.675-13.625-13.676-13.625-34Q543-675 556.625-688.5 570.25-702 590-702h184q39.213 0 66.606 27.394Q868-647.213 868-607v80q0 38.75-27.394 66.375Q813.213-433 774-433H637v80h183.922q19.703 0 33.39 13.675 13.688 13.676 13.688 34Q868-285 854.1-271.5 840.2-258 821-258z" />
  </Svg>
);