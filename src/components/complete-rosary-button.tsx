import { RosaryType } from '@/constants/misteries'
import { sequenceStore } from '@/store/sequence-store'
import { splitDate } from '@/utils/split-date'
import { useRouter } from 'expo-router'
import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'

type CompleteRosaryButtonProps = {
  type: RosaryType
}
export default function CompleteRosaryButton({type}: CompleteRosaryButtonProps) {
  const router = useRouter();
  const { addDay } = sequenceStore()

  function confirmComplete() {
    addDay({
      type: 'full',
      ...splitDate(new Date())
    })
    router.back()

  }

  return (
    <TouchableOpacity onPress={confirmComplete}>
      <View className='bg-primary rounded-xl items-center justify-center flex-row p-4 gap-4'>
        {/* <Check stroke={twColors.slate[100]} strokeWidth={3}/> */}
        <Text className='text-primary-foreground text-xl font-bold'>AMÉM</Text>
      </View>
    </TouchableOpacity>
  )
}