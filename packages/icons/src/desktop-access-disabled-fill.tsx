import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgDesktopAccessDisabledFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M131-860v101l-94-94q-11-10-10.5-24.5T38-903q11-11 25-11t25 11l768 766q11 11 10.5 25T855-87q-11 11-25.5 11T805-87L665-226H551v100h39q20 0 33.5 13.5T637-79q0 21-13.5 34.5T590-31H370q-20 0-33.5-13.5T323-79q0-20 13.5-33.5T370-126h39v-100H149q-39 0-66.5-27.5T55-320v-451q0-38 26.5-63.5T131-860m717 631L209-866h603q38 0 66.5 28.5T907-771v462q0 29-17 51t-42 29" />
  </Svg>
);
