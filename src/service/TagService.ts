import { BadRequest } from '../exceptions/BadRequest';
import { getCustomRepository } from "typeorm"
import { TagRepository } from '../repository/TagRepository';


class TagService {
    async execute (name: string){

        const tagRepository = getCustomRepository(TagRepository)

        if(!name) throw new BadRequest('nome não preenchido')

        const tagAlreadyExist = await tagRepository.findOne({name})

        if(tagAlreadyExist) throw new BadRequest('tag já existe na base de dados')

        const tag = tagRepository.create({name})

        await tagRepository.save(tag)

        return tag
        
    }
}

export { TagService }