import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgCameraOutdoor = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M536-217q-15 0-25-10t-10-25v-170q0-14 10-24.5t25-10.5h175q14 0 24.5 10.5T746-422v55l45-26q11.586-7 23.293-.543Q826-387.087 826-373v72q0 13.696-11.5 20.348Q803-274 791-281l-45-26v55q0 15-10.5 25T711-217zm-401 28v-377q0-22.036 9.547-41.752Q154.094-627.469 172-641l251-189q24.68-19 56.84-19Q512-849 537-830l251 189q18.375 13.531 28.188 33.248Q826-588.036 826-566v81h-95v-81L480-754 229-565.667V-189h549q19.625 0 33.812 13.675Q826-161.649 826-141.825 826-122 811.812-108.5 797.625-95 778-95H229q-39.8 0-66.9-27.1Q135-149.2 135-189m345-282" />
  </Svg>
);