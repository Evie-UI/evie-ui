import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgSettingsInputSvideo = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M480-55q-89.035 0-166.518-33Q236-121 178.5-178.5T88-313.482Q55-390.965 55-480q0-88.728 33-166.364Q121-724 178.368-781.549q57.368-57.55 134.935-91Q390.87-906 480-906q88.728 0 166.268 33.282 77.54 33.283 135.353 91.097 57.814 57.813 91.097 135.353Q906-568.728 906-480q0 89.13-33.451 166.697-33.45 77.567-91 134.935Q724-121 646.364-88 568.728-55 480-55M294.118-452Q315-452 329.5-466.118q14.5-14.117 14.5-36Q344-523 329.382-537.5q-14.617-14.5-35.5-14.5Q273-552 258.5-537.382q-14.5 14.617-14.5 35.5Q244-480 258.618-466q14.617 14 35.5 14m372 0Q687-452 701.5-466.118q14.5-14.117 14.5-36Q716-523 701.382-537.5q-14.617-14.5-35.5-14.5Q645-552 630.5-537.382q-14.5 14.617-14.5 35.5Q616-480 630.618-466q14.617 14 35.5 14m-307 194Q380-258 394.5-272.618q14.5-14.617 14.5-35.5Q409-329 394.382-343.5q-14.617-14.5-35.5-14.5Q338-358 323.5-343.382q-14.5 14.617-14.5 35.5Q309-287 323.618-272.5q14.617 14.5 35.5 14.5m241 0Q621-258 635.5-272.618q14.5-14.617 14.5-35.5Q650-329 635.382-343.5q-14.617-14.5-35.5-14.5Q579-358 564.5-343.382q-14.5 14.617-14.5 35.5Q550-287 564.618-272.5q14.617 14.5 35.5 14.5M416-616h127q20 0 35-15t15-35q0-20-15-38t-35-18H416q-20 0-35 18t-15 38q0 20 15 35t35 15m63.491 467Q616-149 713.5-245.991t97.5-233.5Q811-616 713.632-713.5 616.265-811 480.009-811 343-811 246-713.632q-97 97.367-97 233.623Q149-343 245.991-246t233.5 97" />
  </Svg>
);