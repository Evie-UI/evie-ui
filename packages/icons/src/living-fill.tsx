import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgLivingFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M149-55q-39.05 0-66.525-27.475Q55-109.95 55-149v-662q0-39.463 27.475-67.231Q109.95-906 149-906h662q39.463 0 67.231 27.769Q906-850.463 906-811v662q0 39.05-27.769 66.525Q850.463-55 811-55zm139-186h384q36.95 0 59.475-21.825T754-322v-149q0-30-16-52.907-16-22.907-38-35.093v-31q0-52-36.5-88.5T575-715H385q-52 0-88.5 36.5T260-590v32q-22 12.186-38 35.093Q206-500 206-470v148q0 37.35 22.525 59.175Q251.05-241 288-241m.308-61Q280-302 274-308.138q-6-6.137-6-14.362V-471q0-19 11.5-30.5T310-513q19 0 30.5 11.5T352-471v100h256v-100q0-19 11.5-30.5T650-513q19 0 30.5 11.5T692-471v149q0 8-6 14t-14 6zM413-432v-38q0-46-29-72t-62-26.6V-590q0-27 18-45t45-18h190q27 0 45 18t18 45v21.4q-33 .6-62 26.6t-29 72v38z" />
  </Svg>
);