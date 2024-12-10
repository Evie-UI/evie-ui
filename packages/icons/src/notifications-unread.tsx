import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgNotificationsUnread = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M480.5-46q-36.45 0-62.475-26.144Q392-98.287 392-135h177q0 37-26.231 63-26.232 26-62.269 26M182-175q-19.75 0-33.375-13.675Q135-202.351 135-222.175 135-242 148.625-255.5 162.25-269 182-269h24v-279q0-92.693 53-168.347Q312-792 403-812v-16q0-32.5 22.458-55.25Q447.917-906 480-906q23.917 0 42.458 12.5Q541-881 552-862v-9q-25 31-36 68.5t-7 77.5q-7.25-2-13.821-2.5T480-728q-75 0-127.5 53T300-548v279h360v-270q24 8 47.5 9t47.5-4v265h23q19.625 0 33.812 13.675Q826-241.649 826-221.825 826-202 811.812-188.5 797.625-175 778-175zm531.529-436q-53.112 0-89.821-37.179Q587-685.358 587-738.471q0-53.112 36.973-90.321Q660.946-866 713.765-866q52.818 0 90.027 37.368Q841-791.265 841-737.882q0 52.965-37.179 89.924Q766.642-611 713.529-611" />
  </Svg>
);