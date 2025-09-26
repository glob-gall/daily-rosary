import { Mistery } from '@/constants/misteries'
import { denario, misteryIntroduction } from '@/constants/rosary'
import { Fragment } from 'react'
import { View } from 'react-native'
import { RosaryPray } from './rosary-pray'

type MisteryWithoutRef = Omit<Mistery,'ref'>

type MisteriesProps = {
 misteries: MisteryWithoutRef[]
}

export function RosaryMisteries({misteries}:MisteriesProps) {
  return (
    <Fragment>
      {misteries.map( mistery => (
        <View key={mistery.title}>
          <RosaryPray
            title={misteryIntroduction[1].title}
            pray={misteryIntroduction[1].pray}
          />
          <RosaryPray
            title={misteryIntroduction[2].title}
            pray={misteryIntroduction[2].pray}
          />

          <RosaryPray
            title={mistery.title}
            pray={mistery.text}
          />

          <RosaryPray
            title={denario[1].title}
            pray={denario[1].pray}
          />
          <View>
            <RosaryPray
              title={denario[2].title}
              pray={denario[2].pray}
              times={denario[2].times}
            />
          </View>

        </View>
      ))}
    </Fragment>
  )
}