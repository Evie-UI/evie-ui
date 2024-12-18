import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgHourglassDisabled = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="m820-50-5-5H182q-20 0-33.5-13.5T135-102q0-20 13.5-33.5T182-149h41v-118q0-67 36-125t95-88q-42-24-75.5-65.5T231-639L47-823q-10-10-10-25t11-26q11-11 25-11t25 11l773 773q10 11 10 25.5T870-50q-10 10-24.5 10T820-50M599-473l-69-70q48-15 80.5-57t32.5-94v-117H317v56l-34-34v-22h-22l-94-95h611q20 0 34 14t14 34q0 20-14 33.5T778-811h-40v117q0 70-38.5 130T599-473M317-149h326v-78L445-425q-55 13-91.5 57.5T317-267zm421 0h22l-22-22z" />
  </Svg>
);
