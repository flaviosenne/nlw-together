import { BadRequest } from './../exceptions/BadRequest';
import { getCustomRepository } from "typeorm"
import { UserRepository } from "../repository/UserRepository"

type UserRequest = {
    name: string
    email: string
    admin?: boolean
    password?: string
}
class UserService {
    async execute ({name, email, admin, password}: UserRequest){

        const userRepository = getCustomRepository(UserRepository)

        if(!email) throw new BadRequest("email incorreto")

        const userAlreadyExists = await userRepository.findOne({email})

        if(userAlreadyExists) throw new BadRequest("email já existe")

        const user = userRepository.create({name, email, admin, password})

        await userRepository.save(user)

        return user
    }
}

export { UserService}