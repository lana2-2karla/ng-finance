import { userRepository } from "../database/repositories/user.repository"
import { ApiError } from "../helpers/api-error"
import bcrypt from 'bcrypt'
import { Ilogin } from "../interfaces/interface"

export class loginservice {

    async create(userData: Ilogin): Promise<Ilogin> {
		const { username, password } = userData

		const userExists = await userRepository.findOneBy({ username })

		if (userExists) {
			throw new ApiError('username already exists', 400)
		}
        // segundo parâmetro é o nível de processamento do pc p/ gerar a hash
		const hashPassword = bcrypt.hash(password, 10)

		const newUser = userRepository.create({
			username, 
            password: hashPassword,
		})
        
        //save para de fato salvar no bd - create não salva
		await userRepository.save(newUser)
        //desconstruindo password e renomeando p/ _
		const { password: _, ...user } = newUser

		return user;
	}

}