import { NextFunction, Request, Response } from 'express'
import { ObjectSchema } from 'joi'

export function validateParams(schema: ObjectSchema) {
  return (req: Request, res: Response, next: NextFunction) => {
    const { error } = schema.validate(req.params)
    if (error) return res.status(400).send({ error: error.details[0].message })
    next()
  }
}
