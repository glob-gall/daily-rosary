import { ArrowLeft, ArrowRight, Zap } from 'lucide-react-native';
import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import twColors from 'tailwindcss/colors';
import XDate from 'xdate';

export type StrikeCalendarHeaderProps = {
  addMonth: (qnt:number) => void;
  month: string; // e.g., ISO string "2025-09-29T14:54:55.541Z"
  dayNamesShort: string[]
  
};

export default function StrikeCalendarHeader({month,addMonth,dayNamesShort}: StrikeCalendarHeaderProps) {
  const title =  new XDate(month).toString('MMMM yyyy')  

  function monthBack() {
    addMonth(-1)
  }
  function monthFoward() {
    addMonth(+1)
  }

  return (
    <View className='p-4 gap-4'>
           
      <View className='flex-row items-center justify-between'>

        <TouchableOpacity onPress={monthBack}>
          <ArrowLeft/>
        </TouchableOpacity>
        
        <Text className='text-2xl font-bold text-primary'>{title}</Text>
        
        <TouchableOpacity onPress={monthFoward}>
          <ArrowRight/>
        </TouchableOpacity>

      </View>

      <View className='items-center flex-row gap-4'>
        
        <View className='bg-background flex-row p-2 rounded-xl gap-2 items-center flex-1'>
          <Zap fill={twColors.yellow[400]} color={twColors.yellow[400]} size={32}/>
          <View className=''>
            <Text className='text-4xl font-bold text-primary'>7</Text>
            <Text className='font-bold text-primary'>TERÇOS</Text>
          </View>
        </View>

        <View className='bg-background flex-row p-2 rounded-xl gap-2 items-center flex-1'>
          <Zap fill={twColors.yellow[400]} color={twColors.yellow[400]} size={32}/>
          <View className=''>
            <Text className='text-4xl font-bold text-primary'>2</Text>
            <Text className='font-bold text-primary'>ROSÁRIOS</Text>
          </View>
        </View>
        
      </View>

      <View className='flex-row justify-between items-center border-b border-b-border py-2'>
        {dayNamesShort.map(day => <Text key={day} className='text-primary'>{day}</Text>)}
      </View>
    </View>
  )
}

