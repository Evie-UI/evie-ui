import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";

export const SvgSettingsRemoteFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M350-17q-23.15 0-39.075-15.925Q295-48.85 295-72v-484q0-23.15 15.925-39.075Q326.85-611 350-611h260q23.15 0 39.575 15.925Q666-579.15 666-556v484q0 23.15-16.425 39.075Q633.15-17 610-17zm129.746-358q17.747 0 30-11.754Q522-398.507 522-417.254 522-435 509.82-448T480-461q-18.48 0-31.24 12.76Q436-435.48 436-417q0 17.64 13 29.82T479.746-375m.047-365q-36.207 0-70 11.5T347-695q-10.208 8-22.604 7.5Q312-688 303-697q-9-9.273-8.5-21.636Q295-731 305-739q38-30 82.691-45.5t92.5-15.5Q528-800 572.5-784.5T655-739q10.214 7.857 10.607 20.429Q666-706 657-697q-9 9-21.5 9.5T613-695q-29-22-63-33.5T479.793-740M480-900q-67.989 0-130.494 23Q287-854 235-811q-10.792 8.25-23.896 8.625Q198-802 189-811t-8.5-21.5Q181-845 191-853q61-51 134.765-79Q399.529-960 480-960q79.757 0 153.378 27.5Q707-905 767-852q10.214 8.311 10.607 21.156Q778-818 769-809q-9 9-22 8t-24-10q-51-44-113.5-66.5T480-900" />
  </Svg>
);