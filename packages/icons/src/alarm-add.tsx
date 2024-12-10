import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";

export const SvgAlarmAdd = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M443-405v85q0 15.3 9.975 25.65 9.976 10.35 26.2 10.35 16.225 0 26.025-9.925Q515-303.85 515-320v-85h84q15.3 0 25.65-10.177 10.35-10.177 10.35-26.7t-9.925-26.323Q615.15-478 599-478h-84v-84q0-15.3-9.975-25.65-9.976-10.35-26.2-10.35-16.225 0-26.025 9.925Q443-578.15 443-562v84h-84q-15.3 0-25.65 9.975-10.35 9.976-10.35 26.2 0 16.225 10.213 26.525Q343.425-405 360-405zm36 348q-79 0-149-30t-122.5-82Q155-221 125-291T95-440.733q0-79.733 30-149.5T207.5-712.5Q260-765 330-795.5T479-826q79 0 149 30.5t122.5 83q52.5 52.5 83 122.267t30.5 149.5Q864-361 833.5-291t-83.011 122.24q-52.511 52.241-122.5 82Q558-57 479-57M43.343-695Q32-706.267 33-720.133 34-734 45-746l133-129q11-10 25.5-9.5t24.5 10.843q12 11.344 11.5 25.329Q239-834.343 227-823L94-694q-11.343 11-25.828 10.5T43.343-695m871.314 0q-10.344 11-24.829 11.5Q875.343-683 864-694L731-823q-12-10.343-12.5-24.828t11.5-25.829Q740-884 754.5-884.5t26.148 10.148L914-745q11 10.511 11.5 24.756Q926-706 914.657-695M478.874-151Q600-151 684.5-235.374t84.5-205.5Q769-562 684.626-646.5t-205.5-84.5Q358-731 273.5-646.626t-84.5 205.5Q189-320 273.374-235.5t205.5 84.5" />
  </Svg>
);