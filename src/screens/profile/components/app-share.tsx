import { useTheme } from '@/hooks/theme'
import { Share2 } from 'lucide-react-native'

import { Text, View } from 'react-native'

export function AppShare() {
  const {themeVars} = useTheme()
  
  return (
    <View className='bg-card flex flex-row items-center p-4 rounded-xl gap-4 mt-auto'>
        <Share2 stroke={themeVars.primary}/>
        <Text className='text-primary font-bold text-lg'>COMPARTILHAR</Text>
      </View>
  )
}