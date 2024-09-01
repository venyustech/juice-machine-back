import { prisma } from '../src/database.js'
import { Option } from '../src/types/basicTypes.js'
import {
  FunctionalJuice,
  GenericJuice,
  NaturalJuice,
  SharkJuice,
  SmoothieJuice,
  ThaiJuice
} from '../src/types/juiceTypes.js'
import extraFactory from '../tests/factory/extraFactory.js'
import ingredientsFactory from '../tests/factory/ingredientsFactory.js'
import { juiceIngredientMapping } from '../tests/factory/juiceIngredients.js'
import juicesFactory from '../tests/factory/juicesFactory.js'
import machinesFactory from '../tests/factory/machinesFactory.js'

export async function main() {
  try {
    await createOptions()
    await createExtras()
    await createIngredients()
    await createJuices()
    await createMachines()
  } catch (e) {
    console.error(e)
    if (process.env.NODE_ENV !== 'test') {
      process.exit(1)
    } else {
      throw e
    }
  } finally {
    await prisma.$disconnect()
  }
}
if (require.main === module) {
  main()
}

async function createOptions(): Promise<void> {
  const data: Option[] = [{ name: 'sugar' }, { name: 'ice' }, { name: 'milk' }]
  await prisma.option.createMany({
    data,
    skipDuplicates: true
  })
}
async function createExtras(): Promise<void> {
  await prisma.extra.createMany({
    data: extraFactory.extraData(),
    skipDuplicates: true
  })
}
async function createIngredients(): Promise<void> {
  await prisma.ingredient.createMany({
    data: ingredientsFactory.ingredientsData(),
    skipDuplicates: true
  })
}

async function createJuices(): Promise<void> {
  await createSharkJuices()
  await createNaturalJuices()
  await createFunctionalJuices()
  await createSmoothieJuices()
  await createThaiDrinks()
  await createGenericDrinks()
  await createJuicesOptions()
  await createJuicesExtras()
  await createJuiceIngredients()
}

async function createSharkJuices(): Promise<void> {
  const data: SharkJuice[] = juicesFactory.sharkJuicesData()
  await prisma.juice.createMany({
    data,
    skipDuplicates: true
  })
}

async function createNaturalJuices(): Promise<void> {
  const data: NaturalJuice[] = juicesFactory.naturalJuicesData()
  await prisma.juice.createMany({
    data,
    skipDuplicates: true
  })
}

async function createFunctionalJuices(): Promise<void> {
  const data: FunctionalJuice[] = juicesFactory.functionalJuicesData()
  await prisma.juice.createMany({
    data,
    skipDuplicates: true
  })
}

async function createSmoothieJuices(): Promise<void> {
  const data: SmoothieJuice[] = juicesFactory.smoothieJuiceData()
  await prisma.juice.createMany({
    data,
    skipDuplicates: true
  })
}

async function createThaiDrinks(): Promise<void> {
  const data: ThaiJuice[] = juicesFactory.thaiJuiceData()
  await prisma.juice.createMany({
    data,
    skipDuplicates: true
  })
}

async function createGenericDrinks(): Promise<void> {
  const data: GenericJuice[] = juicesFactory.genericJuiceData()
  await prisma.juice.createMany({
    data,
    skipDuplicates: true
  })
}

async function createJuicesOptions(): Promise<void> {
  const juices = await prisma.juice.findMany({
    select: {
      id: true
    }
  })
  const options = await prisma.option.findMany({
    where: {
      name: {
        in: ['sugar', 'ice', 'milk']
      }
    },
    select: {
      id: true
    }
  })
  const juiceOptionsData = juices.flatMap((juice) =>
    options.map((option) => ({
      juiceId: juice.id,
      optionId: option.id
    }))
  )
  await prisma.juiceOption.createMany({
    data: juiceOptionsData,
    skipDuplicates: true
  })
}

async function createJuicesExtras(): Promise<void> {
  const juices = await prisma.juice.findMany({
    select: {
      id: true
    }
  })
  const extras = await prisma.extra.findMany({
    where: {
      name: {
        in: ['chantilly', 'alcohol', 'whey']
      }
    },
    select: {
      id: true
    }
  })
  const juiceExtrasData = juices.flatMap((juice) =>
    extras.map((extra) => ({
      juiceId: juice.id,
      extraId: extra.id
    }))
  )
  await prisma.juiceExtra.createMany({
    data: juiceExtrasData,
    skipDuplicates: true
  })
}

async function createJuiceIngredients(): Promise<void> {
  // Passo 1: Obter todos os sucos e mapear pelo nome para fácil acesso
  const juices = await prisma.juice.findMany({
    select: {
      id: true,
      name: true
    }
  })

  // Passo 2: Obter todos os ingredientes e mapear pelo nome para fácil acesso
  const ingredients = await prisma.ingredient.findMany({
    select: {
      id: true,
      name: true
    }
  })

  // Criar um mapa de nome do suco para ID do suco
  const juiceMap: Record<string, number> = juices.reduce((map, juice) => {
    map[juice.name] = juice.id
    return map
  }, {} as Record<string, number>)

  // Criar um mapa de nome do ingrediente para ID do ingrediente
  const ingredientMap: Record<string, number> = ingredients.reduce((map, ingredient) => {
    map[ingredient.name] = ingredient.id
    return map
  }, {} as Record<string, number>)

  // Definindo o tipo explicitamente para evitar o erro
  const juiceIngredientsData: { juiceId: number; ingredientId: number }[] = []

  // Passo 3: Criar as entradas na tabela JuiceIngredient
  for (const [juiceName, ingredientNames] of Object.entries(juiceIngredientMapping)) {
    const juiceId = juiceMap[juiceName]
    if (!juiceId) continue

    for (const ingredientName of ingredientNames) {
      const ingredientId = ingredientMap[ingredientName]
      if (!ingredientId) continue

      juiceIngredientsData.push({
        juiceId,
        ingredientId
      })
    }
  }

  await prisma.juiceIngredient.createMany({
    data: juiceIngredientsData,
    skipDuplicates: true
  })
}

async function createMachines() {
  await prisma.machine.createMany({
    data: machinesFactory.machinesData(),
    skipDuplicates: true
  })
}
