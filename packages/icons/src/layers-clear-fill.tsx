import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgLayersClearFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M673-409 322-760l100-78q26-20 58-19.5t58 20.5l247 193q37 28 37 73.5T785-496zm111 110-68-67 61-47q13-9 28.5-9t28.5 10q18 14 18.5 37T835-338zm13 214L671-210 538-107q-26 20-58 19.5T422-108L127-337q-19-14-18.5-37t18.5-37q14-10 29.5-10t29.5 10l294 229 124-96-54-55h27l-51 41q-21 15-46 14.5T435-294L152-514q-28-22-28.5-56.5T151-627l58-46L91-791q-11-10-11-24.5T91-841q11-11 25.5-11t25.5 11l706 707q11 11 11.5 24.5T848-85q-11 12-25.5 12T797-85" />
  </Svg>
);
