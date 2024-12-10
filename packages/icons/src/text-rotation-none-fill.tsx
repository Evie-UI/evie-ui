import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";

export const SvgTextRotationNoneFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M698-165H190q-17 0-29-12t-12-30q0-17 12-29t29-12h508l-22-23q-13-12-13.5-28.5T676-329q13-13 29-13t29 13l89 89q13 15 13 33.5T823-174l-89 90q-12 13-28.5 13T676-84q-14-13-14-29t14-30zM400-527l-27 81q-5 13-14.5 20t-22.5 7q-21 0-33-17t-5-37l135-361q4-11 13.5-18t21.5-7h29q12 0 22 7.5t14 18.5l134 358q8 21-5 38.5T626-419q-14 0-25-8t-15-22l-27-78zm16-60h130l-63-188h-4z" />
  </Svg>
);