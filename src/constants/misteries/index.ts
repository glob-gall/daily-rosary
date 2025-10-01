import { dolorosos } from './dolorosos'
import { gloriosos } from './gloriosos'
import { gozosos } from './gozosos'
import { luminosos } from './luminosos'

export type RosaryType = 'dolorosos'| 'gloriosos' | 'gozosos' | 'luminosos' | 'full'
export type Mistery = {
  title: string
  text: string
  ref: {
    text: string
    font: string
  }
}

export type Misteries = {
  1: Mistery,
  2: Mistery,
  3: Mistery,
  4: Mistery,
  5: Mistery,
}

export {
  dolorosos,
  gloriosos,
  gozosos,
  luminosos
}
