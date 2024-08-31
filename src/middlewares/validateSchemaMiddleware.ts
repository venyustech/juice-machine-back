import { NextFunction, Request, Response } from 'express'
import { ObjectSchema, ArraySchema } from 'joi'

type Schema = ObjectSchema | ArraySchema

export function validateSchemaMiddleware(schema: Schema) {
  return (req: Request, res: Response, next: NextFunction) => {
    const validation = schema.validate(req.body)
    if (validation.error) {
      return res.status(400).send({ error: validation.error.message })
    }
    next()
  }
}
