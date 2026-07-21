import React from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Ionicons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();


import Home from '../pages/Home';
import Bank from '../pages/Bank';
import Cash from '../pages/Cash';



function HomeStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown:false }}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Bank" component={Bank} />
    </Stack.Navigator>
  )
}



export default function AppRoutes() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarActiveTintColor: '#44E8C3',
        tabBarInactiveTintColor: '#94A3B8',

        tabBarStyle: {
          backgroundColor: '#0F0E17',
          height: 60
        },

        tabBarIcon: ({ color, size, focused }) => {
          let icon;
          switch (route.name) {
            case "Home":
              icon = focused ? "home" : "home-outline";
              break;
            case "Cash":
              icon = focused ? "wallet" : "wallet-outline";
              break;
          }
          return (<Ionicons name={icon} size={size} color={color} />)
        }
      })}>

      <Tab.Screen name="Home" component={HomeStack} />
      <Tab.Screen name="Cash" component={Cash} />
    </Tab.Navigator>   
  )
}


























