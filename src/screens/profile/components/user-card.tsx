
import { Text, View } from 'react-native'

export function UserCard() {
  return (
    <View className='flex flex-row bg-card p-4 gap-4 rounded-xl'>
        <View className='bg-background h-4 w-4 overflow-hidden rounded-xl object-cover'>

        </View>

        <View>
          <Text className='font-bold text-lg text-primary'>
            Joâo Silva
          </Text>
          <Text className='text-secondary'>
            Usuário desde 19/10/2011
          </Text>
        </View>

      </View>
  )
}