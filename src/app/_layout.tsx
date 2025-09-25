import "@/styles/global.css";
import { Tabs } from "expo-router";
import { Home, User, Zap } from "lucide-react-native";

import { Fragment } from "react";
import { StatusBar } from "react-native";

import twColors from 'tailwindcss/colors';

export default function RootLayout() {


  return (
    <Fragment>
      <StatusBar />
      <Tabs screenOptions={{ tabBarActiveTintColor: twColors.sky[500]}}>
        <Tabs.Screen 
          name="(tabs)/strike"
          options={{
            title:'SEQUENCIAS',
            tabBarShowLabel: false,
            tabBarIcon: ({size,color}) => (
              <Zap size={size} color={color}/>
            )
          }}
        />
        <Tabs.Screen 
          name="(tabs)/(home)"
          options={{
            title:'HOME',
            tabBarShowLabel: false,
            headerShown:false,
            tabBarIcon: ({size,color}) => (
              <Home size={size} color={color}/>
            )
          }}
        />
        <Tabs.Screen 
          name="(tabs)/profile"
          options={{
            title:"PERFIL",
            tabBarShowLabel: false,
            tabBarIcon: ({size,color}) => (
              <User size={size} color={color}/>
            )
          }}
        />
      </Tabs>
    </Fragment>      
  )
}
