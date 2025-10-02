
import { Text, View } from 'react-native'

type Ref = {
  text: string
  font: string
}
type MeditationsProps = {
 refs: Ref[]
}

export function RosaryMeditations({refs}:MeditationsProps) {
  return (
    <View className=' bg-card m-4 rounded-xl p-4 gap-4'>
      <Text className='text-2xl font-bold text-primary'>Meditações</Text>
      {refs.map( ref => (
        <View key={ref.font} className='rounded-xl  p-4'>
          <Text className='text-lg text-primary'>
            {ref.text}
          </Text>
          <Text className='ml-auto font-bold text-primary'>
            {ref.font}
          </Text>
        </View>

      ))}
      
    </View>
  )
}