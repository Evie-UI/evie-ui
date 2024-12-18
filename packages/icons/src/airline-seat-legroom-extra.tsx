import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";

export const SvgAirlineSeatLegroomExtra = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M456-257H140q-38.75 0-66.375-27.625T46-351v-471q0-17.75 12.175-29.375Q70.351-863 88.175-863 105-863 117-851.375T129-822v482h327q16.75 0 28.875 11.675Q497-316.649 497-298.825 497-281 484.875-269T456-257m152-153H351q-55 0-93.5-39T219-543v-320h254v262h109q26.361 0 47.68 13Q651-575 662-552l142 295 58-27q20-10 41-4t33 27q11 21 3.775 42.932Q932.55-196.136 913-186l-117 55q-18 8-36.5 2T733-153z" />
  </Svg>
);
