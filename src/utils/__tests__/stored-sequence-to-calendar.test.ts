import { SequenceDay } from "@/hooks/sequence"
import twColors from "tailwindcss/colors"
import { CalendarMarkedDates, storedSequenceToCalendar } from "../stored-sequence-to-calendar"

describe('storedSequenceToCalendar', () => {

  it('should be able to get the correct Calendar Days format', () => {
    const days: SequenceDay[] = [
      {
        day: 1,
        month: 1,
        year: 2025,
        type: 'full',
      },
      {
        day: 2,
        month: 1,
        year: 2025,
        type: 'full',
      },
      {
        day: 1,
        month: 2,
        year: 2025,
        type: 'full',
      },
      {
        day: 3,
        month: 2,
        year: 2025,
        type: 'full',
      },
    ]
    const calendarDays: CalendarMarkedDates = {
      '2025-01-01': {
        selected: true, 
        color: twColors.yellow[200], 
        textColor: twColors.yellow[800],
        startingDay: true,
        endingDay: false,
      },
      '2025-01-02': {
        selected: true, 
        color: twColors.yellow[200], 
        textColor: twColors.yellow[800],
        startingDay: false,
        endingDay: true,
      },
      '2025-02-01': {
        selected: true, 
        color: twColors.yellow[200], 
        textColor: twColors.yellow[800],
        startingDay: true,
        endingDay: true,
      },
      '2025-02-03': {
        selected: true, 
        color: twColors.yellow[200], 
        textColor: twColors.yellow[800],
        startingDay: true,
        endingDay: true,
      }
    }
    const response = storedSequenceToCalendar(days)
    
    expect(response.calendarDays).toEqual(calendarDays)
  })

  it('should be able to not break if day array is empty', () => {
    const response = storedSequenceToCalendar([])
    
    expect(response).toEqual({calendarDays:{}})
  })
})