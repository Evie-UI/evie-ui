import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";

export const SvgLeftClick = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M474-206q-113-2-190.5-81.5T206-480q0-115 79.5-195T480-755q113 0 192.5 78.5T755-484l-87-27q-10-69-63-114.5T480-671q-80 0-135.5 55.5T289-480q0 72 45.5 124.5T448-292zm182-8-27 81q-6 17-23.5 16.5T583-134l-90-304q-4-13 6-23t23-7l305 91q16 5 16.5 22.5T828-331l-82 27 132 131q19 19 19 45t-19 45q-19 19-45.5 19T787-83z" />
  </Svg>
);
