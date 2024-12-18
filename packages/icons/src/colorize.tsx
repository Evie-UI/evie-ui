import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgColorize = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M95-142v-117q0-19 7.5-37t20.5-31l338-338-73-72 78-77 92 92 123-125q9-9 20-13.5t22-4.5q11 0 22 5.5t21 14.5l79 79q9 10 14.5 21t5.5 22q0 11-4.5 22T847-681L721-557l92 92-76 76-72-72-338 338q-13 13-31 20.5T259-95H142q-20 0-33.5-13.5T95-142m94-47h74l346-346-74-74-346 346zm465-419 117-116-47-47-116 117zm0 0-46-46z" />
  </Svg>
);
