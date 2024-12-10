import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgTextSelectJumpToEnd = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M141.439-771Q122-771 108.5-785.061 95-799.123 95-818.561 95-838 108.86-852q13.859-14 33-14Q161-866 175-851.762t14 33.937q0 19.275-14.061 33.05Q160.877-771 141.439-771m169.386 0q-19.275 0-33.05-14.061Q264-799.123 264-818.561 264-838 278.061-852q14.062-14 33.5-14Q331-866 345-851.762t14 33.937q0 19.275-14.238 33.05Q330.524-771 310.825-771m169 0Q460-771 446.5-785.061q-13.5-14.062-13.5-33.5Q433-838 446.675-852q13.676-14 33.5-14Q500-866 513.5-851.762q13.5 14.238 13.5 33.937 0 19.275-13.675 33.05Q499.649-771 479.825-771m169.614 0Q630-771 616-785.061q-14-14.062-14-33.5Q602-838 616.238-852t33.937-14q19.275 0 33.05 14.238Q697-837.524 697-817.825q0 19.275-14.061 33.05Q668.877-771 649.439-771m-508 676Q122-95 108.5-108.86q-13.5-13.859-13.5-33Q95-161 108.86-175q13.859-14 33-14Q161-189 175-174.939q14 14.062 14 33.5Q189-122 174.939-108.5 160.877-95 141.439-95m169.386 0q-19.275 0-33.05-13.86Q264-122.719 264-141.86 264-161 278.061-175q14.062-14 33.5-14Q331-189 345-174.939q14 14.062 14 33.5Q359-122 344.762-108.5T310.825-95m169 0Q460-95 446.5-108.86q-13.5-13.859-13.5-33Q433-161 446.675-175q13.676-14 33.5-14Q500-189 513.5-174.939q13.5 14.062 13.5 33.5Q527-122 513.325-108.5 499.649-95 479.825-95m169.614 0Q630-95 616-108.86q-14-13.859-14-33Q602-161 616.238-175t33.937-14q19.275 0 33.05 14.061Q697-160.877 697-141.439 697-122 682.939-108.5 668.877-95 649.439-95M771-142v-676q0-19.625 13.675-33.812Q798.351-866 818.088-866q19.737 0 33.824 14.188Q866-837.625 866-818v676q0 19.75-14.263 33.375t-34 13.625Q798-95 784.5-108.625 771-122.25 771-142M141-433q-19.75 0-32.875-13.675Q95-460.351 95-480.088q0-19.737 13.625-33.324Q122.25-527 142-527h249l-25-26q-13-13-13-31t14.913-32.391Q382-631 401-631q19 0 33 15l97 102q14 14.364 14 34.182T531-446l-97 103q-14 15-33 15t-33.087-15.087Q353-358 353-375.5q0-17.5 13-31.5l25-26z" />
  </Svg>
);