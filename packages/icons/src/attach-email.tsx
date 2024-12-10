import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgAttachEmail = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M114-215q-39.987 0-68.494-27Q17-269 17-309v-502q0-40.213 27.625-67.606Q72.25-906 111-906h662q40.213 0 67.606 27.394Q868-851.213 868-811v240h-95v-157L468-528q-5.812 4-11.719 5.5Q450.375-521 442-521q-7 0-13.094-1.5Q422.812-524 417-528L111-728v419h478v94zm328-383 331-213H111zM111-728v10-58.623.754V-811v35.131-.879V-718zv419zM798-47q-63 0-106-44.95T649-200v-224q0-38.04 26.758-65.02Q702.515-516 741.268-516q37.912 0 63.822 26.98Q831-462.04 831-424v193.892q0 15.833-10.088 25.971-10.087 10.137-25 10.137Q781-194 770.5-204.35 760-214.7 760-230v-197q0-11.2-4.5-19.6Q751-455 741-455t-15.5 8.4q-5.5 8.4-5.5 19.6v229q0 36.175 21.376 62.587Q762.752-109 797.876-109 831-109 851-134.5t20-59.5v-167q0-15.3 10.4-25.65Q891.801-397 907.175-397q16.225 0 26.025 10.35Q943-376.3 943-361v167q0 60.625-42 103.813Q859-47 798-47" />
  </Svg>
);