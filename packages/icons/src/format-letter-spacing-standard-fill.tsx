import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgFormatLetterSpacingStandardFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M181.825-135Q162-135 148.5-148.625 135-162.25 135-182v-596q0-19.75 13.675-33.875Q162.351-826 182.175-826 202-826 215.5-811.875 229-797.75 229-778v596q0 19.75-13.675 33.375Q201.649-135 181.825-135m596 0Q758-135 744.5-148.625 731-162.25 731-182v-596q0-19.75 13.675-33.875Q758.351-826 778.175-826 798-826 812-811.875 826-797.75 826-778v596q0 19.75-14.175 33.375-14.176 13.625-34 13.625M339-276q-15.027 0-23.514-13Q307-302 312-317l125-344q3-10 11.5-16t18.604-6h23.792q10.104 0 18.604 6t12.5 16l127 344q4 15-3.5 28t-24.864 13q-10 0-18.318-5Q594-286 591-296l-29-85H399l-30 85q-3.172 8.667-11.466 14.333Q349.241-276 339-276m78-161h126l-63-175h-1z" />
  </Svg>
);