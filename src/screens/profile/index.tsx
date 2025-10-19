import { View } from 'react-native';
import UserRewards from './user-rewards';
import { UserStatus } from './user-status';

export default function ProfileScreen() {
  
  return (
    <View className='p-4 gap-4 bg-background h-full'>
            
      {/* <UserCard/> */}
      <UserStatus/>
      <UserRewards />
      {/* <AppShare/> */}
      
    </View>
  )
}