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

export function renderComponent(
  component: ReactElement, 
  options?: Omit<RenderOptions,'wrapper'>

) {
  return render(component, {wrapper: Providers, ...options})
}