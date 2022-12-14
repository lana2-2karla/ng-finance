/* eslint-disable @typescript-eslint/strict-boolean-expressions */
import { userRepository } from '../database/repositories/user.repository'
import { ApiError } from '../helpers/api-error'
import { IuserCreated } from '../interfaces/interface'
import bcrypt from 'bcrypt'
import { Token } from '../helpers/jwtToken'

export class Login {
  private readonly _token = new Token()

  async authUser (userData: IuserCreated): Promise<string> {
    const userExists = await userRepository.findOneBy({ username: userData.username })

    if (!userExists) {
      throw new ApiError('User does not exist', 400)
    }

    const passDecripted = await bcrypt.compare(userData.password, userExists.password)

    if (!passDecripted) {
      throw new ApiError('Unauthorized', 401)
    }

    const { id, username, accountId } = userExists

    const token = await this._token.generateToken({ id, username, accountId })

    return token
  }
}
