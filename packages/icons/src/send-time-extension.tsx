import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";

export const SvgSendTimeExtension = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M536-158v-35q0-16 10-28t26-17l122-35-122-35q-16-5-26-17t-10-29v-34q0-26 22-40t46-2l231 115q26 13 26 42t-26 42L604-116q-24 12-46-2t-22-40M180-95q-34 0-59.5-25.5T95-180v-190q35-4 59.5-30.5T179-463q0-36-24.5-62.5T95-557v-189q0-34 25.5-60t59.5-26h155q19-44 53-71.5t77-27.5q43 0 77 27.5t53 71.5h151q34 0 60 26t26 60v361l-95-47v-305H511v-53q0-20-13-33t-33-13q-20 0-33 13t-13 33v53H189v119q39 27 62 67.5t23 87.5q0 47-22.5 88.5T189-308v119h119q24-49 65.5-75T476-285v96q-42-5-72 25.5T370-95zm296-190q-61-5-102.5 21T308-189H189v-119q40-25 62.5-66.5T274-463q0-47-23-87.5T189-618v-119h230v-53q0-20 13-33t33-13q20 0 33 13t13 33v53h226v305l-124-63q-48-24-92.5 4T476-410z" />
  </Svg>
);