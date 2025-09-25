import { Href, Link } from 'expo-router'
import { Play } from 'lucide-react-native'
import React from 'react'
import { Image, Text, View } from 'react-native'
import twColors from 'tailwindcss/colors'

type RosaryCardProps = {
  misteryName: 'gozosos' | 'luminosos' | 'dolorosos' | 'gloriosos',
  href: Href
}

const rosaryCard = {
  dolorosos: {
    img: require('@/assets/images/misterios/dolorosos.png'),
    title: 'MISTÉRIOS DOLOROSOS',
    color: twColors.red[600],
  },
  gloriosos: {
    img: require('@/assets/images/misterios/gloriosos.png'),
    title: 'MISTÉRIOS GLORIOSOS',
    color: twColors.sky[600]
  },
  gozosos: {
    img: require('@/assets/images/misterios/gozosos.png'),
    title: 'MISTÉRIOS GOZOSOS',
    color: twColors.lime[600]
  },
  luminosos: {
    img: require('@/assets/images/misterios/luminosos.png'),
    title: 'MISTÉRIOS LUMINOSOS',
  color: twColors.yellow[500], 
  }
}

export default function RosaryCard({misteryName,href}:RosaryCardProps) {
  return (
    <Link href={href} >
      <View 
        style={{backgroundColor: rosaryCard[misteryName].color}} 
        className='w-full flex-row rounded-xl overflow-hidden h-28'
      >
        <Text className='p-4 absolute z-10 text-slate-100 font-bold text-lg'>
          {rosaryCard[misteryName].title}
        </Text>
        
        <View className='mt-auto m-4 p-3 rounded-full bg-slate-950'>
          <Play 
            size={24} 
            fill={twColors.slate[200]} 
            color={twColors.slate[200]}
          />
        </View>
        <Image
        className='ml-auto h-full w-44' 
          source={rosaryCard[misteryName].img}
        />
      </View>
    </Link>
  )
}