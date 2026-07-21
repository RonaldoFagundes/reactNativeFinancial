import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";

import HomeRoutes from "./home.routes";
import Cash from "../pages/Cash";

const Tab = createBottomTabNavigator();

export default function AppRoutes() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={({ route }) => ({
        headerShown: false,

        tabBarActiveTintColor: "#44E8C3",
        tabBarInactiveTintColor: "#94A3B8",

        tabBarStyle: {
          backgroundColor: "#0F0E17",
          height: 60,
          borderTopWidth: 0,
          elevation: 0,
        },

        tabBarIcon: ({ color, size, focused }) => {
          let iconName;

          switch (route.name) {
            case "Home":
              iconName = focused ? "business" : "business-outline"; 
              break;

            case "Cash":
              iconName = focused ? "cash" : "cash-outline";
              break;

            default:
              iconName = "ellipse";
          }

          return (
            <Ionicons
              name={iconName}
              size={size}
              color={color}
            />
          );
        },
      })}
    >
      <Tab.Screen
        name="Home"
        component={HomeRoutes}
        options={{
        tabBarLabel: "Bancs",
        }}
      />

      <Tab.Screen
        name="Cash"
        component={Cash}
      />
    </Tab.Navigator>
  );
}
































