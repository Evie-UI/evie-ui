import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgFullCoverage = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M140-74q-39.05 0-66.525-27.769Q46-129.538 46-169v-464q0-19.75 13.675-33.375Q73.351-680 93.175-680 113-680 126.5-666.375 140-652.75 140-633v464h590q19.75 0 33.375 13.675 13.625 13.676 13.625 34Q777-101 763.375-87.5 749.75-74 730-74zm204-206q-39.462 0-67.231-27.475Q249-334.95 249-374v-442q0-19.75 13.625-33.375T296-863h611q19.625 0 33.812 13.625Q955-835.75 955-816v442q0 39.05-27.769 66.525Q899.463-280 860-280zm0-94h516v-395H344zm104-108h96q12.75 0 21.375-8.625T574-512v-155q0-12.75-8.625-21.375T544-697h-96q-12.75 0-21.375 8.625T418-667v155q0 12.75 8.625 21.375T448-482m213 0h80q18 0 31-13t13-31q0-18-13-31t-31-13h-80q-18 0-31 13t-13 31q0 18 13 31t31 13m0-127h80q18 0 31-13t13-31q0-18-13-31t-31-13h-80q-18 0-31 13t-13 31q0 18 13 31t31 13M344-374v-395z" />
  </Svg>
);