import { View, Text, Platform, Pressable } from "react-native";
import React from "react";
import { useThemeColor } from "@/hooks/use-theme-color";
import ThemedText from "./ThemedText";
import { Switch } from "react-native-gesture-handler";
interface Props {
  text?: string;
  value: boolean;
  className?: string;

  onValueChange: (value: boolean) => void;
}
const isAndroid = Platform.OS === "android";
const ThemedSwitch = ({ text, value, className, onValueChange }: Props) => {
  const switchActiveColor = useThemeColor({}, "primary");
  console.log({ text,switch: value });
  return (
    <Pressable
      className={`flex flex-row mx-2 items-center justify-between active:opacity-80 ${className}`}
      //!value es el value de la prop, Pressable internamente no tiene valor value
      onPress={() => onValueChange(!value)}
    >
      {text ? <ThemedText type="h2">{text}</ThemedText> : <View />}
      <Switch
        value={value}
        //!internamente el componente Switch estable el valor de va con el valor contrario de value
        onValueChange={(va) => {
          console.log({ value, va,text });

          onValueChange(va);
        }}
        thumbColor={isAndroid ? switchActiveColor : ""}
        // ios_backgroundColor={value ? 'green' : 'red'}
        trackColor={{
          false: "grey",
          true: switchActiveColor,
        }}
      />
    </Pressable>
  );
};

export default ThemedSwitch;
