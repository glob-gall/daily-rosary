import RosaryCard from "@/components/rosary-card";
import { View } from "react-native";


export default function HomeScreen() {
  // const {colors} = useTheme()
  
  return (
    <View  className="flex h-full w-full items-center justify-center bg-background p-4 gap-4">
      <RosaryCard misteryName="dolorosos" href="/(tabs)/(home)/rosary/dolorosos" />
      <RosaryCard misteryName="gloriosos" href="/(tabs)/(home)/rosary/gloriosos" />
      <RosaryCard misteryName="gozosos" href="/(tabs)/(home)/rosary/gozosos" />
      <RosaryCard misteryName="luminosos" href="/(tabs)/(home)/rosary/luminosos" />
    </View>
  );
}


