import { renderWithProviders } from "@/test-utils/render-with-providers"
import { screen } from "@testing-library/react-native"
import DailyRosaryCard from "../home/daily-rosary-card"

describe('Home', () => {
  afterAll(() => {
    jest.useRealTimers()
  })
  it('should be able to show the proper rosary misteries', () => {

    jest.useFakeTimers().setSystemTime(new Date('2025-10-19:05:00.000'))
    const {rerender} = renderWithProviders(
      <DailyRosaryCard/>
    )
    expect(screen.getByText('Domingo')).toBeOnTheScreen()
    expect(screen.getByText('Mistérios Gloriosos')).toBeOnTheScreen()
    
    jest.setSystemTime(new Date('2025-10-20T05:00:00.000Z'))
    rerender(<DailyRosaryCard />)
    expect(screen.getByText('Segunda-feira')).toBeOnTheScreen()
    expect(screen.getByText('Mistérios Gozosos')).toBeOnTheScreen()

    
    jest.setSystemTime(new Date('2025-10-21T05:00:00.000Z'))
    rerender(<DailyRosaryCard />)
    expect(screen.getByText('Terça-feira')).toBeOnTheScreen()
    expect(screen.getByText('Mistérios Dolorosos')).toBeOnTheScreen()

    
    jest.setSystemTime(new Date('2025-10-22T05:00:00.000Z'))
    rerender(<DailyRosaryCard />)
    expect(screen.getByText('Quarta-feira')).toBeOnTheScreen()
    expect(screen.getByText('Mistérios Gloriosos')).toBeOnTheScreen()
    
    
    jest.setSystemTime(new Date('2025-10-23T05:00:00.000Z'))
    rerender(<DailyRosaryCard />)
    expect(screen.getByText('Quinta-feira')).toBeOnTheScreen()
    expect(screen.getByText('Mistérios Luminosos')).toBeOnTheScreen()
    

    jest.setSystemTime(new Date('2025-10-24T05:00:00.000Z'))
    rerender(<DailyRosaryCard />)
    expect(screen.getByText('Sexta-feira')).toBeOnTheScreen()
    expect(screen.getByText('Mistérios Dolorosos')).toBeOnTheScreen()
    

    jest.setSystemTime(new Date('2025-10-25T05:00:00.000Z'))
    rerender(<DailyRosaryCard />)
    expect(screen.getByText('Sábado')).toBeOnTheScreen()
    expect(screen.getByText('Mistérios Gozosos')).toBeOnTheScreen()
  })
})