import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";

export const SvgCurrencyYuan = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M433-142v-233H270q-19.75 0-33.375-13.675Q223-402.351 223-422.175 223-442 236.625-455.5 250.25-469 270-469h146L210-793q-16-24-2.191-48.5Q221.617-866 251-866q12.088 0 22.706 6.684T291-843l189 300 190-301q5.707-9.632 16.379-15.816Q697.052-866 710.207-866 738-866 751.5-841.5T750-793L545-469h145q19.75 0 33.375 13.675Q737-441.649 737-421.825 737-402 723.375-388.5 709.75-375 690-375H527v233q0 19.75-13.675 33.375Q499.649-95 479.825-95 460-95 446.5-108.625 433-122.25 433-142" />
  </Svg>
);