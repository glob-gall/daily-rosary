import { getDayBetweenDates } from "../get-days-between-dates"

describe('getDayBetweenDates', () => {


  it('should be able to get the correct day count between dates', () => {
    const date1 = new Date('2025-10-12:00:00.000')
    const date2 = new Date('2025-10-15:00:00.000')
    const days = getDayBetweenDates(date1, date2)

    
    expect(days).toBe(3)
  })
})