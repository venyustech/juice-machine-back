import { Request, Response } from 'express'
import machinesService from '../services/machinesService.js'
import { MachineData } from '../types/basicTypes.js'

async function getMachines(req: Request, res: Response) {
  const machines: MachineData[] = await machinesService.findMany()
  return res.send(machines).status(200)
}

export default {
  getMachines
}
