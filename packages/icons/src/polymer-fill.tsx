import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgPolymerFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M299-153h-52q-27 0-48.5-13T165-202L35-434q-12-21-11.5-45.5T35-526l141-249q8-15 22-23.5t31-8.5q36 0 53.5 30.5t.5 61.5L151-480l123 220 307-501q13-21 34.5-33.5T662-807h49q26 0 47.5 12.5T793-760l131 234q12 21 12 46t-12 46L785-185q-9 15-23 23.5t-31 8.5q-36 0-53.5-30.5t.5-61.5l131-235-123-219-306 500q-13 21-34.5 33.5T299-153" />
  </Svg>
);
