/* eslint-disable @typescript-eslint/strict-boolean-expressions */
import { NextFunction, Request, Response } from 'express'
import { ApiError } from '../helpers/api-error'
import { Token } from '../helpers/jwtToken'

export class authTokenMiddleware {
  private readonly _token = new Token()

  async authToken (req: Request, _res: Response, next: NextFunction): Promise<void> {
    const { authorization } = req.headers

    if (!authorization) throw new ApiError('Token not found', 404)

    const decoded = await this._token.decodedToken(authorization)

    if (!decoded) throw new ApiError('Invalid token', 401)

    req.data = decoded

    next()
  }
}
