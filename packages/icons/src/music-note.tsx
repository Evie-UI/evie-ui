import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgMusicNote = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M385-92q-69.525 0-118.263-48.738Q218-189.475 218-259t48.737-118.263Q315.475-426 385-426q22.855 0 40.927 5.5Q444-415 458-405v-416q0-19.875 13.5-33.938Q485-869 505-869h191q20 0 33.5 14.062Q743-840.875 743-821v75q0 20-13.5 33.5T696-699H552v440q0 69.525-48.737 118.262Q454.525-92 385-92" />
  </Svg>
);
