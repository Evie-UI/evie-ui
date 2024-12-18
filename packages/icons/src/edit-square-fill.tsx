import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgEditSquareFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M395-348q-20 0-33.5-13.5T348-395v-101q0-19 7.5-36.5T377-564l342-341q14-14 31-20.5t35-6.5q17 0 35 7t32 21l51 51q15 15 22 32t7 35q0 18-7.5 36.5T903-717L564-376q-14 14-31.5 21t-36.5 7zm396-368 67-70-74-73-68 68zM189-95q-39 0-66.5-27.5T95-189v-582q0-39 27.5-67t66.5-28h404L317-589q-14 14-21.5 31.5T288-521v138q0 40 27.5 67.5T383-288h137q18 0 36-7.5t31-21.5l279-278v406q0 39-28 66.5T771-95z" />
  </Svg>
);
