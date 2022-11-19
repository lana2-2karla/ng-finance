import { userRepository } from "../database/repositories/user.repository";
import { ApiError } from "../helpers/api-error";
import { IuserCreated } from "../interfaces/interface";
import bcrypt from 'bcrypt'
import { Token } from "../helpers/jwtToken";

export class Login {

    private _token = new Token();

    async authUser(userData: IuserCreated): Promise<string> {

        const {username, password} = userData;

        const userExists = await userRepository.findOneBy({ username });

		if (!userExists) {
			throw new ApiError('User does not exist', 400)
		}

        const passDecripted = await bcrypt.compare(password, userExists.password);

        if (!passDecripted) {
            throw new ApiError('Unauthorized', 401);
        }
        
        const { id } = userExists; 

        const token = this._token.generateToken({id});

        return token;
    }
}