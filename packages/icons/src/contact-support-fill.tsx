import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";

export const SvgContactSupportFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="m477-168-43-1q-147-12-247.5-121.5T86-548q0-157 111.5-267.5T467-926q78 0 145 28.5t116.5 79Q778-768 806.5-699T835-549q0 147-81.5 266.5T549-78q-11 7-23.5 6.5T502-78q-11-5-17-15.5t-6-23.5zm-9-139q20 0 34-14t14-34q0-19-14-33t-34-14q-20 0-34 14t-14 33q0 20 14 34t34 14M367-642q13 5 26 0t24-17q7-11 20.5-17t33.5-6q19 0 35.5 11.5T523-639q0 18-11 38t-33 42q-22 23-34.5 42.5T432-485q0 14 9 24.5t23 10.5q13 0 22.5-7.5T501-476q6-10 11.5-22t19.5-27q35-37 47.5-62t12.5-54q0-50-33.5-80T476-751q-32 0-67 13.5T360-698q-10 16-8.5 33.5T367-642" />
  </Svg>
);