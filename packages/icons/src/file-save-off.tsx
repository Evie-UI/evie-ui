import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";

export const SvgFileSaveOff = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="m824-218-42-41 32.733-33q7.8-9 20.034-9.5Q847-302 857.391-293 866-283 866-271.5t-9 20.5zm-64-62-60-60v-48q0-12.75 8.675-21.375 8.676-8.625 21.5-8.625 12.825 0 21.325 8.625T760-388zm23 209L237-617v380h236q19.75 0 33.375 13.675Q520-209.649 520-189.825 520-170 506.375-156.5 492.75-143 473-143H237q-39.05 0-66.525-27.475Q143-197.95 143-237v-474L42-812q-11-11-11-25.5T42-863q11-11 25-11t25 11L906.803-47.197Q911-44 912-41.125t1 6.834v12.534q0 9.264-5.388 15.51Q902.225 0 893 0H597.857q-14.814 0-24.836-10.37Q563-20.74 563-36.07q0-14.905 10.35-24.917Q583.7-71 599-71zM683-614v88q0 20.75 13.675 34.375Q710.351-478 730.175-478 750-478 763.5-491.625 777-505.25 777-526v-100q0-19.117-7.457-36.443Q762.087-679.768 749-693L573-869q-13.232-13.087-30.557-20.543Q525.117-897 506-897H237q-21.345 0-38.672 7.5Q181-882 170-870l67 67h257v118q0 29 21 50t50 21zm-160 96" />
  </Svg>
);