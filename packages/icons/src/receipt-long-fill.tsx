import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgReceiptLongFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M226-34q-58.917 0-99.458-40.542Q86-115.083 86-174v-102q0-19.625 13.625-33.812Q113.25-324 134-324h91v-546q0-8.25 7-11.125T245-878l29 29q6.818 7 16.909 6.5T308-850l31-30q6.818-7 16.909-7T373-880l29 30q6.818 7 16.909 7T436-850l32-30q5.636-7 16.091-7 10.454 0 17.909 7l30 30q6.818 7 16.909 7T566-850l31-30q5.636-7 16.091-7 10.454 0 17.909 7l30 30q6.818 7 16.909 7T695-850l31-30q5.636-7 16.091-7 10.454 0 17.909 7l30 30q6.818 7 16.909 7.5T824-849l29-29q6-6 13.5-3.125T874-870v696q0 58.917-40.833 99.458Q792.333-34 734-34zm506.5-95q19.5 0 31.5-12.5t12-32.5v-601H322v501h324q19.75 0 33.375 14.188Q693-245.625 693-226v52q0 20 10 32.5t29.5 12.5M405-675h161q12.75 0 21.375 8.675 8.625 8.676 8.625 21.5 0 12.825-8.625 21.325T566-615H405q-12.75 0-21.375-8.675-8.625-8.676-8.625-21.5 0-12.825 8.625-21.325T405-675m0 134h161q12.75 0 21.375 8.675 8.625 8.676 8.625 21.5 0 12.825-8.625 21.325T566-481H405q-12.75 0-21.375-8.675-8.625-8.676-8.625-21.5 0-12.825 8.625-21.325T405-541m284-74q-12 0-21-9t-9-21q0-12 9-21t21-9q12 0 21 9t9 21q0 12-9 21t-21 9m0 129q-12 0-21-9t-9-21q0-12 9-21t21-9q12 0 21 9t9 21q0 12-9 21t-21 9" />
  </Svg>
);