import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgNightSightAutoFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M440-89q-146 0-248.5-102.5T89-440q0-70 22.5-133t63-111q40.5-48 96-77T391-790q26 1 38 24.5t-3 45.5q-12 25-18.5 52t-6.5 54q0 107 74.5 182T657-357q14 0 27-.5t26-4.5q24-7 40.5 10.5T759-311q-37 101-124.5 161.5T440-89m224-507-18 52q-5 13-16 20.5t-24 7.5q-21 0-34-17.5t-6-37.5l99-288q5-14 16.5-22t26.5-8h31q15 0 26.5 8t16.5 22l98 288q7 20-5.5 37.5T840-516q-13 0-24-7.5T800-544l-18-52zm21-67h76l-38-118z" />
  </Svg>
);