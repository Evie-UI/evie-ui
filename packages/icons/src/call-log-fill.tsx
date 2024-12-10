import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgCallLogFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M756-55q-122 0-247-58T278-277Q171-384 113-509.5T55-756q0-29.286 19.357-49.643T124-826h139q31 0 50.5 16.5T341-762l25.929 109.641Q371-626 366-606t-21.229 34.226L240-477q22 36 47.5 68t56.5 62q33 35 66.5 61t68.5 44l100-101q18-18 38.651-24 20.651-6 45.349 0l98 23q31 9 47.5 29.044T825-265v141q0 29.286-20.357 49.143T756-55M535-819q-18.75 0-31.375-12.675Q491-844.351 491-862.175 491-880 503.625-893T535-906h327q17.75 0 30.875 13.175 13.125 13.176 13.125 31Q906-844 892.875-831.5T862-819zm0 149q-18.75 0-31.375-12.675Q491-695.351 491-714.175 491-732 503.625-744.5T535-757h327q17.75 0 30.875 12.675Q906-731.649 906-713.825 906-695 892.875-682.5T862-670zm0 148q-18.75 0-31.375-12.675Q491-547.351 491-566.175 491-584 503.625-596.5T535-609h327q17.75 0 30.875 12.675Q906-583.649 906-565.825 906-547 892.875-534.5T862-522z" />
  </Svg>
);