import { rosaryFinalPart } from '@/constants/rosary'
import { ScrollView, View } from 'react-native'

import CompleteRosaryButton from '@/components/complete-rosary-button'
import {
  dolorosos,
  gloriosos,
  gozosos,
  luminosos,
} from '@/constants/misteries'
import { RosaryIntroduction } from './components/rosary-introduction'
import { RosaryMisteries } from './components/rosary-misteries'
import { RosaryPray } from './components/rosary-pray'


export default function FullRosaryScreen() {

  return (
    <ScrollView className='bg-background'>
      <View className='m-4 p-4 bg-card rounded-xl'>

      <RosaryIntroduction/>      

      <RosaryMisteries
        misteries={[
          {
            title:gozosos[1].title,
            text:gozosos[1].text,
          },
          {
            title:gozosos[2].title,
            text:gozosos[2].text,
          },
          {
            title:gozosos[3].title,
            text:gozosos[3].text,
          },
          {
            title:gozosos[4].title,
            text:gozosos[4].text,
          },
          {
            title:gozosos[5].title,
            text:gozosos[5].text,
          },
        ]}
      />
      <RosaryMisteries
        misteries={[
          {
            title:luminosos[1].title,
            text:luminosos[1].text,
          },
          {
            title:luminosos[2].title,
            text:luminosos[2].text,
          },
          {
            title:luminosos[3].title,
            text:luminosos[3].text,
          },
          {
            title:luminosos[4].title,
            text:luminosos[4].text,
          },
          {
            title:luminosos[5].title,
            text:luminosos[5].text,
          },
        ]}
      />
      <RosaryMisteries
        misteries={[
          {
            title:dolorosos[1].title,
            text:dolorosos[1].text,
          },
          {
            title:dolorosos[2].title,
            text:dolorosos[2].text,
          },
          {
            title:dolorosos[3].title,
            text:dolorosos[3].text,
          },
          {
            title:dolorosos[4].title,
            text:dolorosos[4].text,
          },
          {
            title:dolorosos[5].title,
            text:dolorosos[5].text,
          },
        ]}
      />
      <RosaryMisteries
        misteries={[
          {
            title:gloriosos[1].title,
            text:gloriosos[1].text,
          },
          {
            title:gloriosos[2].title,
            text:gloriosos[2].text,
          },
          {
            title:gloriosos[3].title,
            text:gloriosos[3].text,
          },
          {
            title:gloriosos[4].title,
            text:gloriosos[4].text,
          },
          {
            title:gloriosos[5].title,
            text:gloriosos[5].text,
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

        <CompleteRosaryButton type='full'/>
      </View>

    </ScrollView>
  )
}