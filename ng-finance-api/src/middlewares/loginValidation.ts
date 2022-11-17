import { NextFunction, Request, Response } from 'express';
import Joi from 'joi';
import { ApiError } from '../helpers/api-error';
import passwordComplexity from "joi-password-complexity";

class loginValidate {
  static schema = Joi.object({
    username : Joi.string().min(3).required(),
    password: passwordComplexity().required(),
  })

  static validateSchema(req: Request, res: Response, next: NextFunction) {
    const { error } = loginValidate.schema.validate(req.body);
    if (error) {
      const { message } = error.details[0];
      throw new ApiError(message, 400);
    }
    next();
  }
}

export default loginValidate;