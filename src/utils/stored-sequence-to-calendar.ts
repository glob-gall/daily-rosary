import { SequenceDay } from "@/store/sequence-store";
import twColors from 'tailwindcss/colors';
import XDate from "xdate";
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
  console.log(existentDays);
  

  for (const day of days) {
    const curDay = sequenceToString(day)
    
    const prevDate = new XDate(day.year, day.month-1, day.day - 1);
    const nextDate = new XDate(day.year, day.month-1, day.day + 1);
    console.log(` ${prevDate}-[${curDay}]-${nextDate}`);
    
    const prevDateStr = prevDate.toString('yyyy-MM-dd');
    const nextDateStr = nextDate.toString('yyyy-MM-dd');
    console.log(` ${prevDateStr}-[${curDay}]-${nextDateStr}`);


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