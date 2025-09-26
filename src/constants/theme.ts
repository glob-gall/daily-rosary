/**
 * Below are the colors that are used in the app. The colors are defined in the light and dark mode.
 * There are many other ways to style your app. For example, [Nativewind](https://www.nativewind.dev/), [Tamagui](https://tamagui.dev/), [unistyles](https://reactnativeunistyles.vercel.app), etc.
 */

import { vars } from 'nativewind';
import { Platform } from 'react-native';
import twColors from 'tailwindcss/colors';

export type ThemeVariables = {
  radius: string,
    background: string,
    foreground: string,
    card: string,
    cardForeground: string,
    popover: string,
    popoverForeground: string,
    primary: string,
    primaryForeground: string,
    secondary: string,
    secondaryForeground: string,
    muted: string,
    mutedForeground: string,
    accent: string,
    accentForeground: string,
    destructive: string,
    border: string,
    input: string,
    ring: string,
}

const lightThemeVariables: ThemeVariables = {
  radius: "0.625rem",
  background: twColors.slate[200],
  foreground: twColors.slate[800],
  card: twColors.slate[100],
  cardForeground: twColors.slate[700],
  popover: twColors.slate[100],
  popoverForeground: twColors.slate[800],
  primary: twColors.slate[800],
  primaryForeground: twColors.slate[100],
  secondary: twColors.slate[400],
  secondaryForeground: twColors.slate[200],
  muted: twColors.slate[500],
  mutedForeground: twColors.slate[700],
  accent: twColors.blue[300],
  accentForeground: twColors.slate[800],
  destructive: twColors.red[400],
  border: twColors.slate[700],
  input: twColors.slate[700],
  ring: twColors.blue[400],
}
const darkThemeVariables: ThemeVariables = {
  radius: "0.625rem",
  background: twColors.slate[950],
  foreground: twColors.slate[200],
  card: twColors.slate[800],
  cardForeground: twColors.slate[200],
  popover: twColors.slate[700],
  popoverForeground: twColors.slate[200],
  primary: twColors.slate[100],
  primaryForeground: twColors.slate[900],
  secondary: twColors.slate[400],
  secondaryForeground: twColors.slate[500],
  muted: twColors.slate[500],
  mutedForeground: twColors.slate[200],
  accent: twColors.slate[600],
  accentForeground: twColors.slate[300],
  destructive: twColors.red[600],
  border: twColors.slate[600],
  input: twColors.slate[600],
  ring: twColors.slate[200],
}
export const themeVariables = {
  light: lightThemeVariables,
  dark: darkThemeVariables,
};

export const Fonts = Platform.select({
  ios: {
    /** iOS `UIFontDescriptorSystemDesignDefault` */
    sans: 'system-ui',
    /** iOS `UIFontDescriptorSystemDesignSerif` */
    serif: 'ui-serif',
    /** iOS `UIFontDescriptorSystemDesignRounded` */
    rounded: 'ui-rounded',
    /** iOS `UIFontDescriptorSystemDesignMonospaced` */
    mono: 'ui-monospace',
  },
  default: {
    sans: 'normal',
    serif: 'serif',
    rounded: 'normal',
    mono: 'monospace',
  },
  web: {
    sans: "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif",
    serif: "Georgia, 'Times New Roman', serif",
    rounded: "'SF Pro Rounded', 'Hiragino Maru Gothic ProN', Meiryo, 'MS PGothic', sans-serif",
    mono: "SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace",
  },
});


export type ThemeData = {
  '--radius': string,
  '--background': string,
  '--foreground': string,
  '--card': string,
  '--card-foreground': string,
  '--popover': string,
  '--popover-foreground': string,
  '--primary': string,
  '--primary-foreground': string,
  '--secondary': string,
  '--secondary-foreground': string,
  '--muted': string,
  '--muted-foreground': string,
  '--accent': string,
  '--accent-foreground': string,
  '--destructive': string,
  '--border': string,
  '--input': string,
  '--ring': string,
}
export const lightTheme = vars<ThemeData>({
  "--radius": "4px",
  "--background": twColors.slate[200],
  "--foreground": twColors.slate[800],
  "--card": twColors.white,
  "--card-foreground": twColors.slate[700],
  "--popover": twColors.slate[100],
  "--popover-foreground": twColors.slate[800],
  "--primary": twColors.slate[800],
  "--primary-foreground": twColors.slate[100],
  "--secondary": twColors.slate[400],
  "--secondary-foreground": twColors.slate[200],
  "--muted": twColors.slate[500],
  "--muted-foreground": twColors.slate[700],
  "--accent": twColors.blue[300],
  "--accent-foreground": twColors.slate[800],
  "--destructive": twColors.red[400],
  "--border": twColors.slate[300],
  "--input": twColors.slate[700],
  "--ring": twColors.blue[400],
}) 
export const darkTheme = vars<ThemeData>({
  "--radius": "4px",
  "--background": twColors.slate[950],
  "--foreground": twColors.slate[200],
  "--card": twColors.slate[800],
  "--card-foreground": twColors.slate[200],
  "--popover": twColors.slate[700],
  "--popover-foreground": twColors.slate[200],
  "--primary": twColors.slate[100],
  "--primary-foreground": twColors.slate[900],
  "--secondary": twColors.slate[400],
  "--secondary-foreground": twColors.slate[500],
  "--muted": twColors.slate[500],
  "--muted-foreground": twColors.slate[200],
  "--accent": twColors.slate[600],
  "--accent-foreground": twColors.slate[300],
  "--destructive": twColors.red[600],
  "--border": twColors.slate[600],
  "--input": twColors.slate[600],
  "--ring": twColors.slate[200],
})
