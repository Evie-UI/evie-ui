import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";

export const SvgFireExtinguisherFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M347-28q-39.938 0-68.969-29.031Q249-86.063 249-126v-57h462v57q0 39.938-28.5 68.969Q654-28 614-28zm-98-185v-254h462v254zm2-284q13-58 47-102t85-69q-9-8-17.136-18.683Q357.727-697.367 353-708l-148-34q-14-4-20.5-14t-6.5-22q0-12 6.5-21.5T205-813l155-35q17.929-29.547 49.964-48.273Q442-915 480-915q22 0 42.867 6.5 20.866 6.5 37.366 17.5l94.4-18Q678-913 694.5-898.5 711-884 711-862v169q0 22-16.5 36.5T655-646l-65-13h.5-1.5q51 21 81.5 65t38.5 97zm229-215q25 0 42.5-17.5T540-772q1-25-17-42.5T480-832q-25 0-42.5 17.5T420-772q0 25 17.5 42.5T480-712" />
  </Svg>
);