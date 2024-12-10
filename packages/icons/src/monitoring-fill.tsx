import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgMonitoringFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M103-148.807V-203l91-91v145.5q0 18.837-13.238 32.169Q167.524-103 148.825-103 129-103 116-116.125q-13-13.125-13-32.682M269-149v-215l91-91v306q0 19.625-13.238 32.812Q333.524-103 313.825-103q-19.275 0-32.05-13.188Q269-129.375 269-149m166-.141V-455l91 91v216q0 18.625-13.263 31.812-13.263 13.188-32 13.188Q462-103 448.5-116.125 435-129.25 435-149.141M601-149v-217l91-90v308q0 18.625-13.238 31.812Q665.524-103 646.825-103 627-103 614-116.125 601-129.25 601-149m166 0v-378l90-90v469q0 18.625-13.263 31.812-13.263 13.188-32 13.188Q793-103 780-116.125T767-149M117-468l217-215q27.648-28 65.824-28T466-683l94 94 216-216q14-14 33.643-14.08 19.643-.08 32.798 14Q856-791 856.5-772T843-739L626-522q-27.714 28-66.357 27.5T493-522l-93-93-215 214q-14.067 14-34.176 13.58-20.11-.42-33.265-14.5Q104-416 103.5-435t13.5-33" />
  </Svg>
);