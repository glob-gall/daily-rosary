import { Href } from "expo-router"

const days: Href[] = [
  '/(tabs)/(home)/rosary/gloriosos',
  '/(tabs)/(home)/rosary/gozosos',
  '/(tabs)/(home)/rosary/dolorosos',
  '/(tabs)/(home)/rosary/gloriosos',
  '/(tabs)/(home)/rosary/luminosos',
  '/(tabs)/(home)/rosary/dolorosos',
  '/(tabs)/(home)/rosary/gozosos'
]
export function getDayMisteryLink(): Href {
  const now = new Date()
  return days[now.getDay()]
}