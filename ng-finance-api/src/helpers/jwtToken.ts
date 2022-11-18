import { sign, SignOptions, verify } from 'jsonwebtoken';
import 'dotenv/config';
import { ApiError } from './api-error';

const SECRET = process.env.JWT_SECRET || '';


export class Token {
    
    private _signOptions: SignOptions = {
        expiresIn: '24h',
        algorithm: 'HS256',
      };

    public generateToken(id: string) {
        return sign(id, SECRET, this._signOptions);
    }

    public decodedToken(token: string) {
        const decoded = verify(token, SECRET);
        if(!decoded) throw new ApiError('invalid Token', 401)
        return decoded;
    }
}
