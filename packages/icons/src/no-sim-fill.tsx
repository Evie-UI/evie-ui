import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgNoSimFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M826-242 275-792l85-85q13-13 31.067-21 18.066-8 36.933-8h303q40.463 0 67.731 27.769Q826-850.463 826-811zM229-55q-39.05 0-66.525-27.475Q135-109.95 135-149v-457q0-19.429 7.457-37.098Q149.913-660.768 164-674l22-21L48-833q-10-10.455-10.5-24.727Q37-872 47-882.478 57-894 72-893.5T98-883L901-81q11 11.5 11 25.75T901-30q-10.467 10-24.233 10Q863-20 852-30L640-242l49-50 137 135.088V-145q0 37.875-27.769 63.938Q770.463-55 731-55z" />
  </Svg>
);
