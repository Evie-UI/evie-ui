import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgPhonelinkSetup = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M271-17q-38.775 0-66.388-27.612Q177-72.225 177-111v-738q0-38.775 27.612-66.387Q232.225-943 271-943h418q38.775 0 66.387 27.613Q783-887.775 783-849v135h-94v-45H271v558h418v-45h94v135q0 38.775-27.613 66.388Q727.775-17 689-17zm0-124v30h418v-30zm431-236.6q-12-2.12-22-8.529T662.667-401L643-391q-9 3-17.278 1.042Q617.444-391.917 612-400l-7-9q-5-8-2.833-16.526Q604.333-434.053 611-441l19-13.704Q625-466 625-482t5-27l-19-15q-6.667-5.25-9.333-13.625Q599-546 605-554l7-10q4.778-7.727 13.389-9.864Q634-576 642-573l20.647 10Q670-571.455 679-577.727 688-584 702-586l3-26q1.528-8.444 7.325-14.222Q718.123-632 727.889-632h15.555q8.566 0 14.303 5.778Q763.483-620.444 765-612l3 25.743q14 2.257 23 8.53 9 6.272 16 14.727l21-10q8-3 16.611-.864Q853.222-571.727 858-564l7 10q6 8 3.333 16.375Q865.667-529.25 859-524l-19 15q5 11 5 27t-5 27l19 14q6.667 6.947 8.833 15.474Q870-417 865-409l-7 9q-5.444 8.083-13.722 10.042Q836-388 828-391l-20.5-10q-7.5 8.462-17.5 14.871-10 6.409-22 8.529l-3 24.28q-1.694 10.098-7.54 15.709Q751.614-332 743.111-332h-15.555q-9.767 0-15.328-5.611T705-353.32zm33-38.4q28 0 47-19t19-47q0-28-19-47t-47-19q-28 0-47 19t-19 47q0 28 19 47t47 19M271-819h418v-30H271zm0 0v-30zm0 678v30z" />
  </Svg>
);