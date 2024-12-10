import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgConveyorBeltFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M174-77q-58.083 0-98.542-40.441Q35-157.882 35-215.941T75.458-315q40.459-41 98.542-41h614q58.5 0 99.25 40.75T928-216q0 58.083-40.75 98.542Q846.5-77 788-77zm0-87h614q22.775 0 37.888-14.855Q841-193.711 841-216.105q0-22.395-15.112-37.645Q810.775-269 788-269H174q-22.35 0-37.175 15.057Q122-238.886 122-216.193q0 22.693 14.825 37.443Q151.65-164 174-164m215-257q-19.75 0-33.375-13.625T342-468v-352q0-19.75 13.625-33.375T389-867h352q19.75 0 33.375 13.625T788-820v352q0 19.75-13.625 33.375T741-421zM78.3-513q-19.932 0-32.616-12.536Q33-538.073 33-557.036 33-576 45.526-589 58.05-602 77-602h176q18.526 0 31.763 13.258Q298-575.483 298-556.926 298-538 284.763-525.5T253-513zM527-631h75q16.333 0 28.167-11.175Q642-653.351 642-669.961t-11.833-28.825Q618.333-711 602-711h-74q-17.077 0-28.538 12.161-11.462 12.16-11.462 29Q488-653 499.125-642T527-631m-368-45q-19.077 0-31.538-12.675-12.462-12.676-12.462-31Q115-738 127.672-751q12.673-13 30.275-13h104.2q17.93 0 30.891 13.036Q306-737.928 306-720.054 306-701 292.949-688.5 279.897-676 262-676z" />
  </Svg>
);