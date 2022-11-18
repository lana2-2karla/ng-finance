import { NextFunction, Request, Response } from 'express';
import { ApiError } from '../helpers/api-error';
import { Token } from '../helpers/jwtToken';

export class authTokenMiddleware {
  static async authToken(req: Request, _res: Response, next: NextFunction) {
    const { authorization } = req.headers;
    if (!authorization) throw new ApiError('Token must be a valid token', 401);
    const token = new Token;
    await token.decodedToken(authorization);
    next();
  }
}