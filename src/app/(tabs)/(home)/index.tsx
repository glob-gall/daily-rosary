import RosaryCard from "@/components/rosary-card";
import { getDayMistery } from "@/utils/get-day-mistery";
import { getDayMisteryLink } from "@/utils/get-day-mistery-link";
import { getWeekday } from "@/utils/get-weekday";
import { Link } from "expo-router";
import { Zap } from "lucide-react-native";
import { Image, ScrollView, Text, View } from "react-native";
import twColors from 'tailwindcss/colors';

export default function HomeScreen() {
  
  return (
    <ScrollView className="h-full flex bg-background">
      <View  className="flex h-full  items-center justify-center gap-4 p-4 ">
        <View className="bg-card rounded-xl  flex w-full h-48  flex-row p-1">
          <Image
            className='mr-auto h-full w-32' 
            source={require('@/assets/images/holy/virgemmaria.png')}
          />

          <View className="m-3">
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
        <RosaryCard misteryName="full" href="/(tabs)/(home)/rosary/full" />
        <RosaryCard misteryName="dolorosos" href="/(tabs)/(home)/rosary/dolorosos" />
        <RosaryCard misteryName="gloriosos" href="/(tabs)/(home)/rosary/gloriosos" />
        <RosaryCard misteryName="gozosos" href="/(tabs)/(home)/rosary/gozosos" />
        <RosaryCard misteryName="luminosos" href="/(tabs)/(home)/rosary/luminosos" />
      </View>
    </ScrollView>
  );
}


