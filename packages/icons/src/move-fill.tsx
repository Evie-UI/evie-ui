import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";

export const SvgMoveFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M440.25-265Q428-265 419-272t-12-18q-11.778-34.714-29.389-60.357Q360-376 343-399q-25.723-33.415-41.862-64.207Q285-494 285-540.444q0-63.745 45.551-109.15Q376.101-695 440.051-695 504-695 549.5-649.594q45.5 45.405 45.5 109.15Q595-494 579-463t-41 64q-18.081 23.048-35.662 48.677T473-290q-3 11-11.75 18t-21 7M440-490q21 0 35.5-14.5T490-540q0-21-14.5-35.5T440-590q-21 0-35.5 14.5T390-540q0 21 14.5 35.5T440-490m-4 399q-163.667 0-276.833-112.5Q46-316 46-479.667 46-561 76.5-632t83-124q52.5-53 123.546-83.5T436-870q81.18 0 152.09 30.5t123.41 83q52.5 52.5 83 123T825-484v14l30-31q12-9 25-8.5t23 11.5q11 11 11 24.5t-11.229 24.843L812-357q-15 14-34.455 14-19.454 0-33.545-14l-92-92q-10-10.182-10.5-24.591T652-499q10-11 23.5-11t24.5 9l31 31v-14q0-120-88.5-205.5t-207-85.5q-121.5 0-208 86.379Q141-602.243 141-480q-1 121 86 208t209.423 87Q481-185 526-200t84-44q16.213-11 34.606-10.5 18.394.5 32.481 14.109Q691-226 691-206t-15 32q-49.751 38.579-111.731 60.789Q502.29-91 436-91" />
  </Svg>
);