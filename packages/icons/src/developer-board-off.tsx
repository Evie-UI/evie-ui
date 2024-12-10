import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";

export const SvgDeveloperBoardOff = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M821-82 48-854q-10-10.2-10.5-25.1Q37-894 48.158-905q10.737-11 25.5-11T99-905l773 773q10 11.182 10.5 25.091T871.842-82q-10.737 11-25.5 11T821-82M238-866h487q38.463 0 66.731 28.269Q820-809.463 820-771v51.146h35.614q15.136 0 25.261 10.058Q891-699.737 891-684.869 891-670 880.794-659.5T855.5-649H820v118h35.088q14.912 0 25.412 9.975 10.5 9.976 10.5 26.2 0 16.225-10.35 26.025Q870.3-459 855-459h-35v118h35.57q15.118 0 25.274 10.088 10.156 10.087 10.156 25Q891-291 880.938-280.5 870.875-270 856-270h-23L725-378v-393H332zm289 290-50-50v-62q0-13.6 9.2-22.8 9.2-9.2 22.8-9.2h118q19.75 0 33.375 13.625T674-673v54q0 17.75-12.625 30.375T631-576zm147 147L557-546h85q13.6 0 22.8 9.2 9.2 9.2 9.2 22.8zM194-287v-106q0-19.75 13.625-33.375T241-440h159q19.75 0 33.375 13.625T447-393v106q0 19.75-13.625 33.375T400-240H241q-19.75 0-33.375-13.625T194-287m-53-576 91 92h-78v582h571v-89l86 86q-3 39-26.136 68Q761.727-95 725-95H154q-39.463 0-67.231-27.475Q59-149.95 59-189v-582q0-33.575 23.313-58.904Q105.624-855.233 141-863m336 337 197 197v42q0 19.75-13.625 33.375T627-240H524q-19.75 0-33.375-13.625T477-287zM283-720l164 164.106V-517q0 19.75-13.625 33.375T400-470H241q-19.75 0-33.375-13.625T194-517v-156q0-19.75 13.625-33.375T240.611-720z" />
  </Svg>
);