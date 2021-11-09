import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import Services from "./screens/Services";
import Cart from "./screens/Cart";
import { colors } from "./global";

const Tab = createBottomTabNavigator();

export default function Routes() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          tabBarIconStyle: {
            display: "none",
          },
          tabBarInactiveBackgroundColor: colors.orange,
          tabBarInactiveTintColor: colors.light,
          tabBarActiveBackgroundColor: colors.purple,
          tabBarActiveTintColor: colors.purple,
          tabBarStyle: {
            height: 70,
          },
          tabBarLabelStyle: {
            width: "100%",
            flex: 1,
            fontWeight: "bold",
            fontSize: 16,
            lineHeight: 21,
            marginTop: 3,
            paddingTop: 21,

            backgroundColor: colors.orange,
          },
          tabBarHideOnKeyboard: true,
        }}
      >
        <Tab.Screen name="Serviços" component={Services} />
        <Tab.Screen name="Carrinho" component={Cart} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
