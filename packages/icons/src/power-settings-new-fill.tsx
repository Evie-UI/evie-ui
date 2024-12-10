import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgPowerSettingsNewFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M433-485v-337q0-20 13.5-34t33.5-14q20 0 33.5 14t13.5 34v337q0 20-13.5 33.5T480-438q-20 0-33.5-13.5T433-485m47 392q-80 0-150-30t-122.5-82.5Q155-258 125-328T95-478q0-71 24-134.5T191-728q14-17 35.5-18.5T264-733q14 14 13 33.5T264-665q-38 39-56.5 86.5T189-478q0 121 85 206t206 85q121 0 206-85t85-206q0-54-19-101t-54-86q-13-16-14.5-37t12.5-34q16-16 38-14t37 19q46 53 70.5 117.5T866-478q0 80-30.5 150t-83 122.5Q700-153 630-123T480-93" />
  </Svg>
);