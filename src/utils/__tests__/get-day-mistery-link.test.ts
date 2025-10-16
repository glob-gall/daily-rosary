import { getDayMisteryLink } from "../get-day-mistery-link"

describe('getDayMisteryLink', () => {
  afterAll(() => {
    jest.useRealTimers()
  })

  it('should be able to get the correct link for the days misteries', () => {
    
    jest.useFakeTimers().setSystemTime(new Date('2025-10-12:00:00.000'))
    const domingo = getDayMisteryLink()
    expect(domingo).toBe('/(tabs)/(home)/rosary/gloriosos')
    
    jest.useFakeTimers().setSystemTime(new Date('2025-10-13:00:00.000'))
    const segunda = getDayMisteryLink()
    expect(segunda).toBe('/(tabs)/(home)/rosary/gozosos')

    jest.useFakeTimers().setSystemTime(new Date('2025-10-14:00:00.000'))
    const terca = getDayMisteryLink()
    expect(terca).toBe('/(tabs)/(home)/rosary/dolorosos')
    
    jest.useFakeTimers().setSystemTime(new Date('2025-10-15:00:00.000'))
    const quarta = getDayMisteryLink()
    expect(quarta).toBe('/(tabs)/(home)/rosary/gloriosos')
    
    jest.useFakeTimers().setSystemTime(new Date('2025-10-16:00:00.000'))
    const quinta = getDayMisteryLink()
    expect(quinta).toBe('/(tabs)/(home)/rosary/luminosos')
    
    jest.useFakeTimers().setSystemTime(new Date('2025-10-17:00:00.000'))
    const sexta = getDayMisteryLink()
    expect(sexta).toBe('/(tabs)/(home)/rosary/dolorosos')
    
    jest.useFakeTimers().setSystemTime(new Date('2025-10-18:00:00.000'))
    const sabado = getDayMisteryLink()
    expect(sabado).toBe('/(tabs)/(home)/rosary/gozosos')
    
  })
})