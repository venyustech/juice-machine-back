import Joi from 'joi'

const OrderPayloadSchema = Joi.object({
  juiceId: Joi.number().integer().positive().required(),
  options: Joi.object().pattern(Joi.string(), Joi.boolean()).required(),
  extras: Joi.object().pattern(Joi.string(), Joi.boolean()).required(),
  machine: Joi.string().pattern(/^\d+$/).required(),
  quantity: Joi.number().integer().positive().required(),
  cpf: Joi.string()
    .pattern(/^\d{11}$/)
    .required(),
  email: Joi.string().email().required(),
  pickupDateTime: Joi.alternatives().try(Joi.date().iso(), Joi.number()).required()
})

const OrderPayloadArraySchema = Joi.array().items(OrderPayloadSchema)

export { OrderPayloadArraySchema }
