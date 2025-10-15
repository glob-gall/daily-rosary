import { RosaryType } from "@/constants/misteries"
import { AsyncStorage } from "@/store/async-store"
import { getDayBetweenDates } from "@/utils/get-days-between-dates"
import { createContext, ReactNode, useCallback, useContext, useEffect, useMemo, useState } from "react"


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
  getLastSequence: () => number
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
  getMonthSequence: (month:number) => ({total:0,totalFull:0}),
  getLastSequence: () => 0
}

const SequenceContext = createContext<SequenceValues>(initialValues)


type SequenceProviderProps = {
  children: ReactNode
}
export function SequenceProvider({children}:SequenceProviderProps) {
  const sequenceStore = useMemo(() => new AsyncStorage<SequenceState>() ,[])

  const [days, setDays] = useState<SequenceDay[]>([])
  const [total, setTotal] = useState(0)
  const [totalFull, setTotalFull] = useState(0)

  useEffect(() => {
    const loadSequence = async () => {
      const data = await sequenceStore.load()
      if(!data) return
      
      setDays(data.days)
      setTotal(data.total)
      setTotalFull(data.totalFull)
    }

    loadSequence()
  },[sequenceStore])


  const addDay = useCallback( async (day:SequenceDay) => {
    const exists = days.some(
      (d) =>
        d.day === day.day &&
        d.month === day.month &&
        d.year === day.year
    );
    if (exists) return;

    let newTotal= total
    let newTotalFull= totalFull
    const newDays = [...days, day]

    if(day.type ===   'full') {
      newTotalFull+=1
      setTotalFull(newTotalFull)
    }
    else {
      newTotal+=1
      setTotal(newTotal)
    }
    setDays(newDays)
    

    await sequenceStore.store({
      days: newDays,
      total: newTotal,
      totalFull: newTotalFull
    })
  },[days, sequenceStore, total, totalFull])


  const removeDay = useCallback(async (day:SequenceDay) => {
    const index = days.findIndex(
      (d) =>
        d.day === day.day &&
        d.month === day.month &&
        d.year === day.year
    );
    if (index === -1) return;

    let newTotal= total
    let newTotalFull= totalFull
    const newDays = [...days, day]

    if(day.type ===   'full') {
      newTotalFull-=1
      setTotalFull(newTotalFull)
    }
    else {
      newTotal-=1
      setTotal(newTotal)
    }
    setDays(newDays)
    

    await sequenceStore.store({
      days: newDays,
      total: newTotal,
      totalFull: newTotalFull
    })
  },[days, sequenceStore, total, totalFull])

  const reset = useCallback(()=>{
    setDays([])
    setTotal(0)
    setTotalFull(0)

    sequenceStore.store({
      days:[],
      total:0,
      totalFull:0
    })
  }, [sequenceStore])

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

  const getLastSequence = useCallback(() => {
    let last = days.length-1
    if(last === -1) return 0
    
    const lastDay = new Date(days[last].year, days[last].month-1, days[last].day)
    
    let lastSequence = 0
    let dayDistance = 0
    for (let i = last; i >= 0; i--) {
      const seqDay = new Date(days[i].year, days[i].month-1, days[i].day)
      
      if(getDayBetweenDates(lastDay,seqDay) > dayDistance) break
      dayDistance+=1
      lastSequence+=1
    }

    return lastSequence
  },[days])


  return (
    <SequenceContext.Provider value={{
      addDay,removeDay,days,reset,test,total,totalFull,getMonthSequence, getLastSequence
    }}>
      {children}
    </SequenceContext.Provider>
  ) 
}

export const useSequence = () => useContext(SequenceContext)