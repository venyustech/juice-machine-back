import juicesRepository from '../repositories/juicesRepository.js'
import { JuiceName } from '../types/basicTypes.js'
import { Juice, JuiceResponse, JuiceResponseByType, JuiceType } from '../types/juiceTypes.js'
import { notFoundError } from '../utils/errorUtils.js'

const juiceTypeLabels: { [key in JuiceType]: string } = {
  SHARK: 'Shark Sucos',
  NATURAL: 'Sucos Naturais',
  FUNCTIONAL: 'Sucos Funcionais',
  THAI: 'Thai Drinks',
  SMOOTHIE: 'Radical Smoothies',
  GENERIC: 'Bebidas Diversas'
}

async function findMany(): Promise<JuiceResponseByType[]> {
  const juices = await juicesRepository.findJuices()
  if (!juices || juices.length === 0) throw notFoundError('Juices not found')
  const groupedJuices = assembleJuiceResponseByType(juices)
  return groupedJuices
}

async function findById(id: string): Promise<JuiceResponse> {
  const juice = await juicesRepository.findById(parseInt(id))
  if (!juice) throw notFoundError('ID not found')
  return assembleJuice(juice)
}

function assembleJuiceResponseByType(juices: Juice[]): JuiceResponseByType[] {
  const juiceTypesMap = initializeJuiceTypesMap(juices)
  juices.forEach((juice) => {
    const label = juiceTypeLabels[juice.juiceType]
    juiceTypesMap[label].juices.push({
      ...juice,
      name: juice.name as JuiceName
    })
  })

  return Object.values(juiceTypesMap)
}

function initializeJuiceTypesMap(juices: Juice[]): { [key: string]: JuiceResponseByType } {
  const juiceTypesMap: { [key: string]: JuiceResponseByType } = {}
  juices.forEach((juice, index) => {
    const label = juiceTypeLabels[juice.juiceType]
    if (!juiceTypesMap[label]) {
      juiceTypesMap[label] = createJuiceObjectByType(label, juice.juiceType, index)
    }
  })
  return juiceTypesMap
}

function assembleJuice(juice: Juice): JuiceResponse {
  const options: Record<string, boolean> = {}
  const extras: Record<string, { value: number }> = {}

  if (juice.options)
    juice.options.forEach((option) => {
      options[option.option.name] = true
    })

  if (juice.extras)
    juice.extras.forEach((extra) => {
      extras[extra.extra.name] = { value: extra.extra.value }
    })

  return {
    ...juice,
    options,
    extras,
    ingredient: juice.ingredient?.map((ingredient) => ingredient.ingredients.name) || []
  }
}

const createJuiceObjectByType = (label: string, juiceType: JuiceType, id: number): JuiceResponseByType => ({
  id: id,
  label: label,
  juiceType: juiceType,
  href: '/',
  juices: []
})

export default {
  findMany,
  findById
}
