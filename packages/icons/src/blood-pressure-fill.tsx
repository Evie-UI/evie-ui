import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgBloodPressureFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M765-337q6-6 6-14t-6-14q-6-6-14-6t-14 6l-63 62q-6 6-6 14.5t6 14.5q6 6 14.5 6t14.5-6zM680-90q-79 0-134.5-55.5T490-280q0-79 55.5-134.5T680-470q79 0 134.5 55.5T870-280q0 79-55.5 134.5T680-90M55-524v-207q0-39 27.5-67t66.5-28h662q39 0 67 28t28 67v332q-35-61-95.5-96T680-530q-34 0-64.5 8.5T558-498l-79-161q-5-11-16-17t-23-6q-12 0-23 6t-16 17L280-417l-42-82q-5-11-15.5-18t-22.5-7zm94 389q-39 0-66.5-27.5T55-229v-208h117l67 138q7 10 18 16t23 6q12 0 22.5-6t15.5-17l122-242 50 100q-28 34-44 74.5T430-280q0 40 11.5 76t33.5 69z" />
  </Svg>
);
