import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgFreeCancellationFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="m679-150 150-151q14-14 34-13.5t34 14.5q13 14 13 33t-14 33L714-51q-14 14-34 14t-34-14l-99-99q-14-14-14-33t14-33q14-14 33-14t33 14zM388-315l-38 38q-14 14-33 14t-33-14q-14-14-14-33t14-33l38-38-38-38q-14-14-14-33t14-33q14-14 33-14t33 14l38 38 38-38q14-14 33-14t33 14q14 14 14 33t-14 33l-38 38 38 38q14 14 14 33t-14 33q-14 14-33 14t-33-14zM189-55q-39 0-66.5-27.5T95-149v-602q0-39 27.5-67t66.5-28h56v-19q0-17 12-29t29-12q17 0 29 12t12 29v19h306v-19q0-17 12-29t29-12q17 0 29 12t12 29v19h56q39 0 67 28t28 67v329l-95 96v-244H189v421h273l94 94z" />
  </Svg>
);
