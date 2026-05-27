import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { useColorScheme } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";

import "./global.css";
import { Slot, Stack } from "expo-router";
import { useTheme } from "@/hooks/use-theme";

import { allRoutes } from "@/constants/Routes";

export default function TabLayout() {
  const colorScheme = useColorScheme();
  //Color del background segun el tema del dispositivo
  const theme = useTheme();
  return (
    <GestureHandlerRootView
      style={{ backgroundColor: theme.background, flex: 1 }}
    >
      <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
        {/* <ThemedView className="mx-5">
        <ThemedText  type="h1">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis minima atque veniam ducimus, veritatis amet delectus officia ipsa dolorem eveniet et quibusdam? Distinctio nulla assumenda dolorum commodi fuga odit molestiae.</ThemedText>
                <Slot />
      </ThemedView> */}

        <Stack
          screenOptions={{
            headerShown: true,
            headerShadowVisible: false,
            contentStyle: {
              backgroundColor: theme.background,
            },
            headerStyle: {
              backgroundColor: theme.background,
            },
          }}
        >
          <Stack.Screen name="index" options={{ title: "titulo index" }} />
          {allRoutes.map((route, ix) => (
            <Stack.Screen
              key={ix}
              name={route.name}
              options={{ title: route.title }}
            />
          ))}
        </Stack>
      </ThemeProvider>
    </GestureHandlerRootView>
  );
}
