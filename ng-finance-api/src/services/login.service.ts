import { userRepository } from "../database/repositories/user.repository"
import { ApiError } from "../helpers/api-error"
import bcrypt from 'bcrypt'
import { IuserCreated } from "../interfaces/interface"
import { AccountService } from "./account.service"

export class Loginservice {

	private _accountService = new AccountService();

    async create(userData: IuserCreated): Promise<String> {
		//const { username, password } = userData

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
        //desconstruindo password e renomeando p/ _
		//const { password: _, ...user } = newUser

		return 'sucess'
	}

}