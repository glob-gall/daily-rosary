import { useTheme } from '@/hooks/theme'
import React, { ReactNode } from 'react'
import { View } from 'react-native'

type ViewThemeProps = {
  children: ReactNode
}
export default function ViewTheme({children}:ViewThemeProps) {
  const {twTheme} = useTheme()
  return (
    <View style={twTheme} className="w-full h-full bg-background">
      {children}
    </View>
  )
}