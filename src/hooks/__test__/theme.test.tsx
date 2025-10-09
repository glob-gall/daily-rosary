import { themeVariables, twThemes } from "@/constants/theme";
import { renderHook } from "@testing-library/react-native";
import { useColorScheme } from "react-native";
import { ThemeProvider, useTheme } from "../theme";

jest.mock('react-native')

describe('Theme Provider', () => {
  it('should be able to provide light theme', () => {
    (useColorScheme as jest.Mock).mockReturnValue('light');

    const {result} = renderHook(() => useTheme(), {wrapper: ThemeProvider})

    expect(result.current.themeVars).toEqual(themeVariables.light)
    expect(result.current.twTheme).toEqual(twThemes.light)
  })
  it('should be able to provide dark theme', () => {
    (useColorScheme as jest.Mock).mockReturnValue('dark');

    const {result} = renderHook(() => useTheme(), {wrapper: ThemeProvider})

    expect(result.current.themeVars).toEqual(themeVariables.dark)
    expect(result.current.twTheme).toEqual(twThemes.dark)
  })
})