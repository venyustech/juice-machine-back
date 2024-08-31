import { Request, Response } from 'express'
import { AppError, errorTypeToStatusCode, isAppError } from '../utils/errorUtils.js'

export function errorHandlerMiddleware(err: Error | AppError, req: Request, res: Response) {
  console.log(err)
  if (isAppError(err)) {
    return res.status(errorTypeToStatusCode(err.type)).send(err.message)
  }

  return res.send('Internal Server Error').status(500)
}
