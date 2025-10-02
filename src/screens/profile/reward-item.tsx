import { useTheme } from "@/hooks/theme";
import { cva } from "class-variance-authority";
import { Award, Lock } from 'lucide-react-native';
import React from 'react';
import { Text, View } from 'react-native';
import twColors from 'tailwindcss/colors';

const badgeVariants = cva(
  "p-4 rounded-lg items-center flex-row gap-2",
  {
    variants: {
      completed: {
        true:
          "bg-yellow-400",
        false:
          "bg-background",
      },
    },
    defaultVariants: {
      completed: true,
    },
  }
)

type RewardItemProps = {
  completed: boolean
  days: number
}

// className="w"
export default function RewardItem({completed,days}:RewardItemProps) {

  const {themeVars} = useTheme()

  return (
    <View className={badgeVariants({completed})} >
      {completed?(
        <Award stroke={twColors.slate[800]} size={24}/>
      ):(
        <Lock stroke={themeVars.secondary}  size={24}/>
      )}
      {completed ? (
        <Text className='text-slate-800'>{days} dias</Text>
      ) :(
        <Text className='text-foreground'>{days} dias</Text>
      )}
    </View>
  )
}