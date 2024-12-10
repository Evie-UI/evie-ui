import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgOds = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M242-357h60q20 0 35-15t15-35v-146q0-20-15-35t-35-15h-60q-20 0-35 15t-15 35v146q0 20 15 35t35 15m0-50v-146h60v146zm184 50h86.419Q533-357 547.5-372q14.5-15 14.5-35v-146q0-20-14.5-35T512-603h-86q-10.2 0-17.1 7.6-6.9 7.6-6.9 16.4v199q0 9 7.6 16t16.4 7m26-50v-146h60v146zm287 50q14.025 0 23.513-9.487Q772-375.975 772-390v-76q0-14-9.487-23-9.488-9-23.513-9h-77v-55h85q9.833 0 17.417-7.116 7.583-7.117 7.583-18Q772-589 764.417-596q-7.584-7-17.417-7H645q-15.025 0-24.013 9.487Q612-584.025 612-570v78q0 14 8.987 23.5Q629.975-459 645-459h77v52h-85q-10.833 0-17.917 7.116-7.083 7.117-7.083 18Q612-371 619.083-364q7.084 7 17.917 7zM149-135q-39.05 0-66.525-27.475Q55-189.95 55-229v-502q0-39.463 27.475-67.231Q109.95-826 149-826h662q39.463 0 67.231 27.769Q906-770.463 906-731v502q0 39.05-27.769 66.525Q850.463-135 811-135zm0-94h662v-502H149zm0 0v-502z" />
  </Svg>
);