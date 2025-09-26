import React from 'react'
import { Text, View } from 'react-native'

type RosaryPrayProps = {
  title: string
  pray: string
  times?: number
}
export function RosaryPray({pray,title,times}: RosaryPrayProps) {
  return (
    <View className=''>
      <Text className='text-2xl font-bold text-primary'>{title}</Text>
      <View className='flex-row items-center justify-between' style={{marginTop: -12 }}>
        <Text className='text-primary'>
          {pray}
        </Text>
      {times && (
        <View className=' ml-auto'>
          <Text className='font-bold ml-auto'>{times}x</Text> 
        </View>
      )}
      </View>
    </View>
  )
}