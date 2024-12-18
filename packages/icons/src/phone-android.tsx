import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";

export const SvgPhoneAndroid = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M418.235-136h123.53Q550-136 556-142t6-14.5q0-8.5-6-14t-14.235-5.5h-123.53Q410-176 404-170.5t-6 14q0 8.5 6 14.5t14.235 6M271-17q-39.05 0-66.525-27.475Q177-71.95 177-111v-738q0-39.05 27.475-66.525Q231.95-943 271-943h418q39.05 0 66.525 27.475Q783-888.05 783-849v738q0 39.05-27.475 66.525Q728.05-17 689-17zm0-184v90h418v-90zm0-60h418v-498H271zm0-558h418v-30H271zm0 618v90zm0-618v-30z" />
  </Svg>
);
