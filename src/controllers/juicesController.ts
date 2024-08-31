import { Request, Response } from 'express'
import juicesService from '../services/juicesService.js'
import { JuiceResponse, JuiceResponseByType } from '../types/juiceTypes.js'

async function getJuices(req: Request, res: Response) {
  const juices: JuiceResponseByType[] = await juicesService.findMany()
  return res.send(juices).status(200)
}

async function getJuiceById(req: Request, res: Response) {
  const id = req.params.id as string
  const juices: JuiceResponse = await juicesService.findById(id)
  return res.send(juices).status(200)
}

export default {
  getJuices,
  getJuiceById
}
