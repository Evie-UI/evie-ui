import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgIntegrationInstructionsFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="m331-478 81-81q8-8 8.5-20.5t-8.022-21.5q-8.478-9-21.345-9-12.866 0-22.133 9l-89 89q-14 15.364-14 34.636 0 19.273 14 33.364l89 89q9 9 21.5 9t21.5-9q9-9 8.5-21t-9.5-21zm299 0-82 82q-8 8-8.5 20t8.022 21q8.478 9 21.345 9 12.866 0 22.133-9l90-89q14-14.455 14-33.727Q695-497 681-512l-89-89q-9-9-21-9t-21 9q-9 9-8.5 22t9.5 21zM189-95q-39.025 0-66.513-27.487Q95-149.975 95-189v-582q0-39.438 27.487-67.219Q149.975-866 189-866h180q11-35 41-57.5t70-22.5q40 0 70 22.5t41 57.5h180q39.438 0 67.219 27.781Q866-810.438 866-771v582q0 39.025-27.781 66.513Q810.438-95 771-95zm291-696q17.467 0 29.233-11.767Q521-814.533 521-832t-11.767-29.233Q497.467-873 480-873t-29.233 11.767Q439-849.467 439-832t11.767 29.233Q462.533-791 480-791" />
  </Svg>
);