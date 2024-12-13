import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgDualScreen = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="m234-251 253 101v-559L234-810zm-28 82q-27.34-11.327-43.17-34.586Q147-226.846 147-256v-543q0-40.213 27.1-67.606Q201.2-894 241-894l273 103q27.346 10.8 43.673 34.468Q574-732.864 574-704v543q0 49.8-41.5 77.9Q491-55 444-74zm281-18v-87h240v-533H241v-87h478q40.213 0 67.606 27.394Q814-839.213 814-799v518q0 39.8-27.394 66.9Q759.213-187 719-187zm-253-64v-559z" />
  </Svg>
);
