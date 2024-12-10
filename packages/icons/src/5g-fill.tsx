import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";

export const Svg5GFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M323-280H150q-18.125 0-29.562-12.175-11.438-12.176-11.438-30Q109-340 121.125-351.5T151-363h172v-81H151q-17.75 0-29.875-12.125T109-486v-153q0-18.125 11.438-29.562Q131.875-680 150-680h215q18.125 0 29.562 11.488Q406-657.024 406-638.825 406-621 394.562-609 383.125-597 365-597H191v81h143q29.35 0 50.675 21.325Q406-473.35 406-444v81q0 33.538-24.731 58.269T323-280m244 0q-33.537 0-58.269-24.731Q484-329.462 484-363v-234q0-33.537 24.731-58.269Q533.463-680 567-680h243q18.125 0 29.562 11.488Q851-657.024 851-638.825 851-621 839.562-609 828.125-597 810-597H567v234h203v-79h-56q-15.15 0-25.575-9.975Q678-461.951 678-478.175q0-15.225 9.925-25.525Q697.85-514 714-514h96q18.125 0 29.562 11.938Q851-490.125 851-472v109q0 33.538-23.5 58.269T770-280z" />
  </Svg>
);