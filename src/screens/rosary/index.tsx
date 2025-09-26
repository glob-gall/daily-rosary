import { rosaryFinalPart } from '@/constants/rosary'
import { ScrollView, View } from 'react-native'

import { Misteries } from '@/constants/misteries'
import { RosaryIntroduction } from './components/rosary-introduction'
import { RosaryMeditations } from './components/rosary-meditations'
import { RosaryMisteries } from './components/rosary-misteries'
import { RosaryPray } from './components/rosary-pray'
type RosaryProps = {
  misteries: Misteries
}
export default function Rosary({misteries}:RosaryProps) {
  return (
    <ScrollView className='bg-background'>
      <View className='m-4 p-4 bg-card rounded-xl'>

      <RosaryIntroduction/>      

      <RosaryMisteries
        misteries={[
          {
            title:misteries[1].title,
            text:misteries[1].text,
          },
          {
            title:misteries[2].title,
            text:misteries[2].text,
          },
          {
            title:misteries[3].title,
            text:misteries[3].text,
          },
          {
            title:misteries[4].title,
            text:misteries[4].text,
          },
          {
            title:misteries[5].title,
            text:misteries[5].text,
          },
        ]}
      />

      <RosaryPray
        title={rosaryFinalPart[1].title}
        pray={rosaryFinalPart[1].pray}
      />
      <RosaryPray
        title={rosaryFinalPart[2].title}
        pray={rosaryFinalPart[2].pray}
      />

      </View>

      <RosaryMeditations
        refs={[
          misteries[1].ref,
          misteries[2].ref,
          misteries[3].ref,
          misteries[4].ref,
          misteries[5].ref,
        ]}
      />
    </ScrollView>
  )
}