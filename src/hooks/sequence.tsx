import { RosaryType } from "@/constants/misteries"
import { createContext, ReactNode, useCallback, useContext, useState } from "react"

export type SequenceDay = {
  day: number
  month: number
  year: number
  type: RosaryType
}

type SequenceState = {
  days: SequenceDay[]
  total: number
  totalFull: number
}

type GetMonthSequenceResponse = {
  total: number
  totalFull: number
}

type SequenceActions = {
  addDay: (day: SequenceDay) => void
  removeDay: (day: SequenceDay) => void
  reset: () => void
  test: () => void
  getMonthSequence: (month: number) => GetMonthSequenceResponse
}

type SequenceValues = SequenceState & SequenceActions;

const initialValues:SequenceValues = {
  days:[],
  total: 0,
  totalFull: 0,
  addDay: () => {},
  removeDay: () => {},
  reset: () => {},
  test: () => {},
  getMonthSequence: (month:number) => ({total:0,totalFull:0})

}

const SequenceContext = createContext<SequenceValues>(initialValues)


type SequenceProviderProps = {
  children: ReactNode
}
export function SequenceProvider({children}:SequenceProviderProps) {
  const [days, setDays] = useState<SequenceDay[]>([])
  const [total, setTotal] = useState(0)
  const [totalFull, setTotalFull] = useState(0)

  const addDay = useCallback((day:SequenceDay) => {
    const exists = days.some(
      (d) =>
        d.day === day.day &&
        d.month === day.month &&
        d.year === day.year
    );
    if (exists) return;

    if(day.type ===   'full') setTotalFull(t => t+1)
    else setTotal(t => t+1)

    setDays(state => [...state, day])
  },[days])
  const removeDay = useCallback((day:SequenceDay) => {
    const index = days.findIndex(
      (d) =>
        d.day === day.day &&
        d.month === day.month &&
        d.year === day.year
    );
    if (index === -1) return;

    if(day.type ===   'full') setTotalFull(t => t-1)
    else setTotal(t => t-1)
    

    setDays(state => state.splice(index,1))
  },[days])

  const reset = useCallback(()=>{
    setDays([])
    setTotal(0)
    setTotalFull(0)
  }, [])

  const test = useCallback(()=>{
    setDays([])
    setTotal(s => s+1)
    setTotalFull(s => s+1)
  }, [])

  const getMonthSequence = useCallback((month: number): GetMonthSequenceResponse =>{
    let monthTotal = 0
    let monthTotalFull = 0

    for (let i = 0; i < days.length; i++) {
      if(days[i].month === month) {
        if(days[i].type=== 'full') monthTotalFull +=1
        else monthTotal+=1
      }
    }
      
    return {
      total: monthTotal,
      totalFull: monthTotalFull,
    }
  }, [days])


  return (
    <SequenceContext.Provider value={{
      addDay,removeDay,days,reset,test,total,totalFull,getMonthSequence
    }}>
      {children}
    </SequenceContext.Provider>
  ) 
}

export const useSequence = () => useContext(SequenceContext)