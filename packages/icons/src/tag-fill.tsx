import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";

export const SvgTagFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="m352-302-34 133q-4 15-16.5 25T274-134q-23 0-37-17.5t-8-40.5l28-110H154q-23 0-37-17.5t-8-40.5q4-15 16-25.5t29-10.5h127l42-168H220q-23 0-37-17.5t-8-40.5q4-15 16-25.5t29-10.5h127l32-133q4-15 16.5-25t27.5-10q23 0 36.5 17.5T468-769l-27 111h168l32-133q4-15 16.5-25t27.5-10q23 0 36.5 17.5T730-769l-27 111h103q23 0 37 17.5t8 40.5q-4 15-16 25.5T806-564H680l-43 168h103q23 0 37 17.5t8 40.5q-4 15-16 25.5T740-302H614l-34 133q-4 15-16.5 25T536-134q-23 0-37-17.5t-8-40.5l28-110zm23-94h168l42-168H418z" />
  </Svg>
);
