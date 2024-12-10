import { useContext } from "react";
import Animated, { useAnimatedStyle } from "react-native-reanimated";
import { View } from "../../view";
import { AccordionContext } from "../_context";

type Props = React.ComponentProps<typeof View>;
const AnimatedView = Animated.createAnimatedComponent(View);

export const AccordionContentFragment = (props: Props) => {
  const { contentHeight, progress } = useContext(AccordionContext);

  const animatedHeight = useAnimatedStyle(() => ({ height: progress.value * contentHeight.value }));

  return (
    <AnimatedView {...props} overflow="hidden" style={animatedHeight}>
      <View
        top={0}
        left={0}
        right={0}
        position="absolute"
        onLayout={(event) => {
          contentHeight.value = event.nativeEvent.layout.height;
        }}
      >
        {props.children}
      </View>
    </AnimatedView>
  );
};