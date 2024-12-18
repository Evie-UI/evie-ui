import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgContentPasteOffFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="m866-210-95-94v-467h-55v55q0 19.75-13.625 33.375T669-669H405L209-866h154q11-36 43.275-59.5Q438.549-949 480-949q40 0 72.5 23.5T598-866h173q40.975 0 67.987 27.013Q866-811.975 866-771zM480-782q17 0 28.5-12t11.5-28q0-17-11.5-28.5T480-862q-17 0-28.5 11.5T440-822q0 16 11.5 28t28.5 12m204 593L189-684v495zM189-95q-39.975 0-66.988-26.512Q95-148.025 95-189v-590l-41-40q-10-10.2-10.5-25.1Q43-859 54.158-870q11.158-10 25.5-10T105-870l762 763q10 10.182 10.5 24.59Q878-68 866.842-58q-11.158 11-25 11T817-58l-38-37z" />
  </Svg>
);
