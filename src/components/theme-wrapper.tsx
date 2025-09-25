import { useColorScheme } from "nativewind"
import { ReactNode } from "react"
import { View } from "react-native"

type ThemeProps = {
  theme: {
    light: Record<string,string>
    dark: Record<string,string>
  },
  children: ReactNode
}
export function Theme({theme,children}:ThemeProps) {
  const { colorScheme } = useColorScheme()
  return (
    <View style={theme[colorScheme || 'light']}>
      {children}
    </View>
  )
}