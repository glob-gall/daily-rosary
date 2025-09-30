import { Award, Cross, Heart, Lock, Share2, Zap } from 'lucide-react-native'
import React from 'react'
import { Image, Text, View } from 'react-native'
import twColors from 'tailwindcss/colors'

export default function Profile() {
  return (
    <View className='p-4 gap-4 bg-background h-full'>
      
      <View className='flex flex-row bg-card p-4 gap-4 rounded-xl'>
        <View className='bg-background h-4 w-4 overflow-hidden rounded-xl object-cover'>
          <Image
            source={require('@/assets/images/holy/virgemmaria.png')}
          />
        </View>

        <View>
          <Text className='font-bold text-lg text-primary'>
            Joâo Silva
          </Text>
          <Text className='text-secondary'>
            Usuário desde 19/10/2011
          </Text>
        </View>

      </View>

      <View className='bg-card p-4 rounded-xl gap-4'>
      
        <View className='flex-row items-center gap-2'>
            <Zap fill={twColors.yellow[500]} stroke={twColors.yellow[500]}/>
           <Text className='font-bold text-lg'>21 DIAS CONSECUTIVOS</Text>
        </View>

        <View className='flex-row items-center gap-2'>
            <Cross fill={twColors.black} stroke={twColors.black}/>
           <Text className='font-bold text-lg'>16 TERÇOS</Text>
        </View>

        <View className='flex-row items-center gap-2'>
            <Heart fill={twColors.red[500]} stroke={twColors.red[500]}/>
           <Text className='font-bold text-lg'>5 ROSÁRIOS</Text>
        </View>
      
      </View>

      <View className='bg-card p-4 rounded-xl gap-4 flex-1 w-full'>
        <View className='flex flex-row gap-2'>
          <Award stroke={twColors.yellow[500]}/>
          <Text className='text-primary font-bold text-lg'>CONQUISTAS</Text>
        </View>

        <View className='items-start flex-row flex-wrap flex'>
          
          <View className='p-2 gap-1 rounded-xl items-center' style={{backgroundColor: twColors.yellow[400]}}>
            <Award stroke={twColors.white}/>
            <Text className='text-primary'>10 Dias</Text>
          </View>
          
          <View className='bg-background p-2 gap-1 rounded-xl items-center'>
            <Lock stroke={twColors.slate[400]}/>
            <Text className='text-primary'>10 Dias</Text>
          </View>
          <View className='bg-background p-2 gap-1 rounded-xl items-center'>
            <Lock stroke={twColors.slate[400]}/>
            <Text className='text-primary'>10 Dias</Text>
          </View>
          <View className='bg-background p-2 gap-1 rounded-xl items-center'>
            <Lock stroke={twColors.slate[400]}/>
            <Text className='text-primary'>10 Dias</Text>
          </View>
          <View className='bg-background p-2 gap-1 rounded-xl items-center'>
            <Lock stroke={twColors.slate[400]}/>
            <Text className='text-primary'>10 Dias</Text>
          </View>
          <View className='bg-background p-2 gap-1 rounded-xl items-center'>
            <Lock stroke={twColors.slate[400]}/>
            <Text className='text-primary'>10 Dias</Text>
          </View>
  
        
        </View>

      </View>

      <View className='bg-card flex flex-row items-center p-4 rounded-xl gap-2 mt-auto'>
        <Share2/>
        <Text className='text-primary font-bold text-lg'>COMPARTILHAR</Text>
      </View>
    </View>
  )
}