import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";

export const SvgInstallMobileFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M271-17q-39.05 0-66.525-27.475Q177-71.95 177-111v-738q0-39.05 27.475-66.525Q231.95-943 271-943h298v94H271v30h298v60H271v558h418v-119h94v209q0 39.05-27.475 66.525Q728.05-17 689-17zm427-520v-257q0-15.3 9.975-25.65 9.976-10.35 26.2-10.35 16.225 0 26.025 9.925 9.8 9.925 9.8 26.396V-537l83-83q11-9 25-9.5t25 9.5q11 11.756 11 25.878T903-569L767-434q-14.182 14-33.091 14T701-434L565-569q-11-11-11-25.122T565-620q11.511-11 25.256-11Q604-631 616-620zM569-819H271v-30h298z" />
  </Svg>
);
