import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgAltitudeFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M111-69q-29 0-42-25.5t5-50.5l169-225q14-19 37-18.5t38 18.5l137 182q7 10 20 12t22-6q9-8 10-20t-6-21L397-363l126-167q14-19 37-19t38 19l288 385q18 25 5 50.5T849-69zm654-437q-20 0-33.5-13.5T718-553v-110l-26 25q-14 13-32.5 12.5T628-640q-14-13-14-33t14-33l104-104q14-14 33.5-14t33.5 14l103 104q14 14 14 33t-14 33q-13 13-31.5 14T838-637l-25-26v110q0 20-14 33.5T765-506" />
  </Svg>
);
