import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";

export const SvgAddAlert = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M182-175q-19.75 0-33.375-13.675Q135-202.351 135-222.175 135-242 148.625-255.5 162.25-269 182-269h24v-279q0-92.693 53-168.347Q312-792 403-812v-16q0-32.5 22.458-55.25Q447.917-906 480-906t54.542 22.75Q557-860.5 557-828v16q91 19 144.5 95T755-548v279h23q19.625 0 33.812 13.675Q826-241.649 826-221.825 826-202 811.812-188.5 797.625-175 778-175zM480.5-46q-36.45 0-62.475-26.144Q392-98.287 392-135h177q0 37-26.231 63-26.232 26-62.269 26M300-269h360v-279q0-74-52.5-127T480-728q-75 0-127.5 53T300-548zm146-175v47q0 14.325 9.675 24.663Q465.351-362 480.175-362 495-362 505-372.337q10-10.338 10-24.663v-47h47q13.9 0 23.95-10.1Q596-464.201 596-478.175q0-14.4-10.05-24.613Q575.9-513 562-513h-47v-47q0-14.325-10.388-24.662Q494.224-595 479.825-595 465-595 455.5-584.662 446-574.325 446-560v47h-48q-13.9 0-23.95 10.272-10.05 10.272-10.05 24.5T374.05-454q10.05 10 23.95 10z" />
  </Svg>
);