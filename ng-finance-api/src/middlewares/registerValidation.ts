import { NextFunction, Request, Response } from 'express'
import Joi from 'joi'
import { ApiError } from '../helpers/api-error'
import passwordComplexity from 'joi-password-complexity'

// eslint-disable-next-line @typescript-eslint/no-extraneous-class
class registerValidate {
  static schema = Joi.object({
    username: Joi.string().min(3).required(),
    password: passwordComplexity().required()
  })

  static validateSchema (req: Request, res: Response, next: NextFunction): void {
    const { error } = registerValidate.schema.validate(req.body)
    // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
    if (error) {
      const { message } = error.details[0]
      throw new ApiError(message, 400)
    }
    next()
  }
}

export default registerValidate
