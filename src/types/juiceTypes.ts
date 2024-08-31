import { Extra, Ingredient, IngredientName, JuiceName, Option } from './basicTypes'

export type JuiceType = 'SHARK' | 'NATURAL' | 'FUNCTIONAL' | 'THAI' | 'SMOOTHIE' | 'GENERIC'

type BaseJuice<T extends JuiceType> = {
  name: JuiceName
  description: string
  value: number
  juiceType: T
  imageUrl: string
  options?: { option: Option }[]
  extras?: { extra: Extra }[]
  ingredient?: { ingredients: Ingredient }[]
}

export type SharkJuice = BaseJuice<'SHARK'>
export type NaturalJuice = BaseJuice<'NATURAL'>
export type FunctionalJuice = BaseJuice<'FUNCTIONAL'>
export type ThaiJuice = BaseJuice<'THAI'>
export type SmoothieJuice = BaseJuice<'SMOOTHIE'>
export type GenericJuice = BaseJuice<'GENERIC'>

export type Juice = SharkJuice | NaturalJuice | FunctionalJuice | ThaiJuice | SmoothieJuice | GenericJuice

export type JuiceIngredientMapping = Record<JuiceName, IngredientName[]>

export type JuiceResponseByType = {
  id: number
  label: string
  juiceType: string
  href: string
  juices: Juice[]
}

export type JuiceResponse = Omit<Juice, 'options' | 'extras' | 'ingredient'> & {
  options: Record<string, boolean>
  extras: Record<string, { value: number }>
  ingredient: string[]
}
