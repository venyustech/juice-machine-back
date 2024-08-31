import { Router } from 'express'
import healthRouter from './healthRouter.js'
import juicesRouter from './juicesRouter.js'
import machinesRouter from './machinesRouter.js'

const router = Router()
router.use(healthRouter)
router.use(juicesRouter)
router.use(machinesRouter)

export default router
