import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgScanDeleteFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M731-625 542-811v91q0 40 27.5 67.5T637-625zm-19 469-51 51q-14 13-33 13t-33-14q-15-14-15-33t15-34l50-50-51-51q-15-14-14.5-33t15.5-34q14-14 33-14t34 14l50 51 51-51q14-14 33-13.5t34 14.5q14 14 13.5 33T830-274l-51 51 51 51q13 14 13 33t-14 33q-14 14-33 14t-33-13zM229-55q-39 0-66.5-27.5T135-149v-662q0-39 27.5-67t66.5-28h323q19 0 37 8t31 21l177 177q13 13 21 31t8 37v211q-27-14-55.5-21.5T711-450q-94 0-160 66t-66 160q0 50 19.5 93T561-55z" />
  </Svg>
);
