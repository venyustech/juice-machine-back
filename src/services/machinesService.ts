import machinesRepository from '../repositories/machinesRepository.js'
import { MachineData } from '../types/basicTypes.js'
import { notFoundError } from '../utils/errorUtils.js'

async function findMany(): Promise<MachineData[]> {
  const machines = await machinesRepository.findMachines()
  if (!machines || machines.length === 0) throw notFoundError('Not found machines')
  return machines
}

export default {
  findMany
}
