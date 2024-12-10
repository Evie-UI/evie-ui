import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";

export const SvgBook5 = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M270-55q-56.318 0-95.659-36.995Q135-128.991 135-185v-555q0-49.566 30.118-87.434Q195.235-865.302 243-875l262-55q44-10 79 19.093T619-837v451q0 33.311-21 59.155Q577-301 544-294l-276.667 60.908q-19.476 3.784-32.404 16.916Q222-203.044 222-184.686 222-166 236.419-154t33.643 12H739v-640q0-18.05 12.763-31.025Q764.526-826 782.263-826 800-826 813-813.025T826-782v633q0 39.8-27.394 66.9Q771.213-55 731-55zm99-282 163-37v-473l-163 35zm-87 18.734V-794l-18.577 4Q245-786 233.5-771.962 222-757.923 222-740v440q9.625-6.2 21.312-9.6Q255-313 267-316zM222-790v490z" />
  </Svg>
);