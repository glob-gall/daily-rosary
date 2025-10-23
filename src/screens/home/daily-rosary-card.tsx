import { getDayMistery } from "@/utils/get-day-mistery";
import { getDayMisteryLink } from "@/utils/get-day-mistery-link";
import { getWeekday } from "@/utils/get-weekday";
import { Link } from "expo-router";
import { Zap } from "lucide-react-native";
import { Image, Text, View } from "react-native";
import twColors from 'tailwindcss/colors';


export default function DailyRosaryCard() {
  return (
    <View className="bg-card rounded-xl  flex w-full  flex-row p-1 flex-wrap min-h-48">
      
      <Image
        className='mr-auto h-full w-32' 
        source={require('@/assets/images/holy/virgemmaria.png')}
      />

      <View className="p-3 ml-auto">

        <Text className="ml-auto text-primary">
          {getWeekday()}
        </Text>
        <Text className="text-2xl font-bold ml-auto text-primary">
          {getDayMistery()}
        </Text>

        <View className="flex-row mt-auto items-center justify-end">
          <Zap color={twColors.yellow[500]} fill={twColors.yellow[500]} />
          <Link className="ml-2" href={getDayMisteryLink()}>
            <View className="p-3 bg-primary rounded-xl items-center">
              <Text className="text-primary-foreground">REZAR AGORA</Text>
            </View>
          </Link>
        </View>

      </View>
          
    </View>
  )
}