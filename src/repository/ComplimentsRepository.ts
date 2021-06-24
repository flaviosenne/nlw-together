import { EntityRepository, Repository } from "typeorm";
import { Compliment } from "../entity/Compliment";

@EntityRepository(Compliment)
class ComplimentRepository extends Repository<Compliment>{

}

export { ComplimentRepository}