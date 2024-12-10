import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";

export const SvgNotificationsFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M182-175q-20 0-33.5-13.5T135-222q0-20 13.5-33.5T182-269h24v-279q0-92.693 53-168.347Q312-792 403-812v-16q0-32.917 22.25-55.458Q447.5-906 480-906t54.75 22.542Q557-860.917 557-828v16q91 19 144.5 95T755-548v279h23q19.875 0 33.938 13.5Q826-242 826-222t-14.062 33.5Q797.875-175 778-175zM480.5-46Q444-46 418-71.912 392-97.825 392-135h177q0 37-26 63t-62.5 26" />
  </Svg>
);