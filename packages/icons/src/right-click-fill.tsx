import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgRightClickFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="m486-206 26-86q68-11 113.5-63.5T671-480q0-80-55.5-135.5T480-671q-72 0-125 45.5T292-511l-86 27q2-114 81.5-192.5T480-755q115 0 195 80t80 195q0 113-78 192.5T486-206m-182-8L173-82q-19 19-45 19T83-82q-19-19-19-45.5T83-173l131-131-81-27q-17-6-16.5-23.5T134-377l304-91q13-3 23 7t7 23l-91 304q-5 17-22.5 17.5T331-133z" />
  </Svg>
);
