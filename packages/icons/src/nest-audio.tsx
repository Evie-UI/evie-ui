import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgNestAudio = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M360-86q-80.975 0-137.488-56.512Q166-199.025 166-280v-360q0-97.09 68.455-166.045Q302.91-875 400-875h160q97.09 0 166.045 68.955Q795-737.09 795-640v360q0 80.975-57.013 137.488Q680.975-86 600-86zm0-94h240q42 0 71-29t29-71v-360q0-58-41-99t-99-41H400q-58 0-99 41t-41 99v360q0 42 29 71t71 29m0-270q13 0 21.5-9t8.5-21q0-13-8.5-21.5T360-510q-12 0-21 8.5t-9 21.5q0 12 9 21t21 9m120 0q13 0 21.5-9t8.5-21q0-13-8.5-21.5T480-510q-12 0-21 8.5t-9 21.5q0 12 9 21t21 9m120 0q13 0 21.5-9t8.5-21q0-13-8.5-21.5T600-510q-12 0-21 8.5t-9 21.5q0 12 9 21t21 9m-120-30" />
  </Svg>
);
