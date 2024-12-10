import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";

export const SvgSdCardFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M229-55q-39.05 0-66.525-27.475Q135-109.95 135-149v-463q0-19.403 7.457-36.987Q149.913-666.571 163-680l197-197q13-13 30.722-21T428-906h303q39.463 0 67.231 27.769Q826-850.463 826-811v662q0 39.05-27.769 66.525Q770.463-55 731-55zm178.175-464q12.825 0 21.325-8.625T437-549v-97q0-12.75-8.675-21.375-8.676-8.625-21.5-8.625-12.825 0-21.325 8.625T377-646v97q0 12.75 8.675 21.375 8.676 8.625 21.5 8.625m118 0q12.825 0 21.325-8.625T555-549v-97q0-12.75-8.675-21.375-8.676-8.625-21.5-8.625-12.825 0-21.325 8.625T495-646v97q0 12.75 8.675 21.375 8.676 8.625 21.5 8.625m118 0q12.825 0 21.325-8.625T673-549v-97q0-12.75-8.675-21.375-8.676-8.625-21.5-8.625-12.825 0-21.325 8.625T613-646v97q0 12.75 8.675 21.375 8.676 8.625 21.5 8.625" />
  </Svg>
);