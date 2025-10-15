import { Href, Link } from 'expo-router'
import { Play } from 'lucide-react-native'

import { Image, Text, View } from 'react-native'
import twColors from 'tailwindcss/colors'

type RosaryCardProps = {
  misteryName: 'gozosos' | 'luminosos' | 'dolorosos' | 'gloriosos' | 'full'
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
  },
  full: {
    img: require('@/assets/images/holy/virgemdorosario.png'),
    title: 'ROSÁRIO COMPLETO',
    color: "#1D191A", 
  }
}

export default function RosaryCard({misteryName,href}:RosaryCardProps) {
  return (
    <Link href={href} className='w-full'>
      <View 
        style={{backgroundColor: rosaryCard[misteryName].color}} 
        className='w-full flex-row rounded-xl overflow-hidden h-28 '
      >
        <View className='p-4 flex-col items-start justify-between'>
          <Text className='text-slate-100 font-bold text-lg'>
            {rosaryCard[misteryName].title}
          </Text>
          
          <View className='bg-slate-950 p-3 rounded-full'>
            <Play 
              size={18} 
              fill={twColors.slate[200]} 
              color={twColors.slate[200]}
            />
          </View>
        </View>
        <Image
          className='ml-auto h-full w-44' 
          source={rosaryCard[misteryName].img}
        />
      </View>
    </Link>
  )
}