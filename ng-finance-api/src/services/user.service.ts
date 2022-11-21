import { userRepository } from "../database/repositories/user.repository"
import { ApiError } from "../helpers/api-error"
import bcrypt from 'bcrypt'
import { IuserCreated } from "../interfaces/interface"
import { AccountService } from "./account.service"
import Users from "../database/entities/User"

export class UserService {

	private _accountService = new AccountService();

    async create(userData: IuserCreated): Promise<String> {

		const userExists = await userRepository.findOneBy({ username: userData.username })

		if (userExists) {
			throw new ApiError('username already exists', 400)
		}
        // segundo parâmetro é o nível de processamento do pc p/ gerar a hash
		const hashPassword = await bcrypt.hash(userData.password, 10)

		const newAccount = await this._accountService.create();
        
        const newUser = userRepository.create({
			username: userData.username,
			password: hashPassword,
			accountId: newAccount.id
		})
		
        //save para de fato salvar no bd - create não salva
		await userRepository.save(newUser)

		return 'sucess'
	}

	async getUser(id: string): Promise<Users | null> {

	    // descobrir forma de retirar password do retorno - confidencial
		const user = userRepository.findOneBy({ id });
		if (!user) throw new ApiError('Not Found', 404);
		
		return user;
    }

	async getUserByname(username: string) {
		const user = await userRepository
            .findOneBy({username});

        if (!user) throw new ApiError('User does not exist', 400);

		return user;
	}

}