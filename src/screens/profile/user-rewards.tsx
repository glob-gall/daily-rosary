import { Award } from 'lucide-react-native';

import { useSequence } from '@/hooks/sequence';
import { ScrollView, Text, View } from 'react-native';
import twColors from 'tailwindcss/colors';
import RewardItem from './reward-item';




export default function UserRewards() {
  const {total,totalFull} = useSequence()

  return (
    <View className='bg-card p-4 rounded-xl gap-4 flex-1'>
      <View className='flex flex-row gap-2'>
        <Award stroke={twColors.yellow[500]}/>
        <Text className='text-primary font-bold text-lg'>CONQUISTAS</Text>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
      
        <View className='flex gap-2'>

          <RewardItem completed={(total+totalFull)>=1} days={1}/>
          <RewardItem completed={(total+totalFull)>=3} days={3}/>
          <RewardItem completed={(total+totalFull)>=10} days={10}/>
          <RewardItem completed={(total+totalFull)>=30} days={30}/>
          <RewardItem completed={(total+totalFull)>=50} days={50}/>
          <RewardItem completed={(total+totalFull)>=100} days={100}/>
          <RewardItem completed={(total+totalFull)>=200} days={200}/>
          <RewardItem completed={(total+totalFull)>=300} days={300}/>
          <RewardItem completed={(total+totalFull)>=400} days={400}/>
          <RewardItem completed={(total+totalFull)>=500} days={500}/>

        </View>  
      </ScrollView>
    </View>
  )
}