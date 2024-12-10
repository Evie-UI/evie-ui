import { useComponentDefaults } from "../../../theme";
import { Text } from "../../text";

type Props = React.ComponentProps<typeof Text>;

export const CardText = (_props: Props) => {
  const props = useComponentDefaults(_props, { fontSize: 15 });

  return <Text {...props} />;
};