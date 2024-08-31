import { Request, Response } from 'express'
import orderService from '../services/orderService.js'
import { OrderPayload } from '../types/orderTypes'

async function createOrder(req: Request, res: Response) {
  const body = req.body as OrderPayload[]
  const order = await orderService.createOrder(body)
  return res.send(order).status(200)
}

export default {
  createOrder
}
