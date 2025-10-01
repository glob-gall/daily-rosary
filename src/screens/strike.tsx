import { StrikeCalendar } from '@/components/strike-calendar'
import { Zap } from 'lucide-react-native'

import { Text, View } from 'react-native'

import twColors from 'tailwindcss/colors'

export default function Strike() {
  return (
    <View className='p-4 gap-4 bg-background h-full'>
      <View className='bg-card p-4 rounded-xl flex-row justify-between'>
        <View>
          <Text className='text-4xl font-bold text-primary'>21</Text>
          <Text className='font-bold text-primary'>DIAS CONSECUTIVOS</Text>
        </View>

        <Zap size={64} fill={twColors.yellow[400]} stroke={twColors.yellow[400]} absoluteStrokeWidth/>

      </View>

      <View className='rounded-xl overflow-hidden bg-card'>
        <StrikeCalendar/>
      </View>
    </View>
  )
}