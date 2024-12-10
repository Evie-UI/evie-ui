import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgMoveItemFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M759-433H379q-19.75 0-33.375-13.675Q332-460.351 332-480.175 332-500 345.625-513.5 359.25-527 379-527h380l-58-58q-13-13.364-13.5-32.682T701.609-651Q716-664 735.5-664t32.5 14l138 136q14 14.364 14 34.182T906-446L768-309q-12.8 14-31.9 14-19.1 0-33.491-14.286-13.776-13.285-13.692-33.5Q689-363 702-376zM497-635v-136H189v582h308v-137q0-19.75 13.675-33.375Q524.351-373 544.175-373 564-373 577.5-359.375 591-345.75 591-326v137q0 39.8-27.625 66.9Q535.75-95 497-95H189q-39.8 0-66.9-27.1Q95-149.2 95-189v-582q0-40.213 27.1-67.606Q149.2-866 189-866h308q38.75 0 66.375 27.394Q591-811.213 591-771v136q0 20.75-13.675 34.375Q563.649-587 543.825-587 524-587 510.5-600.625 497-614.25 497-635" />
  </Svg>
);