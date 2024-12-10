import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgFlightClass = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M549-454q-36.3 0-62.15-24.969T461-539v-201q0-35.475 25.85-60.737Q512.7-826 549-826h103q35.775 0 61.888 25.263Q740-775.475 740-740v201q0 35.062-26.112 60.031Q687.775-454 652-454zm6-94h90v-183h-90zM367-249q-28.87 0-52.435-16.5T283-310L179.059-638.807Q176-647 175.5-653.5T175-668v-110q0-19.625 13.675-33.812Q202.351-826 222.175-826 242-826 255.5-811.812 269-797.625 269-778v101l101.5 333H692q19.625 0 33.812 14.263 14.188 14.263 14.188 34Q740-276 725.812-262.5 711.625-249 692-249zM345-95q-19.75 0-33.375-13.675Q298-122.351 298-142.175 298-162 311.625-175.5 325.25-189 345-189h347q19.625 0 33.812 13.675Q740-161.649 740-141.825 740-122 725.812-108.5 711.625-95 692-95zm210-636h90z" />
  </Svg>
);