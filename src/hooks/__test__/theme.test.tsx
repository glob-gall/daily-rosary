import { themeVariables, twThemes } from "@/constants/theme";
import { renderWithProviders } from "@/test-utils/render-with-providers";
import { screen } from "@testing-library/react-native";
import { Text, useColorScheme, View } from "react-native";
import { useTheme } from "../theme";


const TestThemeComponent = () => {
  const theme = useTheme()
  
  return (
    <View testID="test-theme">
      <Text testID='test-theme-vars'>
        {JSON.stringify(theme.themeVars)}
      </Text>
      <Text testID='test-theme-twtheme'>
        {JSON.stringify(theme.twTheme)}
      </Text>
    </View>
  )
}

describe('Theme Provider', () => {
  it('should be able to provide light theme', () => {
    (useColorScheme as jest.Mock).mockReturnValue('light');

    renderWithProviders(<TestThemeComponent />)

    expect(screen.getByTestId('test-theme-vars')).toBeOnTheScreen()
    expect(screen.getByTestId('test-theme-vars')).toHaveTextContent(JSON.stringify(themeVariables.light))
    expect(screen.getByTestId('test-theme-twtheme')).toBeOnTheScreen()
    expect(screen.getByTestId('test-theme-twtheme')).toHaveTextContent(JSON.stringify(twThemes.light))

  })
  it('should be able to provide dark theme', () => {
    (useColorScheme as jest.Mock).mockReturnValue('dark');

    renderWithProviders(<TestThemeComponent />)

    expect(screen.getByTestId('test-theme-vars')).toBeOnTheScreen()
    expect(screen.getByTestId('test-theme-vars')).toHaveTextContent(JSON.stringify(themeVariables.dark))
    expect(screen.getByTestId('test-theme-twtheme')).toBeOnTheScreen()
    expect(screen.getByTestId('test-theme-twtheme')).toHaveTextContent(JSON.stringify(twThemes.dark))

  })
})