import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgFamilyHome = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M480-260q5.245 0 10.576-2.5t9.904-6.5q17.124-16 42.822-40.5Q569-334 593-362.757q24-28.757 40.5-59.16Q650-452.32 650-478q0-38.824-25.5-64.412Q599-568 560-568q-23 0-44 11.5T480-529q-15-16-36.081-27.5-21.081-11.5-43.568-11.5Q361-568 335.5-542.412T310-478q0 26 16.5 56.243 16.5 30.243 40.5 59t49.698 53.257Q442.396-285 459.52-269q4.573 4 9.904 6.5Q474.755-260 480-260M234-109q-38.75 0-66.375-27.625T140-203v-307l-45 34q-13.348 11-30.635 8.875-17.288-2.125-27.326-15.5Q27-496 28.944-513.69 30.89-531.381 45-541l378-288q13-9 27.1-14 14.099-5 28.763-5 15.716 0 29.926 5Q523-838 536-829l378 289q14.294 9.667 16.147 27.333Q932-495 922-481.63q-10.81 13.983-26.905 15.306Q879-465 865-475l-46-35v307q0 38.75-27.394 66.375Q764.213-109 724-109zm-11-82h513v-382L479-769 223-573.377zm0 0h513z" />
  </Svg>
);