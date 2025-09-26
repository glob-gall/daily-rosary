const days = [
  'Mistérios Gloriosos',
  'Mistérios Gozosos',
  'Mistérios Dolorosos',
  'Mistérios Gloriosos',
  'Mistérios Luminosos',
  'Mistérios Dolorosos',
  'Mistérios Gozosos'
]
export function getDayMistery() {
  const now = new Date()
  return days[now.getDay()]
}