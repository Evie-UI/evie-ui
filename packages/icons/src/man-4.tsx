import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgMan4 = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="m391-113-61-460q-6-42 22.857-74T425-679h110q43.286 0 72.143 32T630-573l-61 460q-2 18-15.394 29.5Q540.211-72 521.566-72h-83.342q-18.645 0-31.935-11.5Q393-95 391-113m89.212-627Q445-740 420.5-764.748t-24.5-59.5Q396-859 420.288-884q24.287-25 59.5-25Q515-909 539.5-884.094q24.5 24.907 24.5 59.882 0 34.562-24.288 59.387Q515.425-740 480.212-740" />
  </Svg>
);