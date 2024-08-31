import { Router } from 'express'
import machinesController from '../controllers/machinesController.js'

const machinesRouter = Router()
machinesRouter.get('/machines', machinesController.getMachines)

export default machinesRouter
