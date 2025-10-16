import { getDayMistery } from "../get-day-mistery"


describe('getDayMistery', () => {
  afterAll(() => {
    jest.useRealTimers()
  })

  it('should be able to get the correct mistery of the day', () => {
    
    jest.useFakeTimers().setSystemTime(new Date('2025-10-12:00:00.000'))
    const domingo = getDayMistery()
    expect(domingo).toBe('Mistérios Gloriosos')
    
    jest.useFakeTimers().setSystemTime(new Date('2025-10-13:00:00.000'))
    const segunda = getDayMistery()
    expect(segunda).toBe('Mistérios Gozosos')

    jest.useFakeTimers().setSystemTime(new Date('2025-10-14:00:00.000'))
    const terca = getDayMistery()
    expect(terca).toBe('Mistérios Dolorosos')
    
    jest.useFakeTimers().setSystemTime(new Date('2025-10-15:00:00.000'))
    const quarta = getDayMistery()
    expect(quarta).toBe('Mistérios Gloriosos')
    
    jest.useFakeTimers().setSystemTime(new Date('2025-10-16:00:00.000'))
    const quinta = getDayMistery()
    expect(quinta).toBe('Mistérios Luminosos')
    
    jest.useFakeTimers().setSystemTime(new Date('2025-10-17:00:00.000'))
    const sexta = getDayMistery()
    expect(sexta).toBe('Mistérios Dolorosos')
    
    jest.useFakeTimers().setSystemTime(new Date('2025-10-18:00:00.000'))
    const sabado = getDayMistery()
    expect(sabado).toBe('Mistérios Gozosos')
    
  })
})