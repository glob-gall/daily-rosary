import { Mistery } from '@/constants/misteries'
import { denario, misteryIntroduction } from '@/constants/rosary'
import { Fragment } from 'react'
import { Text, View } from 'react-native'

type MisteryWithoutRef = Omit<Mistery,'ref'>

type MisteriesProps = {
 misteries: MisteryWithoutRef[]
}

export function RosaryMisteries({misteries}:MisteriesProps) {
  return (
    <Fragment>
      {misteries.map( mistery => (
        <View key={mistery.title}>
          <View>
            <Text>{misteryIntroduction[1].title}</Text>
            <Text>{misteryIntroduction[1].pray}</Text>
          </View>
          <View>
            <Text>{misteryIntroduction[2].title}</Text>
            <Text>{misteryIntroduction[2].pray}</Text>
          </View>
          
          <View>
            <Text>
              {mistery.title}
            </Text>
            <Text>
              {mistery.text}
            </Text>
          </View>

          <View>
            <Text>{denario[1].title}</Text>
            <Text>{denario[1].pray}</Text>
          </View>
          <View>
            <Text>{denario[2].title}</Text>
            <Text>{denario[2].pray}</Text>
            <Text>{denario[2].times}</Text>
          </View>

        </View>
      ))}
    </Fragment>
  )
}