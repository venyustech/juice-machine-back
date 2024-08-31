import { prisma } from '../database.js'
import { MachineData } from '../types/basicTypes.js'

const findMachines = async (): Promise<MachineData[]> => prisma.machine.findMany() as Promise<MachineData[]>

export default {
  findMachines
}
