import { IngredientName, JuiceName } from './basicTypes'

type JuiceType = 'SHARK' | 'NATURAL' | 'FUNCTIONAL' | 'THAI' | 'SMOOTHIE' | 'GENERIC'

type BaseJuice<T extends JuiceType> = {
  name: JuiceName
  description: string
  value: number
  juiceType: T
  imageUrl: string
}

export type SharkJuice = BaseJuice<'SHARK'>
export type NaturalJuice = BaseJuice<'NATURAL'>
export type FunctionalJuice = BaseJuice<'FUNCTIONAL'>
export type ThaiJuice = BaseJuice<'THAI'>
export type SmoothieJuice = BaseJuice<'SMOOTHIE'>
export type GenericJuice = BaseJuice<'GENERIC'>

export type Juice = SharkJuice | NaturalJuice | FunctionalJuice | ThaiJuice | SmoothieJuice | GenericJuice

export type JuiceIngredientMapping = Record<JuiceName, IngredientName[]>
