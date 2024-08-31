import { OrderStatus } from '@prisma/client'
import orderRepository from '../repositories/orderRepository.js'
import { CreateOrder, OrderPayload } from '../types/orderTypes'

async function createOrder(data: OrderPayload[]) {
  const firstOrderPayload = data[0]
  const order = await orderRepository.createOrderRecord(firstOrderPayload)
  await addItensToOrder(data, order)
  return order
}

async function addItensToOrder(data: OrderPayload[], createdOrder: CreateOrder) {
  for (const order of data) {
    await addOptionsToOrder(createdOrder.id, order.options)
    await addExtrasToOrder(createdOrder.id, order.extras)
  }
}

async function addOptionsToOrder(orderId: number, options: { [keyname: string]: boolean }) {
  for (const [optionName, isIncluded] of Object.entries(options)) {
    if (isIncluded) {
      const option = await orderRepository.findOptionByName(optionName)
      if (!option) await orderRepository.updateOrderStatus(orderId, OrderStatus.FAILED)
      if (option) {
        await orderRepository.createOrderOption(orderId, option.id)
      }
    }
  }
}

async function addExtrasToOrder(orderId: number, extras: { [keyname: string]: boolean }) {
  for (const [extraName, isIncluded] of Object.entries(extras)) {
    if (isIncluded) {
      const extra = await orderRepository.findExtraByName(extraName)
      if (extra) {
        await orderRepository.createOrderExtra(orderId, extra.id)
      }
    }
  }
}

export default {
  createOrder
}
