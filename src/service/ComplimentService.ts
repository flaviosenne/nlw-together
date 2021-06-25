import { BadRequest } from '../exceptions/BadRequest';
import { getCustomRepository } from "typeorm"
import { TagRepository } from '../repository/TagRepository';
import { ComplimentRepository } from '../repository/ComplimentsRepository';
import { UserRepository } from '../repository/UserRepository';

interface ComplemntRequest {
    tagId: string
    userSender: string
    userReceiver: string
    message: string
}
class ComplimentService {
    async execute ({message, tagId, userReceiver, userSender}:ComplemntRequest){

        const complimentRepository = getCustomRepository(ComplimentRepository)
        const userRepository = getCustomRepository(UserRepository)
        const tagRepository = getCustomRepository(TagRepository)

        if(!message) throw new BadRequest('elogio não informado')

        if(userReceiver == userSender) throw new BadRequest('não é permitido comentar para si próprio')

        const userSenderExist = await userRepository.findOne(userSender)
        
        const userReceiverExist = await userRepository.findOne(userReceiver)
        
        if(!userReceiverExist) throw new BadRequest('usuário a receber o elogio não existe')
        
        const tagExist = await tagRepository.findOne(tagId)
        
        if(!tagExist) throw new BadRequest('tag não encontrada')
        
        const compliment = complimentRepository.create({
            tag: tagExist,
            userReceiver: userReceiverExist,
            userSender: userSenderExist,
            message
        })

        await complimentRepository.save(compliment)

        return compliment
    }

    async listByUserReceiverCompliments(userId: string){
        const complimentRepository = getCustomRepository(ComplimentRepository)

        const user = await getCustomRepository(UserRepository).findOne({id: userId})
        
        const compliments = await complimentRepository.find({
            where: {
                userReceiver: user
            },
            relations: ['userReceiver']
        })

        return compliments
    }

    async listByUserSenderCompliments(userId: string){
        const complimentRepository = getCustomRepository(ComplimentRepository)

        const user = await getCustomRepository(UserRepository).findOne({id: userId})
        
        const compliments = await complimentRepository.find({
            where: {
                userSender: user
            },
            relations: ['userSender']
        })

        return compliments
    }
}

export { ComplimentService }