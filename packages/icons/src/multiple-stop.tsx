import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgMultipleStop = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="m244-261 57 57q14 15 14 34t-13 32q-15 15-33.5 15T236-138L98-274q-7-7-11-15.5T83-308q0-9 4-18t11-16l138-136q14-14 33-14t33 14q13 14 13 33t-13 32l-58 58h215q20 0 34 13.5t14 33.5q0 20-14 33.5T459-261zm375 6q-22 0-37-15.5T567-308q0-22 15-37.5t37-15.5q22 0 37.5 15.5T672-308q0 22-15.5 37.5T619-255m167 0q-22 0-38-15.5T732-308q0-22 16-37.5t38-15.5q22 0 37 15.5t15 37.5q0 22-15 37.5T786-255m-70-350H501q-20 0-33.5-13.5T454-652q0-20 13.5-34t33.5-14h215l-57-57q-14-14-14-33t14-33q14-14 32.5-14t33.5 14l137 137q7 7 11 15.5t4 18.5q0 9-4 18t-11 15L725-482q-15 14-34 14t-32-14q-14-14-14-33t14-32zm-541 6q-22 0-37.5-16T122-652q0-23 15.5-38.5T175-706q22 0 37.5 15.5T228-652q0 21-15.5 37T175-599m166 0q-22 0-37.5-16T288-652q0-23 15.5-38.5T341-706q22 0 37.5 15.5T394-652q0 21-15.5 37T341-599" />
  </Svg>
);