import { Router } from 'express'
import healthRouter from './healthRouter.js'
import juicesRouter from './juicesRouter.js'

const router = Router()
router.use(healthRouter)
router.use(juicesRouter)

export default router
