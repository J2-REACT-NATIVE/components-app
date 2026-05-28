import React, { ReactNode } from "react";
import { PressableProps, Text } from "react-native";
//import { Pressable } from "react-native-gesture-handler";

//! si uso Pressable de react-native se usa interface
import { Pressable } from "react-native";
interface Props extends PressableProps {
  className?: string;
  children: string;
}

// type Props = React.ComponentProps<typeof Pressable> & {
//   className?: string;
//   children: string;
// };

const ThemedButton = ({ className, children, ...rest }: Props) => {
  return (
    <Pressable
      className={`bg-light-primary dark:bg-dark-primary items-center rounded-xl px-6 py-2 active:opacity-80 ${className}`}
      {...rest}
    >
      <Text className="text-white text-2xl">{children}</Text>
    </Pressable>
  );
};

export default ThemedButton;
