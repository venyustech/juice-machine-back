import { Router } from 'express'
import juicesController from '../controllers/juicesController.js'
import { validateParams } from '../middlewares/validateParamsSchema.js'
import { findJuiceParamsSchema } from '../schemas/juiceSchema.js'

const juicesRouter = Router()
juicesRouter.get('/juices', juicesController.getJuices)
juicesRouter.get('/juice/:id', validateParams(findJuiceParamsSchema), juicesController.getJuiceById)

export default juicesRouter
