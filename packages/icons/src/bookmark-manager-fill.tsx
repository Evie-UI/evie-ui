import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";

export const SvgBookmarkManagerFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M556-102v-78q0-9 3.5-17t10.5-15l211-211q11-11 24.5-16.5T834-445q14 0 28 6t25 17l37 37q11 11 16.5 24.5T946-333q0 15-6 29t-17 25L713-68q-7 7-15 10t-17 3h-78q-20 0-33.5-13.5T556-102m285-199 30-32-37-37-31 31zM149-135q-39 0-66.5-27.5T55-229v-502q0-39 27.5-67t66.5-28h222q18 0 36 8t31 21l43 43h330q39 0 67 27.5t28 66.5v175q-26-14-54.5-18t-56.5 4q-14 4-28.5 12.5T739-465L524-252q-13 13-20.5 30.5T496-184v49z" />
  </Svg>
);
