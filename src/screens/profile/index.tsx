import { View } from 'react-native';
import DeveloperInfo from './components/developer-info';
import UserRewards from './components/user-rewards';
import { UserStatus } from './components/user-status';

export default function ProfileScreen() {
  
  return (
    <View className='p-4 gap-4 bg-background h-full'>
            
      {/* <UserCard/> */}
      <UserStatus/>
      <UserRewards />
      {/* <AppShare/> */}
      <DeveloperInfo />
    </View>
  )
}