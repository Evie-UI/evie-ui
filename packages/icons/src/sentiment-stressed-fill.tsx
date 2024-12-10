import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgSentimentStressedFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="m480-327 43 43q7 7 17 7t17-7l43-43 13 13q11 11 26 11t26-12q11-11 11-26t-11-26l-48-49q-7-6-17-6.5t-17 6.5l-43 43-43-43q-7-7-17-7t-17 7l-43 43-43-43q-7-7-17-6.5t-17 6.5l-48 49q-11 11-11.5 26t11.5 26q11 11 26 11.5t26-10.5l13-13 43 43q7 7 17 7t17-7zM326-560l-43 32q-13 9-16 24t6 28q9 12 25 14.5t29-6.5l100-73q9-7 9-19t-9-20l-101-73q-13-9-28-6.5T274-645q-9 13-6.5 28.5T283-592zm308 0 44-32q12-9 15-24t-6-28q-9-12-25-14.5t-28 6.5l-101 72q-9 8-9 20t9 19l101 74q13 9 28 6.5t24-15.5q9-12 6.5-27.5T678-528zM480-55q-88 0-165.5-33T179-179q-58-58-91-135.5T55-480q0-88 33-165.5T179-781q58-58 135.5-91.5T480-906q88 0 165.5 33.5T781-781q58 58 91.5 135.5T906-480q0 88-33.5 165.5T781-179q-58 58-135.5 91T480-55" />
  </Svg>
);