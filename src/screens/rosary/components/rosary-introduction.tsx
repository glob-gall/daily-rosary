import { rosaryInitialPart } from '@/constants/rosary'
import { Fragment } from 'react'
import { Text, View } from 'react-native'

export function RosaryIntroduction() {
  return (
    <Fragment>
      <View>
        <Text>{rosaryInitialPart[1].title}</Text>
        <Text>{rosaryInitialPart[1].pray}</Text>
      </View>
      
      <View>
        <Text>{rosaryInitialPart[2].title}</Text>
        <Text>{rosaryInitialPart[2].pray}</Text>
      </View>

      <View>
        <Text>{rosaryInitialPart[3].title}</Text>
        <Text>{rosaryInitialPart[3].pray}</Text>
      </View>

      <View>
        <Text>{rosaryInitialPart[4].title}</Text>
        <Text>{rosaryInitialPart[4].pray}</Text>
      </View>

      <View>
        <Text>{rosaryInitialPart[5].title}</Text>
        <Text>{rosaryInitialPart[5].pray}</Text>
      </View>
      
    </Fragment>
  )
}