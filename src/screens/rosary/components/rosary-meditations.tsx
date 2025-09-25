import React from 'react'
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
    <View>
      {refs.map( ref => (
        <View key={ref.font}>
          <Text>
            {ref.text}
          </Text>
          <Text>
            {ref.font}
          </Text>
        </View>

      ))}
      
    </View>
  )
}