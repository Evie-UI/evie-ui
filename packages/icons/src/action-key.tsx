import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgActionKey = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M671-115q-70.95 0-121.475-50.502Q499-216.003 499-286.92q0-72.605 50.502-123.343Q600.003-461 670.92-461q72.605 0 123.843 50.681Q846-359.637 846-287q0 23.439-6.457 43.939Q833.087-222.561 823-205l86 90q7 7 10.5 14.952 3.5 7.951 3.5 17Q923-74 919.5-65.5 916-57 909-49q-8 7-16.118 10.5-8.119 3.5-16.778 3.5-8.66 0-17.882-3.5Q849-42 843-49l-89-88q-18 10.5-38.825 16.25Q694.349-115 671-115m-465.531 2q-71.582 0-122.025-50.502Q33-214.003 33-284.92q0-73.63 50.502-124.855Q134.003-461 204.92-461q73.63 0 124.855 51.031Q381-358.938 381-285.469q0 71.582-51.031 122.025Q278.938-113 205.469-113m-.23-94q34.743 0 58.752-22.985Q288-252.971 288-285.248q0-34.739-23.965-58.746-23.964-24.006-59-24.006-33.398 0-55.716 23.962Q127-320.076 127-285.044q0 32.569 22.567 55.307Q172.133-207 205.239-207m464.752 0q33.991 0 58-22.985Q752-252.971 752-285.248q0-34.739-24.009-58.746Q703.982-368 669.491-368q-32.853 0-55.672 23.962Q591-320.076 591-285.044q0 32.569 22.787 55.307Q636.575-207 669.991-207M205.469-577q-71.582 0-122.025-50.819Q33-678.638 33-750q0-72.55 50.502-124.275Q134.003-926 204.92-926q73.63 0 124.855 51.611 51.225 51.61 51.225 124 0 72.027-51.031 122.708T205.469-577m464.92 0q-72.027 0-122.708-50.819T497-750q0-72.55 50.819-124.275Q598.638-926 670-926q72.55 0 124.275 51.611 51.725 51.61 51.725 124 0 72.027-51.611 122.708-51.61 50.681-124 50.681m-465.15-94q34.743 0 58.752-22.738Q288-716.475 288-750q0-33.987-23.965-57.994-23.964-24.006-59-24.006-33.398 0-55.716 24.006Q127-783.987 127-750q0 33.525 22.567 56.262Q172.133-671 205.239-671m464.752 0q33.991 0 58-22.738Q752-716.475 752-750q0-33.987-24.009-57.994Q703.982-832 669.491-832q-32.853 0-55.672 24.006Q591-783.987 591-750q0 33.525 22.787 56.262Q636.575-671 669.991-671M671-751" />
  </Svg>
);