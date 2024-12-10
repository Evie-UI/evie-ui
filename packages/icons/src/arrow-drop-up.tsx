import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgArrowDropUp = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M296-383q-10.4 0-17.2-7.136-6.8-7.137-6.8-17.319Q272-410 280-424l175.2-174.2q4.8-4.8 11.453-7.3 6.654-2.5 13.438-2.5 6.784 0 13.347 2.5 6.562 2.5 11.366 7.304l175.314 174.314Q684-420 686-415.873q2 4.127 2 8.557Q688-397 681.2-390q-6.8 7-17.2 7z" />
  </Svg>
);