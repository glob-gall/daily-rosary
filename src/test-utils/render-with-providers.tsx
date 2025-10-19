import ViewTheme from "@/components/view-theme";
import { ThemeProvider } from "@/hooks/theme";
import { render, RenderOptions } from "@testing-library/react-native";
import { ReactElement, ReactNode } from "react";


const Providers = ({children}: {children:ReactNode}) => (
  <ThemeProvider>
    <ViewTheme>
      {children}
    </ViewTheme>
  </ThemeProvider>
)

export function renderWithProviders(
  component: ReactElement, 
  options?: Omit<RenderOptions,'wrapper'>

) {
  const result = render(component, {wrapper: Providers,...options})
  return result
}