import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";

export const SvgBathOutdoorFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M189-509v95q-18 9-29 22t-11 28q0 11.333 6.5 22.167Q162-331 173-322l30 5 59.806 1h27.925q8.742 0 15.006 4Q312-308 314-300l1 4 43-18q1 0 18.473-2h161.15q6.76 0 11.569 2 4.808 2 7.808 7l26 35 124-19 44-62q3.625-4 8.125-6.5T770-362h42v-3q-1-16.31-12.5-29.655Q788-408 772-414v-95q64 32 95.5 66.5T899-365v7l36 55q3 5 3.5 11.077T938-282l-38 111q-2 8-8.5 12t-13.5 4H752l1 5q2 9-2 16t-11 10l-90 36q-2 0-17.413 2H336.233q-8.73 0-14.481-4Q316-94 314-101l-6-15-116 28q-5 1-11 .5t-9.845-4.412L30-195q-5-3-7.5-8T20-214v-87q0-7.333 3.454-12.778Q26.91-319.222 33-323l31-15q-1-6-1.5-12.263t-.5-14Q62-407 93-442q31-35 96-67m27-86q-22-32-35.5-68T167-737.159q0-7.841.5-16.341T169-770q2-18 14.5-31t29.043-13Q231-814 243.5-801t11.167 31.261Q254-762 253.5-755.37t-.5 14.75q0 32.62 15.5 61.12T302-625q22 30 35.5 64.939 13.5 34.938 13.5 72.324 0 4.93-.5 8.869-.5 3.938-.5 8.868-1 18-12.821 30.5-11.822 12.5-29 12.5Q289-427 276-439.5q-13-12.5-11.667-30.727.667-4.773.667-9.809v-10.08q0-30.259-15.5-54.969T216-595m175 0q-22-32-35.5-68T342-737.159q0-7.841.5-16.341T344-770q2-18 14.5-31t29.043-13Q406-814 418.5-801t11.167 31.261Q429-762 428.5-755.37t-.5 14.75q0 32.62 15.5 61.12T477-625q22 30 35.5 64.939 13.5 34.938 13.5 72.324 0 4.93-.5 8.869-.5 3.938-.5 8.868-1 18-12.821 30.5-11.822 12.5-29 12.5Q464-427 451-439.5q-13-12.5-11.667-30.727.667-4.773.667-9.809v-10.08q0-30.259-15.5-54.969T391-595m175 0q-22-32-35.5-68T517-737.159q0-7.841.5-16.341T519-770q2-18 14.5-31t29.043-13Q581-814 593.5-801t11.167 31.261Q604-762 603.5-755.37t-.5 14.75q0 32.62 15.5 61.12T652-625q22 30 35.5 64.939 13.5 34.938 13.5 72.324 0 4.93-.5 8.869-.5 3.938-.5 8.868-1 18-12.821 30.5-11.822 12.5-29 12.5Q639-427 626-439.5q-13-12.5-11.667-30.727.667-4.773.667-9.809v-10.08q0-30.259-15.5-54.969T566-595" />
  </Svg>
);