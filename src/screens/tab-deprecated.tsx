import { useTheme } from '@/hooks/theme';
import { TabList, Tabs, TabSlot, TabTrigger } from 'expo-router/ui';
import { Home, User, Zap } from 'lucide-react-native';
import { Text, View } from 'react-native';

// Defining the layout of the custom tab navigator
export default function Tab() {
  const {twTheme, themeVars} = useTheme()

  return (
    <View style={twTheme} className="w-full h-full bg-background">
      <Tabs>
        <TabSlot />
        
        <TabList className='p-4 items-center justify-center flex'>
          <TabTrigger name="(tabs)/strike" href="/strike">
            <Text className='p-4 bg-card rounded-xl'>
              <Zap color={themeVars.primary}/>
            </Text>
          </TabTrigger>
          <TabTrigger name='home' href="/">
            <Text className='p-4 bg-card rounded-xl'>
              <Home color={themeVars.primary}/>
            </Text>
          </TabTrigger>
          <TabTrigger name="profile" href="/profile">
            <Text className='p-4 bg-card rounded-xl'>
              <User color={themeVars.primary}/>
            </Text>
          </TabTrigger>
        </TabList>
      </Tabs>
    </View>

  );
}
