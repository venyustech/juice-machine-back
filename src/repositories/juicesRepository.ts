import { prisma } from '../database.js'
import { Juice } from '../types/juiceTypes.js'

const findJuices = async (): Promise<Juice[]> => prisma.juice.findMany() as Promise<Juice[]>

const findById = async (id: number): Promise<Juice | null> =>
  prisma.juice.findUnique({
    where: {
      id
    },
    include: {
      options: {
        select: {
          option: true
        }
      },
      extras: {
        select: {
          extra: true
        }
      },
      ingredient: {
        select: {
          ingredients: true
        }
      }
    }
  }) as Promise<Juice | null>

export default {
  findJuices,
  findById
}
