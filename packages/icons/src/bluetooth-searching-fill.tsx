import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";

export const SvgBluetoothSearchingFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M354-395 190-231q-11 11-24.5 11T140-231q-11-12-11-25.5t11-25.5l199-198-199-199q-11-11-11-25t11-26q12-11 25.5-11t25.5 11l163 164-1-230q0-22 15-35t33-13q8 0 17 3.5t16 11.5l144 143q6 7 10.5 16t4.5 18q0 9-4.5 18T578-618L439-480l139 138q6 7 10.5 16t4.5 18q0 9-4.5 18T578-274L434-131q-7 8-16 11t-17 3q-18 0-33-12.5T353-164zm71-171 86-86-86-85zm0 342 86-84-86-87zm216-186-53-53q-8-7-8-16.5t8-16.5l52-52q11-12 22.5-9t15.5 18q4 14 6 29t2 30q0 15-3 30.5t-7 29.5q-4 16-14 19t-21-9m104 104q-7-7-7-16.5t4-18.5q14-33 22.5-67.5T773-480q0-36-8.5-71T742-619q-5-11-4-21t9-18q13-12 33.5-9t32.5 28q15 33 23.5 73.5T845-482q0 42-9 83.5T809-319q-10 22-29 24.5T745-306" />
  </Svg>
);