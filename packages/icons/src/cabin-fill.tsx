import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgCabinFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M223-191h513v-78H223zm0-160h513v-78H223zm0-160h513v-61l-23-17H243l-20 16zm129-160h251l-126-98zM140-203v-306l-44 34q-14 11-31.5 8.5T36-483q-10-13-7.5-30.5T45-541l95-72v-93q0-18 12-29.5t32-11.5q17 0 28 11t11 28v31l200-151q25-19 56.5-19t56.5 19l378 288q14 10 16 27t-8 31q-11 14-27.5 16t-30.5-8l-45-35v306q0 39-27.5 66.5T724-109H234q-39 0-66.5-27.5T140-203m47-585q-20 0-32-14t-7-31q16-47 55-76t87-29q18 0 33-8t23-24q9-13 21-24t28-11q19 0 30.5 14.5T432-959q-16 47-55 75.5T290-855q-17 0-31.5 9.5T234-822q-8 14-20 24t-27 10" />
  </Svg>
);