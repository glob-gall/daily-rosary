import { View } from 'react-native';
import { AppShare } from './app-share';
import UserRewards from './user-rewards';
import { UserStatus } from './user-status';

export default function Profile() {
  
  return (
    <View className='p-4 gap-4 bg-background h-full'>
            
      {/* <UserCard/> */}
      <UserStatus/>
      <UserRewards />
      <AppShare/>
      
    </View>
  )
}