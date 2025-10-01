import { Share2 } from 'lucide-react-native'

import { Text, View } from 'react-native'

export function AppShare() {
  return (
    <View className='bg-card flex flex-row items-center p-4 rounded-xl gap-2 mt-auto'>
        <Share2/>
        <Text className='text-primary font-bold text-lg'>COMPARTILHAR</Text>
      </View>
  )
}