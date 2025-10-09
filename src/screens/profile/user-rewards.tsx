import { Award } from 'lucide-react-native';

import { ScrollView, Text, View } from 'react-native';
import twColors from 'tailwindcss/colors';
import RewardItem from './reward-item';




export default function UserRewards() {
  

  return (
    <View className='bg-card p-4 rounded-xl gap-4 flex-1'>
      <View className='flex flex-row gap-2'>
        <Award stroke={twColors.yellow[500]}/>
        <Text className='text-primary font-bold text-lg'>CONQUISTAS</Text>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
      
        <View className='flex gap-2'>

          <RewardItem completed={true} days={10}/>
          <RewardItem completed={false} days={30}/>
          <RewardItem completed={false} days={50}/>
          <RewardItem completed={false} days={100}/>
          <RewardItem completed={false} days={200}/>
          <RewardItem completed={false} days={300}/>
          <RewardItem completed={false} days={400}/>
          <RewardItem completed={false} days={500}/>

        </View>  
      </ScrollView>
    </View>
  )
}