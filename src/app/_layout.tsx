import { ThemeProvider } from "@/hooks/theme";
import Tab from "@/screens/tab";
import "@/styles/global.css";



export default function RootLayout() {

  return (
    <ThemeProvider>
      <Tab/>
    </ThemeProvider>
  )
}
