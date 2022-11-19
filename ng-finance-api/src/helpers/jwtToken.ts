import { JwtPayload, sign, SignOptions, verify } from 'jsonwebtoken';
import 'dotenv/config';
import { ApiError } from './api-error';
import { IPayloadId } from '../interfaces/interface';

const SECRET = process.env.JWT_SECRET || '';


export class Token {
    
    private _signOptions: SignOptions = {
        expiresIn: '24h',
        algorithm: 'HS256',
      };

    async generateToken(id: JwtPayload) {
        return sign(id, SECRET, this._signOptions);
    }

    async decodedToken(token: string) {
        const { id } = verify(token, SECRET) as IPayloadId;
        if(!id) throw new ApiError('invalid Token', 401)
        return id;
    }
}
