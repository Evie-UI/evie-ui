import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgScubaDiving = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="m194-227 46-192q5-23 20.5-41t40.5-26l378-116 80-165q1-3 9-13l93-91q11-10 26-9.5t28 11.5q11 11 10.5 25.5T916-818l-83 91-66 175q-2 7-7 12t-11 9L561-399l-234 74-58 135q-1 2-2 5t-3 5L171-57q-10 13-27 15.5T113-49q-13-10-15.5-27.5T105-107zM94-356q-34 0-59.5-24.5T9-440q0-35 25.5-59.5T94-524q35 0 60 24.5t25 59.5q0 35-25 59.5T94-356m231-191q-24 8-46-5t-29-38q-7-24 5-46t37-29l146-48q19-6 37.5 4t23.5 29l6 29q4 19-4 34.5T474-595z" />
  </Svg>
);
