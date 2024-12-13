import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";

export const SvgUnpublishedFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M480-55q-90 0-168-32.5T177-177q-57-57-89.5-135T55-480q0-72 21-136.5T136-734l-89-89q-10-10-10.5-25T47-874q11-11 25.5-11T98-874l773 773q10 11 10 25.5T870-50q-10 10-24.5 10T820-50l-86-86q-53 39-117.5 60T480-55m353-185L604-468l76-77q15-14 15-32.5T680-611q-14-13-33.5-12.5T613-610l-75 75-298-298q51-35 111.5-54T480-906q90 0 167.5 33t135 90.5Q840-725 873-647.5T906-480q0 68-19 128.5T833-240M270-433l115 116q14 14 33.5 14t34.5-14l50-51-66-65-28 27-84-83q-12-12-27.5-11.5T270-488q-12 12-12 28t12 27" />
  </Svg>
);
