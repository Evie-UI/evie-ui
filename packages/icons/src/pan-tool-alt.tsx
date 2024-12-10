import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgPanToolAlt = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M398.476-96q-26.989 0-51.233-11.5Q323-119 306-140L50-443q-12-13-8.5-31T57-507q27-30 67-30.5t75 23.5l71 48v-410q0-16.05 11.868-27.525Q293.737-915 310.368-915 327-915 338.5-903.525T350-876v471q0 28.66-25.5 41.83Q299-350 276-366l-137-94 233 271q5.032 6.067 13.242 10.033 8.21 3.967 15.634 3.967H706q33.875 0 56.938-23.062Q786-221.125 786-255v-290q0-16.475 11.868-28.237Q809.737-585 826.368-585 843-585 854.5-573.237 866-561.475 866-545v290q0 67.35-46.5 113.175T706-96zm83.506-680q16.632 0 28.325 11.82Q522-752.361 522-736.007v281.403q0 16.354-11.868 27.479Q498.263-416 481.632-416 465-416 454-427.125t-11-27.479v-281.403q0-16.354 11.175-28.173Q465.351-776 481.982-776m173.193 85q16.125 0 27.475 11.475Q694-668.05 694-652v196.576q0 17.174-11.667 28.299-11.666 11.125-28 11.125Q638-416 626.5-427.125T615-455.424V-652q0-16.05 11.813-27.525Q638.626-691 655.175-691" />
  </Svg>
);