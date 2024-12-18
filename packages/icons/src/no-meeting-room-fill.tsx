import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgNoMeetingRoomFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="m796-283-94-95v-348h-87v261L214-866h371q13 0 25.5 6.5T615-836v15h134q20 0 33.5 14t13.5 34zm37 222L615-278v136q0 20-13.5 33.5T568-95H109q-20 0-33.5-13.5T62-142q0-20 13.5-33.5T109-189h56v-540l-86-86q-11-11-12-25.5T78-866q11-12 25-12t26 12l755 755q11 11 11.5 24.5T884-61q-11 11-25.5 11T833-61" />
  </Svg>
);
