import { SequenceDay } from "@/store/sequence-store";
import twColors from 'tailwindcss/colors';
import { sequenceToString } from "./stored-sequence-to-string";
type CalendarDay = {
  startingDay?: boolean,
  endingDay?: boolean,
  selected: boolean,
  color: string,
  textColor: string
}

type CalendarMarkedDates = {
  [key:string]: CalendarDay
}

// '2025-09-04': {startingDay: true, endingDay:true, selected: true, color: twColors.yellow[200], textColor: twColors.yellow[800]  },
// '2025-09-20': {startingDay:true, endingDay:true, selected: true, color: twColors.yellow[200], textColor: twColors.yellow[800] },
// '2025-09-22': {startingDay: true, selected: true, color: twColors.yellow[200], textColor: twColors.yellow[800] },
// '2025-09-23': {selected: true, color: twColors.yellow[200], textColor: twColors.yellow[800] },
// '2025-09-24': {selected: true, endingDay: true, color: twColors.yellow[200], textColor: twColors.yellow[800]},

export function storedSequenceToCalendar(days:SequenceDay[]): CalendarMarkedDates {
  const calendarDays: CalendarMarkedDates = {}
  const existentDays = new Set()

  for (const day of days) {
    existentDays.add(sequenceToString(day))
  }

  for (const day of days) {
    const curDay = sequenceToString(day)
    
    const prevDate = new Date(day.year, day.month, day.day - 1);
    const nextDate = new Date(day.year, day.month, day.day + 1);
    
    const prevDateStr = `${prevDate.getFullYear()}-${prevDate.getMonth() + 1}-${prevDate.getDate()}`;
    const nextDateStr = `${nextDate.getFullYear()}-${nextDate.getMonth() + 1}-${nextDate.getDate()}`;

    const startingDay = !existentDays.has(prevDateStr);
    const endingDay = !existentDays.has(nextDateStr);

    calendarDays[curDay] = {
      selected: true, 
      color: twColors.yellow[200], 
      textColor: twColors.yellow[800],
      startingDay,
      endingDay,
    }
  }

  return calendarDays
}