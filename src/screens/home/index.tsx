// import AudioPlayer from "@/components/audio-player";
import RosaryCard from "@/components/rosary-card";
import { ScrollView, View } from "react-native";
import DailyRosaryCard from "./daily-rosary-card";

export default function HomeScreen() {

  return (
    <ScrollView className="h-full flex bg-background" showsVerticalScrollIndicator={false}>
      <View  className="flex h-full  items-center justify-center gap-4 p-4">
        
        <DailyRosaryCard/>
        {/* <AudioPlayer/> */}

        <RosaryCard misteryName="full" href="/(tabs)/(home)/rosary/full" />
        <RosaryCard misteryName="dolorosos" href="/(tabs)/(home)/rosary/dolorosos" />
        <RosaryCard misteryName="gloriosos" href="/(tabs)/(home)/rosary/gloriosos" />
        <RosaryCard misteryName="gozosos" href="/(tabs)/(home)/rosary/gozosos" />
        <RosaryCard misteryName="luminosos" href="/(tabs)/(home)/rosary/luminosos" />
      </View>
    </ScrollView>
  );
}


