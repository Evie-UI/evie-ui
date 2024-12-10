import { useComponentDefaults } from "../../../theme";
import { View } from "../../view";

type Props = React.ComponentProps<typeof View>;

export const SectionRoot = (_props: Props) => {
  const props = useComponentDefaults(_props, {
    gap: "md",
  });

  return <View {...props}>{props.children}</View>;
};