import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgDomainVerificationFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="m438-409-58.821-58.821Q367.913-479 353.065-479T328-467.931q-11 11.069-11 25.891 0 14.823 11 25.04l76 77q14.727 14 34.364 14Q458-326 472-340l161-161q10-10.304 10-25.152T632.552-552q-10.449-11-25.5-11-15.052 0-26.131 11.079zM149-647h662v-84H149zm0 512q-39.05 0-66.525-27.475Q55-189.95 55-229v-502q0-39.463 27.475-67.231Q109.95-826 149-826h662q39.463 0 67.231 27.769Q906-770.463 906-731v502q0 39.05-27.769 66.525Q850.463-135 811-135z" />
  </Svg>
);