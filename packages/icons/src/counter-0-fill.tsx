import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";

export const SvgCounter0Fill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M480.404-55q-88.872 0-166.125-33.084-77.254-33.083-135.183-91.012-57.929-57.929-91.012-135.119Q55-391.406 55-480.362q0-88.957 33.084-166.285 33.083-77.328 90.855-134.809 57.772-57.482 135.036-91.013Q391.238-906 480.279-906q89.04 0 166.486 33.454 77.446 33.453 134.853 90.802 57.407 57.349 90.895 134.877Q906-569.34 906-480.266q0 89.01-33.531 166.247-33.531 77.237-91.013 134.86-57.481 57.623-134.831 90.891Q569.276-55 480.404-55M425-267h110q29.287 0 50.144-20.856Q606-308.712 606-338v-285q0-29.287-20.856-50.144Q564.287-694 535-694H425q-29.288 0-50.144 20.856Q354-652.287 354-623v285q0 29.288 20.856 50.144Q395.712-267 425-267m0-356h110v285H425z" />
  </Svg>
);