import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgHttpFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M27-384v-193q0-12.567 8.067-20.783Q43.133-606 56.5-606q12.933 0 21.217 8.217Q86-589.567 86-577v56h104v-56q0-12.567 8.067-20.783Q206.133-606 219.5-606q12.933 0 21.217 8.217Q249-589.567 249-577v194q0 12.567-8.21 20.783Q232.58-354 220.023-354q-13.423 0-21.723-8.5Q190-371 190-384v-77H86v78q0 12.567-8.21 20.783Q69.58-354 57.023-354 43.6-354 35.3-362.5 27-371 27-384m315 0v-162h-55q-13.867 0-21.933-8.474Q257-562.947 257-575.907q0-12.96 8.067-21.526Q273.133-606 286.609-606H457q13 0 21.5 8.474 8.5 8.473 8.5 21.433 0 12.96-8.5 21.526Q470-546 457-546h-55v162q0 13-8.474 21.5-8.473 8.5-21.433 8.5-12.96 0-21.526-8.5Q342-371 342-384m240 0v-162h-55q-13 0-21.5-8.474-8.5-8.473-8.5-21.433 0-12.96 8.5-21.526Q514-606 527-606h171q13 0 21.5 8.474 8.5 8.473 8.5 21.433 0 12.96-8.5 21.526Q711-546 698-546h-56v162q0 13-8.474 21.5-8.473 8.5-21.433 8.5-12.96 0-21.526-8.5Q582-371 582-384m153 0v-187q0-14.633 10.683-24.817Q756.367-606 771-606h108q26 0 40.5 15t14.5 39.75V-482q0 26.2-14.5 40.1Q905-428 879-428h-84v45q0 12.567-8.777 20.783Q777.447-354 764.93-354q-12.516 0-21.223-8.5Q735-371 735-384m60-103h79v-59h-79z" />
  </Svg>
);