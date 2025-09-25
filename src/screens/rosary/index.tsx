import { rosaryFinalPart } from '@/constants/rosary'
import { Text, View } from 'react-native'

import { Misteries } from '@/constants/misteries'
import { RosaryIntroduction } from './components/rosary-introduction'
import { RosaryMeditations } from './components/rosary-meditations'
import { RosaryMisteries } from './components/rosary-misteries'

type RosaryProps = {
  misteries: Misteries
}
export default function Rosary({misteries}:RosaryProps) {
  return (
    <View>
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

      <View>
        <Text>{rosaryFinalPart[1].title}</Text>
        <Text>{rosaryFinalPart[1].pray}</Text>
      </View>
    
      <View>
        <Text>{rosaryFinalPart[2].title}</Text>
        <Text>{rosaryFinalPart[2].pray}</Text>
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
      
    </View>
  )
}