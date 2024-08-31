import machinesRepository from '../repositories/machinesRepository.js'
import { MachineData } from '../types/basicTypes.js'
import { notFoundError } from '../utils/errorUtils.js'

async function findMany(): Promise<MachineData[]> {
  const machines = machinesRepository.findMachines()
  if (!machines) throw notFoundError('Not found machines')
  return machines
}

export default {
  findMany
}
