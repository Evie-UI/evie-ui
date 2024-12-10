import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgActivityZone = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M199.943-53q-61.226 0-104.085-42.859Q53-138.716 53-199.942 53-248 80.656-286.351 108.312-324.703 153-339v-283q-45-13-72.5-51.5T53-760.057q0-61.226 42.859-104.084Q138.716-907 199.942-907q48.057 0 86.408 27.656Q324.703-851.688 339-807h283q14-45 52.198-72.5T760-907q61.25 0 104.125 42.875T907-760q0 47.604-27.5 85.802Q852-636 807-622v283q44.688 14.297 72.344 52.649Q907-248 907-199.943q0 61.226-42.859 104.085Q821.283-53 760.057-53 712-53 673.5-80.5T622-153H339q-14.297 44.688-52.649 72.344Q248-53 199.943-53m-.443-655q23 0 38.25-14.75T253-759.5q0-23-15.113-38.25Q222.775-813 200-813q-22.5 0-37.25 15.112Q148-782.775 148-760q0 22.5 14.75 37.25T199.5-708m560 0q23 0 38.25-14.75T813-759.5q0-23-15.112-38.25Q782.775-813 760-813q-22.5 0-37.25 15.112Q708-782.775 708-760q0 22.5 14.75 37.25T759.5-708M339.394-247H622q10-33 34-57t57-35.394V-622q-34-10-57.5-33.5T622-713H339.394Q328-680 304-656t-57 34v282.606Q280-328 304-304t35.394 57M759.5-148q23 0 38.25-14.75T813-199.5q0-23-15.112-38.25Q782.775-253 760-253q-22.5 0-37.25 15.113Q708-222.775 708-200q0 22.5 14.75 37.25T759.5-148m-560 0q23 0 38.25-14.75T253-199.5q0-23-15.113-38.25Q222.775-253 200-253q-22.5 0-37.25 15.113Q148-222.775 148-200q0 22.5 14.75 37.25T199.5-148m.5-52" />
  </Svg>
);