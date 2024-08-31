import Joi from 'joi'

const findJuiceParamsSchema = Joi.object({
  id: Joi.string().replace(/"/g, '').pattern(/^\d+$/).required()
})

export { findJuiceParamsSchema }
