import { useTheme } from '@/hooks/theme'
import { Mail } from 'lucide-react-native'
import React from 'react'
import { Text, View } from 'react-native'

export default function DeveloperInfo() {
  const {themeVars} = useTheme()
  return (
    <View className='bg-card p-4 rounded-xl'>
      <Text className='text-primary font-bold text-lg'>
        CONTATOS
      </Text>
      <Text className='text-secondary text-sm'>
      Erros e sugestões podem ser enviados para o email abaixo.
      </Text>

      {/* <Link href="https://www.instagram.com/luisf.galleguillos/">
        <View className='flex flex-row gap-2 items-center'>
          <Entypo name="instagram" size={24} color={themeVars.secondary} />
          <Text className='text-secondary text-lg font-bold'> @luisf.galleguillos</Text>

        </View>
      </Link> */}
      
      {/* <Link href="mailto:luisfelipegalleguillos@hotmail.com"> */}
        <View className='flex flex-row items-center justify-center mt-3'>
          <Mail size={24} color={themeVars.secondary}/>
          <Text className='text-secondary text-lg font-bold' selectable> luisfelipegalleguillos@hotmail.com</Text>

        </View>
      {/* </Link> */}

      <Text className='text-secondary text-sm text-center'> Desenvolvido por Luis F. G. Campos</Text>
    </View>
  )
}