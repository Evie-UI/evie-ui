import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgFilterHdr = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M111-229q-29 0-42-25.5t5-50.5l169-225q7-9 16.5-13.5T280-548q11 0 20.5 4.5T318-530l155 207h281L560-581 457-443l-60-80 126-167q7-9 16.5-13.5T560-708q11 0 20.5 4.5T598-690l288 385q18 25 5 50.5T849-229zm346-94h297-295 49.5zm-267 0h180l-90-121zm0 0h180z" />
  </Svg>
);
