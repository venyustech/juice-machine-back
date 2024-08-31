import { Router } from 'express'
import { validateSchemaMiddleware } from '../middlewares/validateSchemaMiddleware.js'
import { OrderPayloadArraySchema } from '../schemas/orderSchema.js'
import orderController from '../controllers/orderController.js'

const orderRouter = Router()
orderRouter.post('/order/create', validateSchemaMiddleware(OrderPayloadArraySchema), orderController.createOrder)

export default orderRouter
