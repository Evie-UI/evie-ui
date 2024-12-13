import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgPhonelinkErase = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="m692-439-91 91q-9 9-21 9t-21-9q-9-9-9-21t9-21l91-91-91-91q-9-9-9-21t9-21q9-9 21-9t21 9l91 91 91-91q9-9 21-9t21 9q9 9 9 21t-9 21l-91 91 91 91q9 9 9 21t-9 21q-9 9-21 9t-21-9zM231-17q-38.775 0-66.388-27.612Q137-72.225 137-111v-738q0-38.775 27.612-66.387Q192.225-943 231-943h418q38.775 0 66.387 27.613Q743-887.775 743-849v135h-94v-45H231v558h418v-45h94v135q0 38.775-27.613 66.388Q687.775-17 649-17zm0-124v30h418v-30zm0-678h418v-30H231zm0 0v-30zm0 678v30z" />
  </Svg>
);
