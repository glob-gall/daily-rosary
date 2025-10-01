import { Stack } from 'expo-router'

import { View } from 'react-native'

export default function Layout() {
  return (
    <View className='h-full'>

      <Stack>
        <Stack.Screen 
          name='index'
          options={{
            title:'Dashboard'
          }}
        />
        <Stack.Screen 
          name='rosary/dolorosos'
          options={{
            title:'Mistérios Dolorosos'
          }}
        />
        <Stack.Screen 
          name='rosary/gloriosos'
          options={{
            title:'Mistérios Gloriosos'
          }}
        />
        <Stack.Screen 
          name='rosary/gozosos'
          options={{
            title:'Mistérios Gozosos'
          }}
        />
        <Stack.Screen 
          name='rosary/luminosos'
          options={{
            title:'Mistérios Luminosos'
          }}
        />
        <Stack.Screen 
          name='rosary/full'
          options={{
            title:'Rosário Completo'
          }}
        />
      </Stack>

    </View>
  )
}
