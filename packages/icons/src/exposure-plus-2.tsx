import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgExposurePlus2 = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M814-177H503q-12.414 0-21.207-8.842Q473-194.684 473-207.167v-48.594Q473-260 481-276l203.147-224.065Q716-534 730.5-560t14.5-50.698q0-37.155-20.25-57.728Q704.5-689 670-689q-25.222 0-45.851 9.553Q603.52-669.895 590-652q-11 15-29 20.5t-35.378-.979q-19.962-8.726-28.292-25.123Q489-674 499-690q28.16-46.409 73.58-69.705Q618-783 670.236-783q74.751 0 122.758 46.938Q841-689.125 841-613q0 46.487-21.5 86.744Q798-486 753-436L598-268l1.47 1H814q19.125 0 32.062 13.013Q859-240.974 859-221.737q0 19.237-12.938 31.987Q833.125-177 814-177M231-399h-88q-17.85 0-29.925-11.777Q101-422.555 101-439.965q0-17.41 12.075-29.223Q125.15-481 143-481h88v-89q0-17.425 12.125-29.213Q255.251-611 273.175-611q17.5 0 29.162 11.787Q314-587.425 314-570v89h89q17.425 0 29.212 11.777Q444-457.445 444-440.035q0 17.41-11.788 29.223Q420.425-399 403-399h-89v89q0 17.425-11.979 29.212Q290.042-269 272.333-269q-17.708 0-29.521-11.788Q231-292.575 231-310z" />
  </Svg>
);