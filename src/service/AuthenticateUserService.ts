import { getCustomRepository } from 'typeorm';
import { UserRepository } from '../repository/UserRepository';
import { BadRequest } from './../exceptions/BadRequest';
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

interface AuthenticateRequest {
    email: string,
    password: string
}
class AuthenticateUserService {
    async execute({ email, password }: AuthenticateRequest) {

        if (!email || !password) throw new BadRequest('email e senha obrigatórios')

        const userRepository = getCustomRepository(UserRepository)

        const existUser = await userRepository.findOne({ email })

        if (!existUser) throw new BadRequest('email ou senha incorretos')

        const matchers = await bcrypt.compare(password, existUser.password)

        if (!matchers) throw new BadRequest('email ou senha incorretos')

        const payload = {
            email: existUser.email
        }

        const token = jwt.sign(
            payload, 
            '340kdegfk0gqkk0gw--3mf', 
            {
                subject: existUser.id,
                expiresIn: '1d'
            }
        )

        return token
    }
}

export { AuthenticateUserService }