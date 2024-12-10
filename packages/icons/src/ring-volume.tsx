import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgRingVolume = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M480.825-696Q463-696 451-708.125T439-738v-127q0-17.75 12.175-29.375 12.176-11.625 30-11.625Q499-906 510.5-893.875T522-864v127q0 17.75-11.675 29.375Q498.649-696 480.825-696m199.784 87Q668-621 669-639t13-30l90-88q12-12 29-12t29 12q12 12 11.5 29.5T829-699l-88 89q-11.933 12-29.467 12.5Q694-597 680.609-609M282-610q-12.2 13.077-29.1 13.038Q236-597 224-610l-90-88q-13-13-13.553-30.096-.552-17.097 12.899-30.044 13.128-11.948 30.391-10.904Q181-768 193-756l89 90q12 11 12 27.5T282-610M134-114l-93-93q-16-16-16-42t16-42q87-93 195.5-141T480-480q135 0 244.5 47T920-291q15 16 15 42t-15 42l-94 93q-11 12-35 12.5T751-113l-104-77q-10-6.5-14.5-16.5T628-228v-146.19Q590-388 553.705-393q-36.295-5-73.705-5t-73.705 5Q370-388 332-374.19V-228q0 11.5-4.5 21.5T314-190l-105.188 77.278Q193-101 169.812-100.923 146.625-100.846 134-114m110-233q-35 17-67 41.5T117-255l55 57 72-52zm467-5v96l77 57 55-57q-28-30-61.5-52.5T711-352m0 0" />
  </Svg>
);