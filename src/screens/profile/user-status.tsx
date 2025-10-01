import { Cross, Heart, Zap } from 'lucide-react-native'

import { Text, View } from 'react-native'
import twColors from 'tailwindcss/colors'


export function UserStatus() {
  return (
    <View className='bg-card p-4 rounded-xl gap-4'>
      
        <View className='flex-row items-center gap-2'>
            <Zap fill={twColors.yellow[500]} stroke={twColors.yellow[500]}/>
           <Text className='font-bold text-lg text-primary'>21 DIAS CONSECUTIVOS</Text>
        </View>

        <View className='flex-row items-center gap-2'>
            <Cross fill={twColors.black} stroke={twColors.black}/>
           <Text className='font-bold text-lg text-primary'>16 TERÇOS</Text>
        </View>

        <View className='flex-row items-center gap-2'>
            <Heart fill={twColors.red[500]} stroke={twColors.red[500]}/>
           <Text className='font-bold text-lg text-primary'>5 ROSÁRIOS</Text>
        </View>
      
      </View>
  )
}