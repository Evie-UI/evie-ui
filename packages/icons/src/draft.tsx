import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";

export const SvgDraft = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M229-55q-39.05 0-66.525-27.475Q135-109.95 135-149v-662q0-39.463 27.475-67.231Q189.95-906 229-906h323q19.556 0 37.278 8Q607-890 620-877l177 177q13 13 21 30.722T826-632v483q0 39.05-27.769 66.525Q770.463-55 731-55zm313-617v-139H229v662h502v-476H589q-19.75 0-33.375-13.625T542-672M229-811v186zv662z" />
  </Svg>
);