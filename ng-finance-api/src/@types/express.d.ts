// sobrescrevendo o Request do express
// req.data - senha decodificada

import { JwtPayload } from 'jsonwebtoken'

declare global {
  namespace Express {
    export interface Request {
      data: JwtPayload
    }
  }
}
