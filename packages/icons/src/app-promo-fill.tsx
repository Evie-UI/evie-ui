import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgAppPromoFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M450-476v-174q0-13 8.5-21.5T480-680q13 0 21.5 8.5T510-650v174l63-63q9-9 21-9t21 9q9 9 9 21t-9 21L514-396q-14.364 14-34.182 14T446-396L345-497q-9-9-9-21t9-21q9-9 21-9t21 9zM271-17q-39.05 0-66.525-27.475Q177-71.95 177-111v-738q0-39.05 27.475-66.525Q231.95-943 271-943h418q39.05 0 66.525 27.475Q783-888.05 783-849v738q0 39.05-27.475 66.525Q728.05-17 689-17zm0-244h418v-498H271zm147 125h124q8 0 14-6t6-14.5q0-8.5-6-14t-14-5.5H418q-8 0-14 5.5t-6 14q0 8.5 6 14.5t14 6" />
  </Svg>
);