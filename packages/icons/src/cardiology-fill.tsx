import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgCardiologyFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="m433-460-40-48q-7-6-14.5-9t-16.5-3H78q-14-29-19-55t-5-54q0-101 67.5-169T289-866q56 0 104 24t86 71q44-50 90-72.5T669-866q101 0 169 68t68 169q0 28-5 54t-18 55H618l-69-74q-8-7-17-11.5t-20-4.5q-12 0-23 7t-15 19zm-17 330Q301-235 231-308T120-440h224l66 73q7 8 17.5 12.5T450-350q12 0 22.5-7.5T488-377l42-124 41 49q8 6 16 9t17 3h236q-41 59-111.5 132T543-130q-14 13-30.5 18.5T479-106q-17 0-33.5-5.5T416-130" />
  </Svg>
);
