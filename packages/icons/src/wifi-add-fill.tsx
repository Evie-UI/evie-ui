import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgWifiAddFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M447-101 55-537q-11-11.081-16-25.932-5-14.852-5-29.203 0-17.448 7-34.052T62-656q94-73 195.5-115T480-813q121 0 222.5 42T898-656q14 13.12 21 29.608 7 16.489 7 33.992 0 14.4-5 29.329-5 14.928-15 26.071l-73 75q-17-2-32.141-3.5Q785.718-467 769-467q-91.086 4-156.543 69Q547-333 544-242q0 26 5 48t13 44l-45 45q-5.585 10-14.793 14.5Q493-86 483-86q-9.711 1-19.356-2.5Q454-92 447-101m284-84h-73q-19.75 0-33.375-13.675-13.625-13.676-13.625-34Q611-253 624.625-266.5 638.25-280 658-280h73v-73q0-19.75 13.675-33.375Q758.351-400 778.088-400q19.737 0 33.824 13.625Q826-372.75 826-353v73h72q19.625 0 33.812 13.675 14.188 13.676 14.188 34Q946-212 931.812-198.5 917.625-185 898-185h-72v72q0 20.75-14.263 34.375t-34 13.625Q758-65 744.5-78.625 731-92.25 731-113z" />
  </Svg>
);