import { Router } from 'express'
import healthRouter from './healthRouter.js'
import juicesRouter from './juicesRouter.js'
import machinesRouter from './machinesRouter.js'
import orderRouter from './orderRouter.js'

const router = Router()
router.use(healthRouter)
router.use(juicesRouter)
router.use(machinesRouter)
router.use(orderRouter)

export default router
