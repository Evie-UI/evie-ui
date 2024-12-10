import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgDigitalWellbeingFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M480-623q-63 0-107-44t-44-107.657q0-63.656 44-107.5Q417-926 480-926t107 43.843q44 43.844 44 107.5Q631-711 587-667t-107 44m-66 523L221-292q-21-22-33.5-53.061T175-416.396Q175-482 222-529t113.318-47Q366-576 393-562.5q27 13.5 49 35.5l38 38 38-38q21-21 48.5-35t58.182-14Q691-576 738.5-529T786-416.396q0 40.274-13 71.335Q760-314 739-292L546-100q-14.333 13-31.25 19.5T479.917-74Q462-74 445.143-80.5T414-100" />
  </Svg>
);