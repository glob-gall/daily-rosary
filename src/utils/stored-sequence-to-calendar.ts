import { SequenceDay } from '@/hooks/sequence';
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

export type CalendarMarkedDates = {
  [key:string]: CalendarDay
}

type StoredSequenceToCalendarResponse = {
  calendarDays:CalendarMarkedDates
}

export function storedSequenceToCalendar(days:SequenceDay[]): StoredSequenceToCalendarResponse {
  const calendarDays: CalendarMarkedDates = {}
  const existentDays = new Set()

  for (const day of days) {
    existentDays.add(sequenceToString(day))
  }

  for (const day of days) {
    const curDay = sequenceToString(day)
    
    const prevDate = new XDate(day.year, day.month-1, day.day - 1);
    const nextDate = new XDate(day.year, day.month-1, day.day + 1);
    
    const prevDateStr = prevDate.toString('yyyy-MM-dd');
    const nextDateStr = nextDate.toString('yyyy-MM-dd');

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

  return {
    calendarDays
  }
}