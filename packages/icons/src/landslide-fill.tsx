import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgLandslideFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M34-129v-108l183 59 463-153 110 145q35 47 9 99.5T714-34H129q-40 0-67.5-27.5T34-129m183-135L34-327v-87l183 58 290-92 116 48zm572-140 112-50q19-8 30.5-25.5T943-518v-74q0-25-15-44.5T888-662l-106-23q-15-3-31-.5T722-672l-55 44q-14 11-20.5 25.5T640-571v62q0 17 6.5 31.5T667-453l49 40q15 13 35 15.5t38-6.5m-572-38L34-504v-47q0-37 26-63t64-26h138q22 0 42 10t33 28l72 97zm303-200 128-51q20-8 31.5-25.5T691-758v-103q0-24-15.5-44T635-930l-121-25q-14-2-28 0t-26 10l-69 47q-15 10-23 25.5t-8 32.5v91q0 18 8 33t23 25l63 42q15 10 32 12.5t34-5.5" />
  </Svg>
);