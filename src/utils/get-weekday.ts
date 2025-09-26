const days = [
  'Domingo',
  'Segunda-feira',
  'Terça-feira',
  'Quarta-feira',
  'Quinta-feira',
  'Sexta-feira',
  'Sábado'
]
export function getWeekday() {
  const now = new Date()
  return days[now.getDay()]
}