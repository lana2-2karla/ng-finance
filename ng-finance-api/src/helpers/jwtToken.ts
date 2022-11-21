import { JwtPayload, sign, SignOptions, verify } from 'jsonwebtoken';
import 'dotenv/config';
import { ApiError } from './api-error';

const SECRET = process.env.JWT_SECRET || '';


export class Token {
    
    private _signOptions: SignOptions = {
        expiresIn: '24h',
        algorithm: 'HS256',
      };

    async generateToken(payload: JwtPayload) {
        return sign(payload, SECRET, this._signOptions);
    }

    async decodedToken(token: string) {
        const payload = verify(token, SECRET) as JwtPayload;
        if(!payload) throw new ApiError('invalid Token', 401)
        return payload;
    }
}
