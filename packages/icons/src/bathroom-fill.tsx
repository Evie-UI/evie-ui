import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgBathroomFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M353-233q16 0 27.5-11.5T392-272q0-16-11.5-27.5T353-311q-16 0-27.5 11.5T314-272q0 16 11.5 27.5T353-233m127 0q16 0 27.5-11.5T519-272q0-16-11.5-27.5T480-311q-16 0-27.5 11.5T441-272q0 16 11.5 27.5T480-233m127 0q16 0 27.5-11.5T646-272q0-16-11.5-27.5T607-311q-16 0-27.5 11.5T568-272q0 16 11.5 27.5T607-233M353-359q16 0 27.5-11.5T392-398q0-16-11.5-27.5T353-437q-16 0-27.5 11.5T314-398q0 16 11.5 27.5T353-359m127 0q16 0 27.5-11.5T519-398q0-16-11.5-27.5T480-437q-16 0-27.5 11.5T441-398q0 16 11.5 27.5T480-359m127 0q16 0 27.5-11.5T646-398q0-16-11.5-27.5T607-437q-16 0-27.5 11.5T568-398q0 16 11.5 27.5T607-359M480.24-733Q392-733 330.5-671.67 269-610.34 269-522q0 15.675 10.663 26.337Q290.325-485 306-485h348q15.675 0 26.338-10.663Q691-506.325 691-522q0-88.34-61.26-149.67Q568.481-733 480.24-733M149-55q-39.05 0-66.525-27.475Q55-109.95 55-149v-662q0-39.463 27.475-67.231Q109.95-906 149-906h662q39.463 0 67.231 27.769Q906-850.463 906-811v662q0 39.05-27.769 66.525Q850.463-55 811-55z" />
  </Svg>
);