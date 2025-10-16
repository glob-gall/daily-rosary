import { getWeekday } from "../get-weekday"

describe('getWeekday', () => {
  afterAll(() => {
    jest.useRealTimers()
  })

  it('should be able to get the correct day of the week', () => {
    
    jest.useFakeTimers().setSystemTime(new Date('2025-10-12:00:00.000'))
    const domingo = getWeekday()    
    expect(domingo).toBe('Domingo')
    
    jest.useFakeTimers().setSystemTime(new Date('2025-10-13:00:00.000'))
    const segunda = getWeekday()
    expect(segunda).toBe('Segunda-feira')

    jest.useFakeTimers().setSystemTime(new Date('2025-10-14:00:00.000'))
    const terca = getWeekday()
    expect(terca).toBe('Terça-feira')
    
    jest.useFakeTimers().setSystemTime(new Date('2025-10-15:00:00.000'))
    const quarta = getWeekday()
    expect(quarta).toBe('Quarta-feira')
    
    jest.useFakeTimers().setSystemTime(new Date('2025-10-16:00:00.000'))
    const quinta = getWeekday()
    expect(quinta).toBe('Quinta-feira')
    
    jest.useFakeTimers().setSystemTime(new Date('2025-10-17:00:00.000'))
    const sexta = getWeekday()
    expect(sexta).toBe('Sexta-feira')
    
    jest.useFakeTimers().setSystemTime(new Date('2025-10-18:00:00.000'))
    const sabado = getWeekday()
    expect(sabado).toBe('Sábado')

    
  })
})