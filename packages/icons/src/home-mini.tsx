import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgHomeMini = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M350-175q-120 0-207.5-90T55-480q0-41 19.5-94t68-100Q191-721 273-753.5T480-786q125 0 207 32.5T817.5-674Q866-627 886-574t20 94q0 125-90.5 215T600-175zm10-94h230q83 0 137-40t75-111H159q19 71 71 111t130 40M149-480h662q0-30-16-66.5T740.5-615q-38.5-32-102-54T480-691q-95 0-158.5 22t-102 54Q181-583 165-546.5T149-480m331 0" />
  </Svg>
);