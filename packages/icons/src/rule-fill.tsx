import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";

export const SvgRuleFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="m665-230-65 65q-14 15-33 15t-33-15q-14-14-14-32.5t14-33.5l65-65-65-65q-14-14-14-33t14-33q14-14 33-14t33 14l65 65 66-65q14-14 32.5-14t33.5 14q14 14 14 33t-14 33l-66 65 66 65q14 15 14 33.5T797-165q-15 15-33.5 15T731-165zm-9-413 145-146q14-14 34-13.5t34 14.5q14 14 13.5 33T868-722L689-544q-14 14-33.5 14.5T622-543l-99-100q-15-14-15-33t15-33q14-14 33-13.5t33 13.5zM106-367h283q20 0 33.5 13.5T436-320q0 20-13.5 33.5T389-273H106q-20 0-33.5-13.5T59-320q0-20 13.5-33.5T106-367m0-320h283q20 0 33.5 13.5T436-640q0 20-13.5 33.5T389-593H106q-20 0-33.5-13.5T59-640q0-20 13.5-33.5T106-687" />
  </Svg>
);
