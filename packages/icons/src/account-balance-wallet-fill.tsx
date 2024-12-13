import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgAccountBalanceWalletFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M189-95q-38.05 0-66.025-27.475Q95-149.95 95-189v-582q0-38.463 27.975-66.731Q150.95-866 189-866h582q39.463 0 67.231 28.269Q866-809.463 866-771v54H540q-54 0-90.5 36.556T413-592v226q0 53 36.5 88.5T540-242h326v53q0 39-27.769 66.5Q810.463-95 771-95zm351-198q-33 0-54.5-20.573Q464-334.147 464-366.25V-592q0-32 21.5-53t54.5-21h291q33 0 54.5 21t21.5 53v225.75q0 32.103-21.5 52.677Q864-293 831-293zm112-123q25 0 44.5-19.5T716-481q0-25-19.5-44T652-544q-25 0-44.5 19T588-481q0 26 19.5 45.5T652-416" />
  </Svg>
);
