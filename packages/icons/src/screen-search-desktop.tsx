import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";

export const SvgScreenSearchDesktop = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M458-420q22.086 0 41.543-7.5T538-446l69 69q7 7 16 7t16-6.588Q646-384 646-393t-7-16l-72-72q11-17 18.5-35.356T593-555q0-57-39-96t-96-39q-57 0-96 39.075-39 39.076-39 96Q323-498 362-459t96 39m.044-50Q423-470 398-494.956q-25-24.955-25-60Q373-590 397.969-615T458-640q35 0 60 24.956 25 24.955 25 60Q543-520 518.044-495q-24.955 25-60 25M52.755-83q-15.905 0-25.83-10.4Q17-103.801 17-119.175q0-15.375 9.925-25.6Q36.85-155 52.755-155h854.49q15.905 0 25.83 10.289 9.925 10.29 9.925 25.5Q943-104 933.075-93.5 923.15-83 907.245-83zM149-215q-39.05 0-66.525-27.475Q55-269.95 55-309v-462q0-39.463 27.475-67.231Q109.95-866 149-866h662q39.463 0 67.231 27.769Q906-810.463 906-771v462q0 39.05-27.769 66.525Q850.463-215 811-215zm0-94h662v-462H149zm0 0v-462z" />
  </Svg>
);