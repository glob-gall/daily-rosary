import { useTheme } from '@/hooks/theme'
import { Stack } from 'expo-router'

import { View } from 'react-native'

export default function Layout() {
  const { themeVars } = useTheme()

  return (
    <View className='h-full'>

      <Stack>
        <Stack.Screen 
          name='index'

          options={{
            title:'Dashboard',
            headerStyle:{
              backgroundColor: themeVars.card,
              
            },
            headerTintColor: themeVars.primary,
          }}
          
        />
        <Stack.Screen 
          name='rosary/dolorosos'
          options={{
            title:'Mistérios Dolorosos',
            headerStyle:{
              backgroundColor: themeVars.card,
            },
            headerTintColor: themeVars.primary,
            headerBackTitle: ''
          }}
        />
        <Stack.Screen 
          name='rosary/gloriosos'
          options={{
            title:'Mistérios Gloriosos',
            headerStyle:{
              backgroundColor: themeVars.card,
            },
            headerTintColor: themeVars.primary,
            headerBackTitle: ''
          }}
        />
        <Stack.Screen 
          name='rosary/gozosos'
          options={{
            title:'Mistérios Gozosos',
            headerStyle:{
              backgroundColor: themeVars.card,
            },
            headerTintColor: themeVars.primary,
            headerBackTitle: ''
          }}
        />
        <Stack.Screen 
          name='rosary/luminosos'
          options={{
            title:'Mistérios Luminosos',
            headerStyle:{
              backgroundColor: themeVars.card,
            },
            headerTintColor: themeVars.primary,
            headerBackTitle: ''
          }}
        />
        <Stack.Screen 
          name='rosary/full'
          options={{
            title:'Rosário Completo',
            headerStyle:{
              backgroundColor: themeVars.card,
            },
            headerTintColor: themeVars.primary,
            headerBackTitle: ''
          }}
        />
      </Stack>

    </View>
  )
}
