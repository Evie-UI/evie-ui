import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgCloudSyncFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M236-476q0 60 25 107t81 84v-70q0-15 10-25t26-10q15 0 25 10t10 25v163q0 20-13.5 33.5T366-145H204q-15 0-25-10.5T169-181q0-15 10-25t26-10h70q-64-51-99-111.5T141-476q0-96 52.5-181T343-786q16-7 31 3t20 28q5 18-1.5 33.5T370-698q-58 29-96 89t-38 133m381 356q-59 0-101-41.5T474-263q0-54 35.5-94t87.5-47q21-37 58-59.5t82-22.5q62 0 106 36t51 86h2q44 6 74.5 39.5T1001-244q0 51-36.5 87.5T877-120zm103-400q-11-48-35-85t-63-70v70q0 15-10.5 25T586-570q-15 0-25.5-10.5T550-606v-162q0-20 13.5-33.5T598-815h161q15 0 25.5 10t10.5 25q0 15-10.5 25.5T759-744h-71q49 45 84.5 104.5T816-520z" />
  </Svg>
);