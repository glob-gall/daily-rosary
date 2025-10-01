import { RosaryType } from '@/constants/misteries';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

export type SequenceDay = {
  day: number
  month: number
  year: number
  type: RosaryType
}

type SequenceState = {
  days: SequenceDay[]
}

type SequenceActions = {
  addDay: (day: SequenceDay) => void
  removeDay: (day: SequenceDay) => void
}

type SequenceStore = SequenceState & SequenceActions
export const sequenceStore = create<SequenceStore>()(
  persist(
    (set, get) => ({
      days: [] as SequenceDay[],
      addDay: (day: SequenceDay) => set({
        days: [...get().days, day]
      }),
      removeDay: (day: SequenceDay) => set({
        days: get().days.filter(d => d.day !== day.day || d.month !== day.month || d.year !== day.year)
      }),
    }),
    {
      name: '@daily-rosary:sequence',
      storage: createJSONStorage(() => AsyncStorage),
    },
  ),
)