import { useTheme } from "@/hooks/theme";
import "@/styles/global.css";
import { Tabs } from "expo-router";
import { Home, User, Zap } from "lucide-react-native";

import { Fragment } from "react";
import { StatusBar, View } from "react-native";


export default function Tab() {
  const {twTheme, themeVars} = useTheme()
  return (
    <Fragment>
      <StatusBar />
      <View style={twTheme} className="w-full h-full bg-background">
        <Tabs 
          screenOptions={{
            tabBarStyle: {
              backgroundColor: themeVars.card,
              borderColor: themeVars.card,
              paddingTop: 12,
              paddingBottom: 52
            },
            // tabBarBackground: () => <View className="bg-red-500 "></View>,
            tabBarActiveTintColor: themeVars.primary,
            animation:'none',
            headerStyle:{
              backgroundColor: themeVars.card,
            },
            headerTintColor: themeVars.primary
          }}
        >
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
      </View>
    </Fragment>      
  )
}
