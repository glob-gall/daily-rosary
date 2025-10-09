import { useSequence } from '@/hooks/sequence'
import { useTheme } from '@/hooks/theme'
import { Cross, Heart } from 'lucide-react-native'

import { Text, View } from 'react-native'
import twColors from 'tailwindcss/colors'


export function UserStatus() {
  const {themeVars} = useTheme()
  const {total,totalFull} = useSequence()
  return (
    <View className='bg-card p-4 rounded-xl gap-4'>
      
        {/* <View className='flex-row items-center gap-2'>
            <Zap fill={twColors.yellow[500]} stroke={twColors.yellow[500]}/>
           <Text className='font-bold text-lg text-primary'>21 DIAS CONSECUTIVOS</Text>
        </View> */}

        <View className='flex-row items-center gap-2'>
            <Cross fill={themeVars.primary} stroke={themeVars.primary}/>
           <Text className='font-bold text-lg text-primary'>{total} TERÇOS</Text>
        </View>

        <View className='flex-row items-center gap-2'>
            <Heart fill={twColors.red[500]} stroke={twColors.red[500]}/>
           <Text className='font-bold text-lg text-primary'>{totalFull} ROSÁRIOS</Text>
        </View>

   

        {/* <Button title='reset' onPress={reset}/> */}
        {/* <Button title='test' onPress={test}/> */}
      
      </View>
  )
}