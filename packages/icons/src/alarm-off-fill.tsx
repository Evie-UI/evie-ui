import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgAlarmOffFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M801-254 276-775q40-24 86.5-37t96.5-13q79 0 150.5 30t125 81.5Q788-662 819-592t30 151q-1 48-13.5 96.5T801-254m-91-570q-11-11-10.5-25.5T713-876q12-9 25.5-9t23.5 11l134 129q12 11 12 26t-12 27q-12 12-27.5 12T841-692zM465-55q-80 0-149.5-30.5t-121-83Q143-221 113-292T83-444q0-66 20.5-123T166-679l-48-49-32 31q-11 11-25.5 10.5T35-698q-12-12-12-27t12-27l30-30-26-25q-12-12-12-27t12-27q12-12 28-12t28 12l758 760q12 12 11.5 27.5T853-47q-12 12-28 12t-27-12l-94-91q-45 39-108.5 61T465-55" />
  </Svg>
);
