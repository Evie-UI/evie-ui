import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgLabelOff = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="m736-298-67-68 79-114-147-211H345l-95-95h340q34.037 0 55.519 13.5Q667-759 687-732l139 197q18 25.141 18 55.07Q844-450 826-425zM189-175q-38.05 0-66.025-27.975Q95-230.95 95-269v-402q0-20.069 4-33.034 4-12.966 9-19.606L49.365-782.8Q38-794.36 37.5-808.18 37-822 48.508-833q11.507-12 25.246-12Q87.493-845 99-833l719 718q11 11 11 24.622T818-65q-11 11-25.5 11T767-65L645.2-187q-4.2 6-20.7 9t-30.982 3zm373-94L189-643v374z" />
  </Svg>
);
