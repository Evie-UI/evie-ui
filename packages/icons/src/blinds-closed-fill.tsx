import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgBlindsClosedFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M126-181v-598q0-40.213 27.394-67.606Q180.788-874 221-874h518q40.213 0 67.606 27.394Q834-819.213 834-779v598h33q19.75 0 33.375 13.675 13.625 13.676 13.625 34Q914-113 900.375-99.5 886.75-86 867-86H675q0 28-19.101 48.5t-46 20.5Q581-17 560.5-36.9T540-86H94q-20.75 0-34.375-13.675Q46-113.351 46-133.675 46-154 59.625-167.5 73.25-181 94-181zm95-508h349v-90H221zm428 0h90v-90h-90zM221-520h349v-90H221zm428 0h90v-90h-90zM221-350h349v-90H221zm428 0h90v-90h-90zM221-181h349v-90H221zm428 0h90v-90h-90z" />
  </Svg>
);
