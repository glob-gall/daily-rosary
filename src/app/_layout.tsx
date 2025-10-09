import { SequenceProvider } from "@/hooks/sequence";
import { ThemeProvider } from "@/hooks/theme";
import Tab from "@/screens/tab";
import "@/styles/global.css";



export default function RootLayout() {

  return (
    <ThemeProvider>
      <SequenceProvider>
        <Tab/>
      </SequenceProvider>
    </ThemeProvider>
  )
}
