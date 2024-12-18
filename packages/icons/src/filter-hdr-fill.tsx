import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgFilterHdrFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="m74-305 169-225q6.5-9 16.375-13.5T280-548q10.75 0 20.625 4.5T318-530l146 195q3.526 6 10.061 9t14.079 3Q507-323 515-339t-3-31L397-523l126-167q6.5-9 16.375-13.5T560-708q10.75 0 20.625 4.5T598-690l288 385q18 25 4.808 50.5Q877.617-229 849-229H111q-28.617 0-41.808-25.5Q56-280 74-305" />
  </Svg>
);
