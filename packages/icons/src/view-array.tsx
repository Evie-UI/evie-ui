import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";

export const SvgViewArray = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M329-260v-440zm463 83q-20.75 0-34.375-13.625T744-224v-512q0-19.75 13.625-33.375T792-783h70q19.75 0 33.375 13.625T909-736v512q0 19.75-13.625 33.375T862-177zm-499 0q-19.75 0-33.375-13.625T246-224v-512q0-19.75 13.625-33.375T293-783h374q19.75 0 33.375 13.625T714-736v512q0 19.75-13.625 33.375T667-177zm-195 0q-19.75 0-33.375-13.625T51-224v-512q0-19.75 13.625-33.375T98-783h71q19.75 0 33.375 13.625T216-736v512q0 19.75-13.625 33.375T169-177zm231-523v440h302v-440z" />
  </Svg>
);
