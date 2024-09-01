import app from '../../src/app.js'
import supertest from 'supertest'
import { prisma } from '../../src/database.js'
import { JuiceResponseByType } from '../../src/types/juiceTypes.js'
import { main as createSeed } from '../../prisma/seed.js'
import juicesFactory from '../factory/juicesFactory.js'

describe('Juices routes integration tests', () => {
  beforeAll(async () => {
    jest.setTimeout(30000)
  })

  beforeEach(async () => {
    await cleanDatabase()
  })

  afterEach(async () => {
    await cleanDatabase()
  })

  afterAll(async () => {
    await prisma.$disconnect()
  })

  describe('GET: /juices', () => {
    it('should return status 200 and a list of juices grouped by type', async () => {
      await createSeed()
      const response = await supertest(app).get('/juices')

      expect(response.status).toEqual(200)

      expect(response.body).toBeInstanceOf(Array)
      expect(response.body.length).toBeGreaterThan(0)

      response.body.forEach((juiceGroup: JuiceResponseByType) => {
        expect(juiceGroup).toHaveProperty('id')
        expect(juiceGroup).toHaveProperty('label')
        expect(juiceGroup).toHaveProperty('juiceType')
        expect(juiceGroup).toHaveProperty('href')
        expect(juiceGroup).toHaveProperty('juices')
        expect(juiceGroup.juices).toBeInstanceOf(Array)
      })
    })

    it('should return status 404 if no juices are found', async () => {
      await cleanDatabase()
      const response = await supertest(app).get('/juices')
      expect(response.status).toEqual(404)
    })
  })

  describe('GET: /juice/:id', () => {
    it('should return status 200 and a juice when a valid ID is provided', async () => {
      const juiceData = juicesFactory.sharkJuicesData()[0]
      const prismaInputData = juicesFactory.transformSharkJuiceToPrismaInput(juiceData)
      const createdJuice = await prisma.juice.create({ data: prismaInputData })

      const response = await supertest(app).get(`/juice/${createdJuice.id}`)

      expect(response.status).toEqual(200)
      expect(response.body).toMatchObject({
        id: createdJuice.id,
        name: createdJuice.name,
        value: createdJuice.value,
        description: createdJuice.description,
        juiceType: createdJuice.juiceType
      })
    })

    it('should return status 404 if no juice is found for the given ID', async () => {
      const invalidId = 9999

      const response = await supertest(app).get(`/juice/${invalidId}`)

      expect(response.status).toEqual(404)
    })
  })
})

async function cleanDatabase() {
  await prisma.orderOption.deleteMany({})
  await prisma.orderExtra.deleteMany({})
  await prisma.order.deleteMany({})

  await prisma.juiceIngredient.deleteMany({})
  await prisma.juiceOption.deleteMany({})
  await prisma.juiceExtra.deleteMany({})

  await prisma.juice.deleteMany({})
}
