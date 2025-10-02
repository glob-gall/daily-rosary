import { createContext, ReactNode, useContext } from "react"

import { ThemeVariables, themeVariables, twThemes } from '@/constants/theme'
import { useColorScheme } from "react-native"


type ThemeContextVariables = {
  themeVars: ThemeVariables 
  twTheme: Record<string,string>
}
const defaultVariables: ThemeContextVariables = {
  themeVars: themeVariables.light,
  twTheme: twThemes.light
}
const ThemeContext = createContext<ThemeContextVariables>(defaultVariables) 


type ThemeProviderProps = {
  children: ReactNode
}

export function ThemeProvider({children}:ThemeProviderProps) {
  const userThemePrefference: 'light'|'dark' = useColorScheme() || 'light'

  const values: ThemeContextVariables = {
    themeVars: themeVariables[userThemePrefference],
    twTheme: twThemes[userThemePrefference]
  }

  return (
    <ThemeContext.Provider value={values}>
      {children}
    </ThemeContext.Provider>
  )
}

export const useTheme = () => useContext(ThemeContext)