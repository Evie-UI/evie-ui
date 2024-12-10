import { useComponentDefaults } from "../../../theme";
import { Text } from "../../text";

type Props = React.ComponentProps<typeof Text>;

export const SectionSubtitle = (_props: Props) => {
  const props = useComponentDefaults(_props, {
    color: "onSurfaceVariant",
    fontSize: "caption",
  });

  return <Text {...props}>{props.children}</Text>;
};