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
import ingredientsFactory from '../tests/factory/ingredientsFactory.js'
import juicesFactory from '../tests/factory/juicesFactory.js'

async function main() {
  await createOptions()
  await createIngredients()
  await createJuices()
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })

async function createOptions(): Promise<void> {
  const data: Option[] = [{ name: 'sugar' }, { name: 'ice' }, { name: 'milk' }]
  await prisma.option.createMany({
    data,
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
