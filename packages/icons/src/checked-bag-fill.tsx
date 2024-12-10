import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgCheckedBagFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M306-227v-530h28q1-63 43.958-103Q420.917-900 479-900q59 0 102 40t43 103h29v530zm95-530h156q0-34-23.5-54.5T479-832q-31 0-54.5 20.5T401-757m291 530v-530h39q39.463 0 67.231 27.769Q826-701.463 826-662v341q0 39.05-27.769 66.525Q770.463-227 731-227zm-465 0q-39.05 0-66.525-27.475Q133-281.95 133-321v-341q0-39.463 27.475-67.231Q187.95-757 227-757h39v530zM104-72q-20 0-33.5-13.5T57-118.912q0-19.913 13.5-34Q84-167 104-167h752q20 0 33.5 14.088 13.5 14.087 13.5 34Q903-99 889.5-85.5T856-72z" />
  </Svg>
);