import { useTheme } from "@/hooks/use-theme";
import { View, Text, ViewProps } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
interface Props extends ViewProps {
  className?: string;
  margin?: boolean;
  safe?: boolean;
  bgColor?: string;
}

const ThemedView = ({
  style,
  className,
  margin,
  safe,
  bgColor,
  children,
}: Props) => {
  const backGroundColor = bgColor ?? useTheme().background;
  const safeArea = useSafeAreaInsets();
  return (
    //className="bg-light-background dark:bg-dark-background"
    <View
      style={[
        {
          backgroundColor: backGroundColor,
          flex: 1,
          paddingTop: safe ? safeArea.top : 0,
          marginHorizontal: margin ? 10 : 0,
        },
        style,
      ]}
      className={className}
    >
      {children}
    </View>
  );
};

export default ThemedView;
