import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgDirectorySyncFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M222-214q-54-55-83.5-123.5T109-480q0-151 104-259t256-112v-45q0-15 12.5-21.5T506-915l127 97q19 15 19 38t-19 37l-127 98q-12 9-24.5 2.5T469-664v-44q-92 4-155 70t-63 158q0 50 23 97t60 83zm269 105v45q0 15-12.5 21.5T454-45l-127-98q-19-14-19-37t19-38l127-97q12-9 24.5-2.5T491-296v44q92-4 155-70t63-158q0-51-23-97.5T623-660l113-85q56 53 85.5 122T851-480q0 151-104 259T491-109" />
  </Svg>
);
