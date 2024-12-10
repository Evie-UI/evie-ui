import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgEmojiObjectsFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M480-55q-29 0-54-12.5T393-105h-14q-31-5-51.5-29T307-189v-130q-67-47-104.5-116.5T165-590q0-131 92-223.5T480-906q131 0 223.5 92.5T796-590q0 85-38 154.5T654-319v130q0 31-21 55t-51 29h-14q-9 25-34.5 37.5T480-55m-79-134h158v-44H401zm0-84h158v-40H401zm108-109v-126l76-75q8-9 7.5-20t-8.5-20q-9-8-19.5-8t-19.5 8l-65 66-65-66q-9-8-19-7.5t-19 8.5q-8 9-8 19.5t8 19.5l74 75v126z" />
  </Svg>
);