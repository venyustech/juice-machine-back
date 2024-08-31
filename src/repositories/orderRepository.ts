import { OrderStatus } from '@prisma/client'
import { prisma } from '../database.js'
import { OrderPayload } from '../types/orderTypes.js'

async function createOrderRecord(order: OrderPayload) {
  return prisma.order.create({
    data: {
      juiceId: order.juiceId,
      machineId: parseInt(order.machine, 10),
      userDocument: order.cpf,
      email: order.email,
      pickupDateTime: order.pickupDateTime,
      updatedAt: new Date(),
      status: 'RECEIVED'
    }
  })
}

async function findOptionByName(name: string) {
  return prisma.option.findFirst({ where: { name } })
}

async function findExtraByName(name: string) {
  return prisma.extra.findFirst({ where: { name } })
}

async function createOrderExtra(orderId: number, extraId: number) {
  return prisma.orderExtra.create({
    data: {
      orderId,
      extraId
    }
  })
}

async function createOrderOption(orderId: number, optionId: number) {
  return prisma.orderOption.create({
    data: {
      orderId,
      optionId
    }
  })
}

async function updateOrderStatus(orderId: number, status: OrderStatus) {
  await prisma.order.update({
    where: { id: orderId },
    data: { status }
  })
}

export default {
  createOrderRecord,
  findOptionByName,
  findExtraByName,
  createOrderExtra,
  createOrderOption,
  updateOrderStatus
}
