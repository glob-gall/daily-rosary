import { splitDate } from "../split-date"

describe('splitDate', () => {

  it('should be able to get the correct day, month and year', () => {
    const date1 = new Date('2025-10-12:00:00.000')
    const splited = splitDate(date1)

    expect(splited).toEqual({
      day: 12,
      month: 10,
      year: 2025,
    })
  })
})