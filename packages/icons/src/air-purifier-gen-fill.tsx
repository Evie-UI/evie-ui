import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgAirPurifierGenFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M38-43v-737q0-57 40-97t97-40h211q57 0 96.5 40t39.5 97v90H368q-40 0-67.5 27.475T273-596v264q0 39.462 27.5 67.231Q328-237 368-237h154v194zm686.084-157Q697-200 667.5-208.5 638-217 608-230l29.809-90Q665-308 687-301.5q22 6.5 37 6.5 13 0 27-4.5t27-13.5q26.467-17.897 55.233-24.948Q862-345 884.667-345q25.333 0 55.406 8.625Q970.147-327.75 1000-316l-30 88q-30.524-11.1-52.262-17.05Q896-251 884.518-251 870-251 853.5-245.5T822-229q-19 13-44.842 21t-53.074 8M522-332H368v-264h154zm201.304-75Q696-407 667-415.5q-29-8.5-59-21.5l30-89q25.421 11.143 47.382 17.571Q707.342-502 724-501q13.245 0 26.99-4.5T778-519q27-18 53.5-25.5T883-552q26.077 0 56.538 8.5Q970-535 1000-523l-31 89q-26-11-46.896-17.5T884-458q-14 0-29 5.5T823-435q-25 16-49.598 22t-50.098 6M724-614q-26 0-56-9t-60-21l30-90q31 12 51.42 18.5T724-709q13 0 26-4t28-14q28-17 54.5-24t51.564-7q24.936 0 54.436 7.5T1001-731l-31 89q-30-10-51.42-16T884-664q-14 0-29.193 5-15.193 5-32.807 17-20 14-46.507 21-26.508 7-51.493 7" />
  </Svg>
);