import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgExercise = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="m839-578-62-61 33-33-138-138-33 33-62-62 30-30q26-27 63.379-27.021Q707.758-896.042 735-869l133 133q27 26.978 27 64.489T868-608zM354-92q-26.978 27-64.989 27T224-92L78-239q-21-21.356-21-50.678Q57-319 78-340l43-43 62 61-32 34 137 137 34-32 61 62zm382-337 63-64-306-306-64 63zM467-161l64-63-307-307-63 64zm10-240 82-82-76-76-82 82zm39 313q-20.923 21-49.462 21Q438-67 417-88L87-418q-21-20.923-20.5-48.962Q67-495 88-516l86-88q21.356-21 50.178-21Q253-625 274-604l65 66 83-82-66-67q-21-20.923-20.5-48.962.5-28.038 21.83-49.368l86.34-87.34Q465.378-894 493.7-894q28.322 0 49.3 21l330 329q20 21.356 20.5 50.178.5 28.822-20.83 50.152l-87.34 86.34Q764.066-336 735.527-336q-28.538 0-49.527-21l-66-65-82 83 65 65q21 21.356 21.5 50.178Q625-195 604-174z" />
  </Svg>
);