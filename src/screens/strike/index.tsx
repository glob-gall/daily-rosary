import { StrikeCalendar } from '@/components/strike-calendar'


import { View } from 'react-native'

import ConsecutiveDays from './consecutive-days'

export default function StrikeScreen() {

  return (
    <View className='p-4 gap-4 bg-background h-full'>
      <ConsecutiveDays/>

      <View className='rounded-xl overflow-hidden bg-card'>
        <StrikeCalendar/>
      </View>
    </View>
  )
}