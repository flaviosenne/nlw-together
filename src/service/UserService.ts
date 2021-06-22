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

        console.log('email',email)
        if(!email) throw new Error("emial incorreto")

        const userAlreadyExists = await userRepository.findOne({email})

        if(userAlreadyExists) throw new Error("user já existe")

        const user = userRepository.create({name, email, admin, password})

        await userRepository.save(user)

        return user
    }
}

export { UserService}