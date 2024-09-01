import supertest from 'supertest'
import app from '../../src/app.js'
import { prisma } from '../../src/database.js'
import machinesFactory from '../factory/machinesFactory.js'

describe('Machines routes integration tests', () => {
  beforeAll(async () => {
    jest.setTimeout(30000)
  })
  beforeEach(async () => {
    await prisma.machine.deleteMany({})
  })
  afterAll(async () => {
    await prisma.$disconnect()
  })

  it('GET: /machinesshould return status 200 and a list of machines', async () => {
    const machinesData = machinesFactory.machinesData()
    await prisma.machine.createMany({ data: machinesData })

    const response = await supertest(app).get('/machines')

    expect(response.status).toEqual(200)
    expect(response.body.length).toBe(machinesData.length)
  })

  it('should return status 404 if no machines are found', async () => {
    const response = await supertest(app).get('/machines')

    expect(response.status).toEqual(404)
  })
})
