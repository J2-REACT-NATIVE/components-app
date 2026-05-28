import { View, Text } from "react-native";
import React from "react";

import ThemedView from "@/presentation/shared/ThemedView";
import { animationMenuRoutes, uiMenuRoutes,menuRoutes } from "@/constants/Routes";
import MenuItem from "@/presentation/shared/MenuItem";

const Index = () => {
  return (
    <ThemedView margin>
      {animationMenuRoutes.map((route, ix) => (
        // <Link key={ix} href={route.name.split("/")[0] as Href} >{route.title}</Link>
        <MenuItem
          key={ix}
          title={route.title}
          icon={route.icon}
          name={route.name}
          isFirst={ix === 0}
          isLast={ix === animationMenuRoutes.length - 1}
        />
      ))}
      <View className="my-3" />
      {uiMenuRoutes.map((route, ix) => (
        // <Link key={ix} href={route.name.split("/")[0] as Href} >{route.title}</Link>
        <MenuItem
          key={ix}
          title={route.title}
          icon={route.icon}
          name={route.name}
          isFirst={ix === 0}
          isLast={ix === uiMenuRoutes.length - 1}
        />
      ))}
      <View className="my-3" />
      {menuRoutes.map((route, ix) => (
        // <Link key={ix} href={route.name.split("/")[0] as Href} >{route.title}</Link>
        <MenuItem
          key={ix}
          title={route.title}
          icon={route.icon}
          name={route.name}
          isFirst={ix === 0}
          isLast={ix === menuRoutes.length - 1}
        />
      ))}
    </ThemedView>
  );
};

export default Index;
