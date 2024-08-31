import { $Enums } from '@prisma/client'
export interface OrderPayload {
  juiceId: number
  options: {
    [keyname: string]: boolean
  }
  extras: {
    [keyname: string]: boolean
  }
  machine: string
  quantity: number
  cpf: string
  email: string
  pickupDateTime: string
}

export type CreateOrder = {
  id: number
  juiceId: number
  machineId: number
  userDocument: string
  email: string
  pickupDateTime: string
  createdAt: Date
  updatedAt: Date
  status: $Enums.OrderStatus
}
